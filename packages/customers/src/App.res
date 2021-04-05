%%raw(`
import React from "react";

import CustomersList from "./List.bs";

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Customers</h2>
    <React.Suspense fallback="Loading Customers List">
      <CustomersList />
    </React.Suspense>
  </div>
);

export default App;
`);