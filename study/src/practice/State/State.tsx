import { useSetState } from "ahooks";
import React from "react";
export default function StateTest() {
  const [stateObj, setCount] = useSetState({ count: 0, foo: 2 });
  return (
    <div>
      <button
        onClick={() => {
          setCount((stateObj) => ({
            count: stateObj.count + 1,
          }));
          setCount((stateObj) => ({
            count: stateObj.count + 1,
          }));
          setCount((stateObj) => ({
            count: stateObj.count + 1,
          }));
          // setCount({ count: stateObj.count + 1 });
          // setCount({ count: stateObj.count + 1 });
          // setCount({ count: stateObj.count + 1 });
        }}
      >
        add
      </button>
      <p>{stateObj.count}</p>
      <p>{stateObj.foo}</p>
    </div>
  );
}
