/** @format */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <>
      <Router>
        <PageWrapper>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
        </PageWrapper>
      </Router>
    </>
  );
}

export default App;
