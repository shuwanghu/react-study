import React from "react";
import "./App.css";

import StateTest from "./practice/State/State";

import ContextTest from "./practice/Context/Context";
import TestContext from "./testContext";

import EffectTest from "./practice/Effect/Effect";
import EffectRefTest from "./practice/Effect/Effect-Ref";
import EffectReducerTest from "./practice/Effect/Effect-Reducer";
import EffectCallbackTest from "./practice/Effect/Effect-Callback/Effect-Callback";

function App() {
  return (
    <div className="App">
      {/* <TestContext.Provider value="456">
        <ContextTest></ContextTest>
      </TestContext.Provider> */}

      <EffectCallbackTest></EffectCallbackTest>
    </div>
  );
}

export default App;
