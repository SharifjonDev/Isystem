import React from "react";
import Button from "../Button/Button";
import Number from "./Number/Number";

const Counter = () => {
  const [number, setNumber] = React.useState(0);

  const dicreaseHandler = () => {
    if (number > 0) {
      setNumber((prevState) => {
        return prevState - 1;
      });
    }
    return number;
  };

  const increaseHandler = (number) => {
    setNumber((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <React.Fragment>
      <Button onClick={dicreaseHandler} className="btn-delete">
        -
      </Button>
      <Number>{number}</Number>
      <Button onClick={increaseHandler} className="btn-edit">
        +
      </Button>
    </React.Fragment>
  );
};

export default Counter;
