import React from "react";
import "./App.css";
import TodoWrapper from "./Components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <h2 style={{ color: "#9E4784" }}>To - Do Manager</h2>
      <TodoWrapper />
    </div>
  );
}

export default App;
