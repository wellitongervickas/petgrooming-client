import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./index";

describe("Components <ErrorBoundary>", () => {
  const fallback = <div>Fallback Component</div>;

  const Broken = () => {
    throw new Error("Broken component");
  };

  const renderComponent = (children) =>
    render(
      <ErrorBoundary fallback={fallback}>
        {children || <Broken />}
      </ErrorBoundary>
    );

  it("should display children component without component throw", () => {
    const { getByText } = renderComponent("Children component");
    expect(getByText("Children component")).toBeTruthy();
  });

  it("should display fallback component and throw error in console.error", () => {
    jest.spyOn(console, "error").mockImplementation();
    const { getByText } = renderComponent();

    expect(console.error.mock.calls[0][0]).toMatch(/Broken component/);
    expect(getByText("Fallback Component")).toBeTruthy();
  });
});
