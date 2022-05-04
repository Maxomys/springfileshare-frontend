import axios from "axios";
import TokenService from "./TokenService";

const BASE_URL = getBaseUrl();
const LOGIN_URL = '/login';
const REFRESH_TOKEN_URL = '/token/refresh';

function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080/api';
  } else {
    return process.env.REACT_APP_SERVER_URL;
  }
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  }, 
  (error) => {
    return Promise.reject(error)
  }
);

//refresh the token
instance.interceptors.response.use(
  (response) => {
    return response;
  }, 
  async (error) => {
    const originalConfig = error.config;

    if (error.response.status !== 401 || originalConfig.url === LOGIN_URL || originalConfig._retry) {
      return Promise.reject(error);
    }
        
    originalConfig._retry = true;

    try {
      const refreshToken = TokenService.getRefreshToken();
      const res = await axios.get(BASE_URL + REFRESH_TOKEN_URL, {   //not using instance
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      });
      
      const freshAccessToken = res.data.accessToken;
      const freshRefreshToken = res.data.refreshToken;

      TokenService.setAccessToken(freshAccessToken);
      TokenService.setRefreshToken(freshRefreshToken);

      return instance(originalConfig);
    } catch (_error) {
      return Promise.reject(_error);
    }
  }
);

export default instance;
