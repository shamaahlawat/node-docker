import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home.js';

const Routes = {
  get: function (config) {
    console.log(config);
    return (
      <BrowserRouter>
        <Route path='/' render={props => (
          <Home {...props}  config={config} />
        )} />
      </BrowserRouter>
    );
  }
};

module.exports = Routes;
