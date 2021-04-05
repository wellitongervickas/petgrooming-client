include CustomerServices.Repository.List

@react.component
let make = () => {
    let customers = CustomerServices.Repository.List.get()

    let customersList = customers 
        |> Js.Array.map((customer) => {
            <li key={customer.id}>
                <h3>{React.string(customer.name)}</h3>
            </li>
        });

    <div>
        <ul>
            {React.array(customersList)}
        </ul>
    </div>
}