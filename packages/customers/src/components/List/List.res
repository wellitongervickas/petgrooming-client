open Customer

@react.component
let make = () => {
  let customers = CustomerServices.Repository.list()

  <div>
    <h2>{React.string("Customers")}</h2>
    {switch Js.Array.length(customers) > 0 {
      | true => (
        <ul>
          {customers
            |> Js.Array.map((customer) => <ListItem key=customer.id customer /> )
            |> React.array
          }
        </ul>
      )
      | _ => React.string("Customers list is empty yet")
    }}
  </div>
}
