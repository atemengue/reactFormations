import auth0 from 'auth0-js';

export default class Auth  {
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUHT0_DOMAIN,
      clientID: process.env.REACT_APP_AUHT0_CLIENT_ID,
      redirectUri : process.env.REACT_APP_AUHT0_CALLBACK_URL,
      responseType: 'token, _id_token',
      scope: "openid profile email"
    });
  }
}