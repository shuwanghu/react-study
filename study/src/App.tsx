import React from "react";
import "./App.css";

import StateTest from "./practice/State/State";

import ContextTest from "./practice/Context/Context";
import TestContext from "./testContext";

import EffectTest from "./practice/Effect/Effect";
import EffectRefTest from "./practice/Effect/Effect-Ref";
import EffectReducerTest from "./practice/Effect/Effect-Reducer";

function App() {
  return (
    <div className="App">
      {/* <TestContext.Provider value="456">
        <ContextTest></ContextTest>
      </TestContext.Provider> */}

      <EffectReducerTest></EffectReducerTest>
    </div>
  );
}

export default App;
