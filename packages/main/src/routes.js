import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

const CustomersRouter = React.lazy(() => import("customers/Router"));

const Routes = () => (
  <Router>
    <Switch>
      <React.Suspense fallback={"Loading routes"}>
        <nav>
          <ul>
            <li>
              <Link to="customers">Go to customers</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/customers" component={CustomersRouter} />
        <Route exact path="/customers/:id" component={CustomersRouter} />
      </React.Suspense>
    </Switch>
  </Router>
);

export default Routes;
