import React from "react";
import EmptyData from "../UI/EmptyData";
import Laptop from "./Laptop";

const AllLaptops = (props) => {
  const { laptops, sellLaptopHandle } = props;

  if (laptops.length > 0) {
    return laptops.map((item, index) => (
      <Laptop sellLaptop={sellLaptopHandle} key={index} laptop={item} />
    ));
  }

  return <EmptyData />;
};

export default AllLaptops;
