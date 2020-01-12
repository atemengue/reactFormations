import React from "react";
import { colors } from "./utilis";

const PlayNumber = props => (
  <button
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
    className="number"
  >
    {props.number}
  </button>
);

export default PlayNumber;
