

import * as React from "react";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function Show(Props) {
  var id = Props.id;
  var customer = CustomerServices$PetgroomingClientCustomer.Repository.show(undefined);
  return React.createElement("div", {
              id: id
            }, "Hello, ", customer.name);
}

var make = Show;

export {
  make ,
  
}
/* react Not a pure module */
