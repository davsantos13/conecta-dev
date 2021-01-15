import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import authService from '../services/authService';

function GuestRoute({ element: Component, ...rest }) {
  const isAuthenticated = authService.isAuthenticaded;
  return <Route {...rest} element={isAuthenticated ? <Home /> : Component} />;
}

export default GuestRoute;
