import React, { useState } from "react";
import {} from "module";
import ButtonComponent from "./rg14/Button";

function App() {
  const [counter, setCounter] = useState(5);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      <ButtonComponent counter={counter} onClickFunction={incrementCounter} />
    </div>
  );
}

export default App;
