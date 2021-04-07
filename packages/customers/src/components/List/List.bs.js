

import * as React from "react";
import * as ListItem$PetgroomingClientCustomer from "./subcomponents/ListItem.bs.js";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function List(Props) {
  var customers = CustomerServices$PetgroomingClientCustomer.Repository.list(undefined);
  var match = customers.length > 0;
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Customers"), match ? React.createElement("ul", undefined, customers.map(function (customer) {
                        return React.createElement(ListItem$PetgroomingClientCustomer.make, {
                                    customer: customer,
                                    key: customer.id
                                  });
                      })) : "Customers list is empty yet");
}

var make = List;

export {
  make ,
  
}
/* react Not a pure module */
