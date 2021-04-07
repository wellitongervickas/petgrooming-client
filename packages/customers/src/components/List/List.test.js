import React from "react";
import { render } from "@testing-library/react";
import List from "./index";
import CustomerServices from "../../services/CustomerServices.bs.js";

const customerList = [
  {
    id: "1",
    name: "welliton gervickas",
  },
  {
    id: "2",
    name: "jhon doen",
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

  it("should render all customers of list", () => {
    const { getByText } = render(<List />);
    expect(
      customerList.every((customer) => getByText(customer.name))
    ).toBeTruthy();
  });

  it("should render a message when customers list is empty", () => {
    jest.spyOn(CustomerServices.Repository, "list").mockReturnValue([]);
    const { getByText } = render(<List />);
    expect(getByText("Customers list is empty yet"));
  });
});
