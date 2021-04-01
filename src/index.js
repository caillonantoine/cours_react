import React from "react";
import ReactDOM from "react-dom";
import UseEffectExample from "./components/UseEffectExample";
import UseStateExample from "./components/UseStateExample";

ReactDOM.render(
  <div>
    <h2>useState example</h2>
    <UseStateExample />
    <hr></hr>
    <h2>useEffect example</h2>
    <UseEffectExample />
    <hr></hr>
  </div>,
  document.getElementById("root")
);
