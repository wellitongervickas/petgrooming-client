

import * as React from "react";
import * as List$PetgroomingClientCustomer from "../List/List.bs.js";
import * as Show$PetgroomingClientCustomer from "../Show/Show.bs.js";
import * as Routes$PetgroomingClientCustomer from "./Routes.bs.js";

function Router(Props) {
  var route = Routes$PetgroomingClientCustomer.useRoute(undefined);
  return React.createElement(React.Fragment, undefined, route ? React.createElement(Show$PetgroomingClientCustomer.make, {
                    id: route._0
                  }) : React.createElement(List$PetgroomingClientCustomer.make, {}));
}

var make = Router;

export {
  make ,
  
}
/* react Not a pure module */
