import React from "react";
import "./App.css";
import CardList from "./CardList";
import data from "./data";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1 className="header">The Github Card</h1>
      <div className="container">
        <Form />
        <CardList profiles={data} />
      </div>
    </div>
  );
}

export default App;
