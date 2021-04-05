@react.component
let make = (): React.element => {
    let route = Routes.useRoute()
    
    <>
        {switch route {
        | Show(id) => <Show id />
        | _ => <List />
        }}
    </>
}