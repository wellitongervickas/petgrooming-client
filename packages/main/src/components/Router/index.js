import { Suspense } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";

const router = () => (
  <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((props) => (
          <Route key={props.path} {...props} />
        ))}
        <Redirect from="*" to="/customers" />
      </Switch>
    </Suspense>
  </HashRouter>
);

export default router;
