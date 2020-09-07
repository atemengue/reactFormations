import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import Auth from './Auth/Auth';

class App extends  Component {
constructor(props) {
  super(props);
  this.auth = new Auth(this.props.history);
}


render() {
  return (
    <>
      <Nav />
      <div className="body">
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </div>
    </>
  );
  }
}
export default App;
