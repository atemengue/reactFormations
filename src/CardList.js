import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.profiles.map((profile, index) => (
        <Card key={index} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
