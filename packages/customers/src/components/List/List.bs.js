

import * as React from "react";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function List(Props) {
  var customers = CustomerServices$PetgroomingClientCustomer.Repository.list(undefined);
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Customers"), React.createElement("ul", undefined, customers.map(function (customer) {
                      return React.createElement("li", {
                                  key: customer.id
                                }, React.createElement("h3", undefined, customer.name));
                    })));
}

var make = List;

export {
  make ,
  
}
/* react Not a pure module */
