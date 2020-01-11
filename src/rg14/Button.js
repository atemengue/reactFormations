import React from "react";

const ButtonComponent = props => {
  return <button onClick={props.onClickFunction}>{props.counter}</button>;
};

export default ButtonComponent;
