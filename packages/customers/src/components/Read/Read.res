open Customer

@react.component
let make = (~id) => {
  let customer = CustomerServices.Repository.read();

  <div id=id>
    {React.string("Hello, ")}
    {React.string(customer.name)}
  </div>
}
