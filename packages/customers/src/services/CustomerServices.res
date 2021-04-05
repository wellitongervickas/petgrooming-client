module Repository = {
    module List = {
        type getter = { id: string, name: string }
        let get = (): array<getter> => [{ id: "1", name: "Welliton"}, { id: "2", name: "Jhon doe"}]
    }

    module Show = {
        type readder = { id: string, name: string }
        let read = (): readder => ({ id: "1", name: "Welliton"})
    }
}