import React from "react";
import Empty from "../UI/Empty/Empty";
import Laptop from "../Laptop/Laptop";

const AllLaptops = (props) => {
  const { laptops, sellLaptopHandle } = props;
  if (laptops.length > 0) {
    return laptops.map((item, index) => (
      <Laptop sellLaptop={sellLaptopHandle} key={index} laptop={item} />
    ));
  }
  return (
    <React.Fragment>
      <Empty />
    </React.Fragment>
  );
};

export default AllLaptops;
