import React, { Component } from 'react'
import LoginButton from './Auth/LoginButton';
import LogoutButton from './Auth/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated ? (
        <>
          <Link to ="/profile">View profile</Link>
          <LogoutButton />
        </>
      ) : <LoginButton />}
    </div>
  );
}

export default Home;