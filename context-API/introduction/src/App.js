import React, { useState, createContext, useContext } from "react";
import "./App.css";

// Create an instance of the context to hold the state of the count function
const CountContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, increment, decrement } = useContext(CountContext);

  return (
    <div className="count-countainer">
      <h1>Counter: {count}</h1>
      <button className="button" onClick={increment}>
        +
      </button>
      <button className="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>
      <p className="sub-description">A simple counter application by Prince</p>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
