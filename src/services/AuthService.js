import axios from 'axios'
import api from './api'
import TokenService from './TokenService'

const LOGIN_URL = 'http://localhost:8080/api/login'

const login = function(username, password) {
  axios.post(LOGIN_URL, {}, {
    params: {
      'username': username,
      'password': password
    }
  }).then(response => {
    if (response.data.accessToken && response.data.refreshToken) {
      TokenService.setAccessToken(response.data.accessToken);
      TokenService.setRefreshToken(response.data.refreshToken);


    }
  }).catch(error => {
    console.log(error);
  })
}

const AuthService = {
  login
}

export default AuthService;
