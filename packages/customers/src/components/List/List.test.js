import React from "react";
import { render } from "@testing-library/react";
import List from "./index";

const customerList = [
  {
    id: "1",
    name: "welliton gervickas",
  },
];

jest.mock("../../services/CustomerServices.bs.js", () => ({
  Repository: {
    list: () => customerList,
  },
}));

describe("Components <List>", () => {
  it("should render in document", () => {
    const { baseElement } = render(<List />);
    expect(baseElement).toBeInTheDocument(true);
  });

  it("should render list of customers", () => {
    const { getByText } = render(<List />);
    const customer = getByText(customerList[0].name);
    expect(customer).toBeInTheDocument();
  });
});
