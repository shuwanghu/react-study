import React from "react";
import "./App.css";

import StateTest from "./practice/State/State";

import ContextTest from "./practice/Context/Context";
import TestContext from "./testContext";

import EffectTest from "./practice/Effect/Effect";
import EffectRefTest from "./practice/Effect/Effect-Ref";
import EffectReducerTest from "./practice/Effect/Effect-Reducer";
import EffectCallbackTest from "./practice/Effect/Effect-Callback/Effect-Callback";
import MobxComponent from "./practice/mobx/MobxComponent";
import appState from "./practice/mobx/mobx";
import REFTest from "./practice/Context/Context";
import MobxObserver from "./practice/mobx/MobxObserver";

function App() {
  return (
    <div className="App">
      {/* <TestContext.Provider value="456">
        <ContextTest></ContextTest>
      </TestContext.Provider> */}

      {/* <EffectCallbackTest></EffectCallbackTest> */}

      {/* <MobxComponent appState={appState}></MobxComponent> */}
      {/* <StateTest></StateTest> */}
      <MobxComponent appState={appState}></MobxComponent>
    </div>
  );
}

export default App;
