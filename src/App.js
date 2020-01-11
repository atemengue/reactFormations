import React, { useState } from "react";
import {} from "module";
import ButtonComponent from "./rg14/Button";

function App() {
  const [counter, setCounter] = useState(5);

  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);

  return (
    <div className="App">
      <ButtonComponent increment={1} onClickFunction={incrementCounter} />
      <ButtonComponent increment={5} onClickFunction={incrementCounter} />
      <ButtonComponent increment={10} onClickFunction={incrementCounter} />
      <ButtonComponent increment={50} onClickFunction={incrementCounter} />
      <ButtonComponent increment={100} onClickFunction={incrementCounter} />

      <div className="message">{counter}</div>
    </div>
  );
}

export default App;
