import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import CallBack from './Callback';
import { useAuth0 } from '@auth0/auth0-react';

const App  = (props) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Nav />
      <div className='body'>
        <Route path='/' exact component={Home} />
        <Route path='/profile' 
          render={
             props => 
               isAuthenticated
               ? <Profile {...props}/> 
               : <Redirect />
             
          }
        />
        <Route path='/callback' component={CallBack} />
      </div>
    </>
  );
}

export default App;
