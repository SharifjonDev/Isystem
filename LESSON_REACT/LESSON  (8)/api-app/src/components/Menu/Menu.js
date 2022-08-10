import React from "react";

const Menu = ({ meals }) => {
  console.log("Menu Component");

  return (
    <ul>
      {meals.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default React.memo(Menu);
