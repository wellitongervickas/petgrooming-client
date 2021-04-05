

import * as React from "react";
import * as ReactDom from "react-dom";
import * as App$PetgroomingClientCustomer from "./App.bs.js";

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(App$PetgroomingClientCustomer.make, {}), root);
}

export {
  
}
/* root Not a pure module */
