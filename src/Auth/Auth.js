/** @format */

import auth0 from 'auth0-js';

export default class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.requestedScopes = 'openid profile email read:courses';
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: 'token, id_token',
      scope: this.requestedScopes,
    });
  }
  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = (_) => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSetssion(authResult);
        this.history.push('/');
      } else if (err) {
        this.history.push('/');
        alert(`Error: ${err.error}. Check the console for further details.`);
        console.log(err);
      }
    });
  };

  setSetssion = (authResult) => {
    console.log(authResult);
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    const scopes = authResult.scope || this.requestedScopes || '';

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  };

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_At'));
    return new Date().getTime() < expiresAt;
  }

  Logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    this.history.push('/');
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access-token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  };

  getProfile = (cb) => {
    // possibilite d'user JWT DECODE
    if (this.userProfile) return cb(this.userProfile);
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) this.userProfile = profile;
      cb(profile, err);
    });
  };

  userHascopes(scopes) {
    const grantedScopes = (
      JSON.parse(localStorage.getItem('scopes')) || ''
    ).split(' ');
    return scopes.every((scope) => grantedScopes.includes(scope));
  }

  // add user context
  function(user, context, callback) {
    // TODO: implement your rule
    if (!user.email || !user.verified) {
      return callback(null, user, context);
    }

    user.app_metadata = user.app_metadata || {};

    const addRolesToUser = function (user) {
      const endsWidth = '@reactjsconsulting.com';

      if (
        user.email &&
        user.email.substring(user.email.length - endsWidth.length, user.email)
      ) {
        return ['admin'];
      }

      return ['user'];
    };

    const roles = addRolesToUser(user);

    user.app_metadata.roles = roles;

    auth0.users
      .updateAppMetadata(user.user_id, user.app_metadata)
      .then(function () {
        context.idToken['http://localhost:3000/roles'] =
          user.app_metadata.roles;
        callback(null, user, context);
      })
      .catch(function (err) {
        callback(err);
      });
  }
}
