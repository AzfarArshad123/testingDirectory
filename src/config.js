const BASE_URL = process.env.REACT_APP_OKTA_BASE_URL;
const CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID;
const ISSUER = process.env.REACT_APP_OKTA_ISSUER;
const LOGOUT_URI = process.env.REACT_APP_OKTA_LOGOUT_URI;
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/login/callback`;

const oidc = {
  baseUrl: BASE_URL,
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: REDIRECT_URI,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  postLogoutRedirectUri: LOGOUT_URI,
  disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
};

export default oidc;
