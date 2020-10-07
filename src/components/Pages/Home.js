/** @format */

import React, { Component } from 'react';
import Header from '../Common/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='Welcome to Our Studio!'
          subtitle="It's NICE TO TO MEET YOU"
          buttonText='Tell me more'
          link='/services'
          showButton={true}
        />
      </div>
    );
  }
}

export default Home;
