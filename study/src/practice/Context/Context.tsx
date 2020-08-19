import React, { useContext } from "react";
import TestContext from "../../testContext";
export default function REFTest() {
  const context = useContext(TestContext);
  return <div>{context}</div>;
}
