import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './home/HomePageHomePage';
import PasswordRecover from './login/PasswordRecover';
import PasswordReset from './login/PasswordReset';
import SignupPage from "./signup/SignupPage";
import LoginPage from "./login/LoginPage";
import FaqPage from "./faq/FaqPage";
import ContactPage from "./contact/ContactPage";
import ProtectedRoute from "./common/ProtectedRoute";

import UserGuard from "./guards/user.guard";
import AdminGuard from "./guards/admin.guard";
import GuestGuard from "./guards/guest.guard";

import UserProvider from "./user/UserContext"

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/password/reset" component={PasswordReset} />
      <Route exact path="/password/recover" component={PasswordRecover} />
    </Switch>
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
