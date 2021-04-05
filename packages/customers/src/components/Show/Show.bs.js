

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function Show(Props) {
  var id = Props.id;
  var customer = Curry._1(CustomerServices$PetgroomingClientCustomer.Repository.Show.read, undefined);
  return React.createElement("div", {
              id: id
            }, "Hellow, ", customer.name);
}

var read = CustomerServices$PetgroomingClientCustomer.Repository.Show.read;

var make = Show;

export {
  read ,
  make ,
  
}
/* react Not a pure module */
