import React from "react";
import routes from "./routes";

jest.mock("customers/components/Router", () => <div>CustomersRouter</div>, {
  virtual: true,
});

describe("Components <Router", () => {
  describe("routes/customers", () => {
    it("should return CustomersRouter component in routes list", async () => {
      const customerRoute = routes.find((route) =>
        route.path.includes("/customers")
      );

      const {
        props: { children: component },
      } = await customerRoute.component._payload._result();

      expect(component).toBe("CustomersRouter");
    });
  });
});
