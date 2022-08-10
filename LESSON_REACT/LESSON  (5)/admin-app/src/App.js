import { Fragment, useState } from "react";
import Counter from "./components/Counter/Counter";
import Button from "./components/UI/Button";
function App() {
  const [counterNumber, setCounterNumber] = useState(0);

  const increaseCounter = () => {
    setCounterNumber((prevState) => {
      return prevState + 1;
    });
  };

  const decreaseCounter = () => {
    if (counterNumber <= 0) return;
    setCounterNumber((prevState) => {
      return prevState - +1;
    });
  };

  return (
    <>
      <Button clickFunc={decreaseCounter}>-</Button>
      <Counter>{counterNumber} </Counter>
      <Button clickFunc={increaseCounter}>+</Button>
    </>
  );
}

export default App;
