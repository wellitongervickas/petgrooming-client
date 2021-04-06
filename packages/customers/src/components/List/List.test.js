import React from "react";
import { render } from "@testing-library/react";
import List from "./index";

describe("Components <List>", () => {
  it("should render in document", () => {
    const { baseElement } = render(<List />);
    expect(baseElement).toBeInTheDocument(true);
  });
});
