import React from 'react';
import { Route } from "react-router-dom";

export default function SecureRoute(props) {
  return <Route {...props} />;
}