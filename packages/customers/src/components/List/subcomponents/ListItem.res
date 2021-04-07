open Customer

@react.component
let make = (~customer: customer) => (
  <li>
    <h3>{React.string(customer.name)}</h3>
  </li>
)
