import React from "react";

const Card = (props) => {
  const { item } = props;
  if (item.length > 0) {
    return item.map((data, index) => (
      <div key={index}>
        <img src={data.homeLogo} alt="" />
      </div>
    ));
  }
  return <div>salom</div>;
};

export default Card;
