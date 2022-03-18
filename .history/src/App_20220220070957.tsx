import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './home/HomePageHomePage';
import PasswordRecover from './login/PasswordRecover';
import PasswordReset from './login/PasswordReset';
import SignupPage from "./signup/SignupPage";
import LoginPage from "./login/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/password/reset" component={PasswordReset} />
      <Route exact path="/password/recover" component={PasswordRecover} />
    </Switch>
  );
}

export default App;
