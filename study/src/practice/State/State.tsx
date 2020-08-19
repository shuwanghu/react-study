import React, { useState } from "react";
export default function REFTest() {
  const [count, setCount] = useState(0);
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
