import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './home/HomePageHomePage';
import PasswordRecover from './login/PasswordRecover';
import PasswordReset from './login/PasswordReset';
import SignupPage from "./signup/SignupPage";;

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

    </Switch>
  );
}

export default App;
