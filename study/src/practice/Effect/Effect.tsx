import React, { useState, useEffect } from "react";
export default function REFTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!count) return;
    setTimeout(() => {
      alert(count);
    }, 1000);
  }, [count]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   const key = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(key);
  // }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          setTimeout(() => {
            alert(count);
          }, 1000);
        }}
      >
        add
      </button>
      {count}
    </div>
  );
}
