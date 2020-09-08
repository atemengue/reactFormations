/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import jwt from 'jsonwebtoken';

const Nav = (props) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const userHascopes = (scopes) => {
    console.log(scopes);

    const grantedScopes = (
      JSON.parse(localStorage.getItem('scopes')) || ''
    ).split(' ');

    console.log(grantedScopes);

    console.log(scopes.every((scope) => grantedScopes.includes(scope)));
    return scopes.every((scope) => grantedScopes.includes(scope));
  };

  useEffect(() => {
    async function getAccessToken() {
      const accessToken = await getAccessTokenSilently();
      const decodeToken = jwt.decode(accessToken);
      localStorage.setItem('scopes', JSON.stringify(decodeToken.scope));
    }
    if (isAuthenticated) {
      getAccessToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/public'>Public</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to='/private'>private</Link>
          </li>
        )}
        {isAuthenticated && userHascopes(['read:courses']) && (
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
