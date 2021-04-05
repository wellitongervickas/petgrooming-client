import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const CustomersList = React.lazy(() => import("customers/List"));
const FinancesList = React.lazy(() => import("finances/List"));

const Routes = () => (
  <Router>
    <Switch>
      <React.Suspense fallback={"Loading routes"}>
        <Route exact path="/" component={CustomersList} />
        <Route exact path="/finances" component={FinancesList} />
      </React.Suspense>
    </Switch>
  </Router>
);

export default Routes;
