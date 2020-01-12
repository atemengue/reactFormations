import React from "react";
import "./App.css";
import CardList from "./CardList";

function App() {
  return (
    <div className="App">
      <h1 className="header">The Github Card</h1>
      <div className="container">
        <CardList />
      </div>
    </div>
  );
}

export default App;
