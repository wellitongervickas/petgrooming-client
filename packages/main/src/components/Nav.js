import React from "react";
import { Link } from "react-router-dom";

const nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Go to home</Link>
      </li>
      <li>
        <Link to="customers">Go to customers</Link>
      </li>
    </ul>
  </nav>
);

export default nav;
