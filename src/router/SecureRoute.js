import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Auth from './../utils/Auth';

export default (props) => {

  if (!props.public && !Auth.isAuthenticated()) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />;
}