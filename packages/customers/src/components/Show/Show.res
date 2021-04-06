@react.component
let make = (~id) => {
    open CustomerServices.Repository
    let customer = CustomerServices.Repository.show();

    <div id=id>
        {React.string("Hellow, ")}
        {React.string(customer.name)}
    </div>
}