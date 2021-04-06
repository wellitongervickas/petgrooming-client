module Repository = {
    type customer = {
        id: string,
        name: string,
    }

    let list = (): array<customer> => [{ id: "1", name: "Welliton"}, { id: "2", name: "Jhon doe"}]

    let show = (): customer => ({ id: "1", name: "Welliton"})

    let remove = () => ()

    let update = () => ()
}