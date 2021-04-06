@react.component
let make = (~id) => {
    open CustomerServices.Repository
    let customer = CustomerServices.Repository.show();

    <div id=id>
        {React.string("Hello, ")}
        {React.string(customer.name)}
    </div>
}
