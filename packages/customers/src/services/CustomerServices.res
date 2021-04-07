open Customer

module Repository = {
  let list = (): array<customer> => [{ id: "1", name: "Welliton"}, { id: "2", name: "Jhon doe"}]
  let read = (): customer => ({ id: "1", name: "Welliton"})
  let remove = () => ()
  let update = () => ()
}
