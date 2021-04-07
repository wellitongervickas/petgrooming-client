

import * as React from "react";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function Read(Props) {
  var id = Props.id;
  var customer = CustomerServices$PetgroomingClientCustomer.Repository.read(undefined);
  return React.createElement("div", {
              id: id
            }, "Hello, ", customer.name);
}

var make = Read;

export {
  make ,
  
}
/* react Not a pure module */
