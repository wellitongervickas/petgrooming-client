import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

const CustomersRouter = React.lazy(() => import("customers/Router"));

const Routes = () => (
  <Router>
    <Switch>
      <React.Suspense fallback={"Loading routes"}>
        <Nav />
        <Route exact path="/customers" component={CustomersRouter} />
        <Route exact path="/customers/:id" component={CustomersRouter} />
      </React.Suspense>
    </Switch>
  </Router>
);

export default Routes;
