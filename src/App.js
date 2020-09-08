/** @format */

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import CallBack from './Callback';
import { useAuth0 } from '@auth0/auth0-react';
import Public from './Public';
import Private from './Private';
import Courses from './Courses';

const App = (props) => {
  const { isAuthenticated } = useAuth0();

  const userHascopes = (scopes) => {
    const grantedScopes = (
      JSON.parse(localStorage.getItem('scopes')) || ''
    ).split(' ');
    console.log(grantedScopes, 'GRANTED SCOPES');
    return scopes.every((scope) => grantedScopes.includes(scope));
  };

  return (
    <>
      <Nav />
      <div className='body'>
        <Route path='/' exact component={Home} />
        <Route
          path='/profile'
          render={(props) =>
            isAuthenticated ? <Profile {...props} /> : <Redirect />
          }
        />
        <Route path='/callback' component={CallBack} />
        <Route path='/public' component={Public} />
        <Route
          path='/private'
          render={(props) =>
            isAuthenticated ? <Private {...props} /> : <Redirect />
          }
        />
        <Route
          path='/courses'
          c
          render={(props) =>
            isAuthenticated && userHascopes(['read:courses']) ? (
              <Courses auth={userHascopes} {...props} />
            ) : (
              <Redirect />
            )
          }
        />
      </div>
    </>
  );
};

export default App;
