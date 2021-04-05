import React from "react";

const CustomersList = React.lazy(() => import("customers/List"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Main</h2>
    <React.Suspense fallback="Loading list">
      <CustomersList />
    </React.Suspense>
  </div>
);

export default App;
