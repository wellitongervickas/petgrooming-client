@react.component
let make = () => {
    let route = Routes.useRoute()
    
    <>
        {switch route {
        | Show(id) => <Show id />
        | _ => <List />
        }}
    </>
}