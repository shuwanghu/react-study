import React, { useEffect, useReducer } from "react";
const initialState = { count: 0 };

function reducer(state: { count: number }, action: "increment" | "decrement") {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export default function REFTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setInterval(() => dispatch("increment"), 1000);
  }, []);

  return <div>{state.count}</div>;
}
