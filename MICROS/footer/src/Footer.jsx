import React from "react";
import ReactDOM from "react-dom";
import Pie from "./components/Pie";

import "./index.css";

const Footer = () => (
  <div>
  <Pie></Pie>
  </div>
);
ReactDOM.render(<Footer/>, document.getElementById("app"));
