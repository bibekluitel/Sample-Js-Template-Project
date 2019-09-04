
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import SecureRoute from '.';
import Pages from './../pages';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/customerdetails" component={Pages.CustomerDetails} />
        <Route path="/conversionresult" component={Pages.CustomerResult} />
        <Route path="/" component={Pages.Dashboard} />
      </Switch>
    </Router>
  );
}