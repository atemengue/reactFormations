/** @format */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import Services from './components/Pages/Services';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <>
      <Router>
        <PageWrapper>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </PageWrapper>
      </Router>
    </>
  );
}

export default App;
