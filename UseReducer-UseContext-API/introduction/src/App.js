import React, { useReducer, createContext, useContext } from "react";
import "./App.css";

const initialState = {
  count: 0,
};

// Define the reducer function using if conditions
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

// Create context instance
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="count-container">
      <h1>{state.count}</h1>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>
      <p className="sub-description">
        A simple counter using useReducer and Context-API application by Prince
      </p>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
