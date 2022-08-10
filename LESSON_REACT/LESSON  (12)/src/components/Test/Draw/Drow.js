import React from "react";
import Card from "../Card/Card";

const Drow = ({ data }) => {
  const newData = data[0];

  if (newData) {
    for (const item in newData) {
      return <Card item={newData[item]} />;
    }
  }
  return <div>Empty data</div>;
};

export default Drow;
