import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />

    </Switch>
  );
}

export default App;
