import React from "react";
import ReactDOM from "react-dom";
import Contador from "../../navbar/src/components/Contador";

import Cuerpo from "../../cuerpo/src/components/Cuerpo";
// import Mf_cuerpo from "../../cuerpo/src/Mf_cuerpo";
import Pie from "../../footer/src/components/Pie";
import Boostrap from '../../marketing/src/boostrap';
import "./index.css";

const App = () => (
  <>
  <Contador/>
    <Cuerpo/> 
  {/* <Mf_cuerpo></Mf_cuerpo> */}
  <Boostrap/>
  <Pie/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
