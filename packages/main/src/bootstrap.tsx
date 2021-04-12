import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import Router from "./components/Router";

ReactDOM.render(
  <StrictMode children={<Router />} />,
  document.getElementById("root")
);
