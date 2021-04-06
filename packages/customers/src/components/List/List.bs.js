

import * as React from "react";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function List(Props) {
  var customers = CustomerServices$PetgroomingClientCustomer.Repository.list(undefined);
  var customersList = customers.map(function (customer) {
        return React.createElement("li", {
                    key: customer.id
                  }, React.createElement("h3", undefined, customer.name));
      });
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Customers"), React.createElement("ul", undefined, customersList));
}

var make = List;

export {
  make ,
  
}
/* react Not a pure module */
