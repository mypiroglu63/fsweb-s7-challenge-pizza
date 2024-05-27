import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const azalt = () => {
    setCount(count - 1);
  };

  const arttır = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <button onClick={azalt}>-</button>
      <span>{count}</span>
      <button onClick={arttır}>+</button>
    </div>
  );
}
