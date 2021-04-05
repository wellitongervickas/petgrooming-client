type routes =
  | Show(string)
  | List

let useRoute: unit => routes = () => {
  let url = RescriptReactRouter.useUrl()
  let hash = url.hash |> Js.String.split("/")

  switch hash {
  | ["", "customers", id] => Show(id)
  | ["", "customers"] => List
  | _ => List
  }
}