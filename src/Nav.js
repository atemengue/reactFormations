import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';


 const Nav = (props) => {
  const { isAuthenticated } = useAuth0();
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
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/public'>Public</Link>
          </li>
          {
            isAuthenticated  && (
              <li>
              <Link to='/private'>private</Link>
            </li>
            )
          }
        </ul>
      </nav>
    );
}

export default Nav;