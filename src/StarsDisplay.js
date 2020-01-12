import React from "react";
import { utils } from "./utilis";

const StarsDisplay = props => (
  <React.Fragment>
    {utils.range(1, props.count).map(starId => (
      <div className="star" key={starId} />
    ))}
  </React.Fragment>
);

export default StarsDisplay;
