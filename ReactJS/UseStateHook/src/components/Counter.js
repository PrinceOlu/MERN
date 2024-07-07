import React, { useState } from "react";

function Counter() {
  // initialse the counter
  const [counter, setCounter] = useState(0);
  //  Event for Increament counter
  const IncreamentCounter = () => {
    setCounter(counter + 1);
  };
  //  Event for decreament counter
  const decreamentCounter = () => {
    setCounter(counter - 1);
  };
  //  Event for reset
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter App</h1>
      <p>Counter : {counter}</p>
      <button
        onClick={IncreamentCounter}
        style={{
          margin: "0 5px",
          padding: "5px",
          color: "white",
          backgroundColor: "green",
        }}
      >
        Increament++
      </button>
      <button
        onClick={decreamentCounter}
        style={{
          margin: "0 5px",
          padding: "5px",
          color: "white",
          backgroundColor: "red",
        }}
      >
        Decreament
      </button>
      <button
        onClick={resetCounter}
        style={{
          margin: "0 5px",
          padding: "5px",
          color: "white",
          backgroundColor: "black",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
