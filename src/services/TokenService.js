const getAccessToken = function() {
  return localStorage.getItem('accessToken');
}

const setAccessToken = function(token) {
  localStorage.setItem('accessToken', token);
}

const getRefreshToken = function() {
  return localStorage.getItem('refreshToken');
}

const setRefreshToken = function(token) {
  localStorage.setItem('refreshToken', token);
}

const getUsername = function() {
  const jtwObj = parseJwt(localStorage.getItem('accessToken'));

  if (jtwObj) {
    return jtwObj.sub;
  }
}

function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

const TokenService = {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  getUsername
}

export default TokenService;
