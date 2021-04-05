

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as CustomerServices$PetgroomingClientCustomer from "../../services/CustomerServices.bs.js";

function List(Props) {
  var customers = Curry._1(CustomerServices$PetgroomingClientCustomer.Repository.List.get, undefined);
  var customersList = customers.map(function (customer) {
        return React.createElement("li", {
                    key: customer.id
                  }, React.createElement("h3", undefined, customer.name));
      });
  return React.createElement("div", undefined, React.createElement("ul", undefined, customersList));
}

var get = CustomerServices$PetgroomingClientCustomer.Repository.List.get;

var make = List;

export {
  get ,
  make ,
  
}
/* react Not a pure module */
