
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { SecureRoute } from '.';
import Pages from './../pages';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <SecureRoute path="/login" component={Pages.Login} public={true} />
        <SecureRoute path="/" component={Pages.Dashboard} />
      </Switch>
    </Router>
  );
}