import auth0 from 'auth0-js';

export default class Auth  {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: 'token, id_token',
      scope: 'openid profile email',
    });
  }
  login = () => {
    this.auth0.authorize();
  }

  handleAuthentication = _ => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSetssion(authResult);
        this.history.push("/");
      } else if (err) {
        this.history.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        console.log(err);
      }
    })
  }

  setSetssion = authResult =>  {
    console.log(authResult);
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_At"));
    return new Date().getTime() < expiresAt;
  }

  Logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  this.history.push("/");
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access-token');
    if(!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  }

  getProfile = cb => {
    // possibilite d'user JWT DECODE
    if(this.userProfile) return cb(this.userProfile);
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) this.userProfile = profile;
      cb(profile, err);
    })
  }
}