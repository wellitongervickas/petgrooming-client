

import * as React from "react";

function ListItem(Props) {
  var customer = Props.customer;
  return React.createElement("li", undefined, React.createElement("h3", undefined, customer.name));
}

var make = ListItem;

export {
  make ,
  
}
/* react Not a pure module */
