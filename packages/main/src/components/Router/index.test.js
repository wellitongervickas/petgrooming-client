import React, { Children } from "react";
import { render } from "@testing-library/react";
import Router from "./index";

jest.mock("customers/components/Router", () => <div>CustomersRouter</div>, {
  virtual: true,
});

describe("Components <Router>", () => {
  it("should render customers routes", async () => {
    const { getByText, baseElement } = render(<Router />);
    expect(getByText("Loading...")).toBeTruthy();
  });
});
