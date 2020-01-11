import React from "react";

const ButtonComponent = props => {
  const handlerClick = () => props.onClickFunction(props.increment);

  return <button onClick={handlerClick}>{props.increment}</button>;
};

export default ButtonComponent;
