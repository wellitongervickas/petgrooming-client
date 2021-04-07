@react.component
let make = (): React.element => {
  let route = Routes.useRoute()
  <>
    {switch route {
    | Read(id) => <Read id />
    | _ => <List />
    }}
  </>
}
