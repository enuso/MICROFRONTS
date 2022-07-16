import React from "react";
import ReactDOM from "react-dom";
import Cuerpo from "./components/Cuerpo";

import "./index.css";

const App = () => (
 <>
   <Cuerpo/>
 </>
);
ReactDOM.render(<App />, document.getElementById("app"));
