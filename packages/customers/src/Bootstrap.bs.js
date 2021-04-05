

import * as React from "react";
import * as ReactDom from "react-dom";
import * as Router$PetgroomingClientCustomer from "./Components/Router/Router.bs.js";

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Router$PetgroomingClientCustomer.make, {}), root);
}

export {
  
}
/* root Not a pure module */
