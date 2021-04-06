
@react.component
let make = () => {
  open CustomerServices.Repository

  let customers = CustomerServices.Repository.list()
  let customersList = customers
    |> Js.Array.map((customer) => {
      <li key={customer.id}>
        <h3>{React.string(customer.name)}</h3>
      </li>
    });

  <div>
    <h2>{React.string("Customers")}</h2>
    <ul>
      {React.array(customersList)}
    </ul>
  </div>
}
