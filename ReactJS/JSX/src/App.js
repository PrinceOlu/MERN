import "./App.css";

function App() {
  // basic jsx syntax
  const element = <h2>An example of jsx</h2>;
  // Embedding expressions
  const name = "Prince";
  const element2 = (
    <h2>
      my name is {name} {2 * 3}
    </h2>
  );
  // jsx as an expression
  const elemrnt3 = (
    <div>
      <h2> I am embeded</h2>
      <p>today's date is {new Date().toLocaleTimeString()}</p>
    </div>
  );
  return elemrnt3;
}

export default App;
