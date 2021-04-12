import { lazy } from "react";

const CustomersRouter = lazy(() => import("customers/components/Router");

export default [
  {
    exact: true,
    path: "/customers",
    component: CustomersRouter,
  },
  {
    exact: true,
    path: "/customers/:id",
    component: CustomersRouter,
  },
];
