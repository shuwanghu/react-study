import React from "react";
import "./App.css";

import StateTest from "./practice/State/State";

import ContextTest from "./practice/Context/Context";
import TestContext from "./testContext";

import EffectTest from "./practice/Effect/Effect";
import EffectRefTest from "./practice/Effect/Effect-Ref";
function App() {
  return (
    <div className="App">
      {/* <TestContext.Provider value="456">
        <ContextTest></ContextTest>
      </TestContext.Provider> */}

      <EffectTest></EffectTest>
    </div>
  );
}

export default App;
