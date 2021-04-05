include CustomerServices.Repository.Show

@react.component
let make = (~id) => {
    let customer = CustomerServices.Repository.Show.read();

    <div id=id>
        {React.string("Hellow, ")}
        {React.string(customer.name)}
    </div>
}