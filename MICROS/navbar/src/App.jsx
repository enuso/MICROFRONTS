import React from "react";
import ReactDOM from "react-dom";
import Contador from "./components/Contador";

import "./index.css";

const App = () => (
  <>
  <Contador/>
</>
);
ReactDOM.render(<App />, document.getElementById("app"));
