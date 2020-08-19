import React, { useState, useEffect, useRef } from "react";
export default function REFTest() {
  const [count, setCount] = useState(0);
  const refTest = useRef(0);
  useEffect(() => {
    refTest.current = count;
    if (!count) return;
    setTimeout(() => {
      alert(refTest.current);
    }, 1000);
  }, [count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      {count}
    </div>
  );
}
