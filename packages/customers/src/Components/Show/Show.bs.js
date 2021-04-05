

import * as React from "react";

function Show(Props) {
  var id = Props.id;
  return React.createElement("div", undefined, "Customer show component: ", id);
}

var make = Show;

export {
  make ,
  
}
/* react Not a pure module */
