@react.component
let make = (~id) => (
    <div>
        {React.string("Customer show component: ")}
        {React.string(id)}
    </div>
)