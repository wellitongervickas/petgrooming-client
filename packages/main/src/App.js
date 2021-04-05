import React from "react";

const CustomersList = React.lazy(() => import("customers/List"));

const App = () => (
  <div>
    <h2>Main</h2>
    <React.Suspense fallback="Loading list of customers">
      <CustomersList />
    </React.Suspense>
  </div>
);

export default App;
