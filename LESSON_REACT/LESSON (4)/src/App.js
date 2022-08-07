import React, { useState } from "react";
import LaptopForm from "./components/LaptopForm";
import AllLaptops from "./components/AllLaptops";
import Counter from "./components/Counter";
import Container from "./UI/Container";
import Button from "./UI/Button";
import ButtonStyledComp from "./UI/ButtonStyledComp";
import { SOLD } from "./constants/constants";

const initialLaptops = [
  {
    id: 1,
    brand: "MacBook Pro 14-inch",
    description: "Silver M1/512GB/2021",
    date: new Date("2022-01-18"),
    price: 25080000,
    status: "new",
  },
  {
    id: 2,
    brand: "MacBook Pro 16-inch",
    description: "Silver M1/1024GB/2021",
    date: new Date("2022-02-28"),
    price: 32080000,
    status: "sold",
  },
  {
    id: 3,
    brand: "MacBook Pro 14-inch",
    description: "Silver M1/1024GB/2021",
    date: new Date("2022-03-20"),
    price: 28080000,
    status: "new",
  },
];

function App() {
  const [laptops, setLaptops] = useState(initialLaptops);
  const [counterNumber, setCounterNumber] = useState(0);

  const addNewLaptop = (newLaptop) => {
    setLaptops((prevState) => {
      return [newLaptop, ...prevState];
    });
  };

  const sellLaptop = (id) => {
    const objIndex = laptops.findIndex((item) => item.id === id);

    laptops[objIndex].status = SOLD;

    setLaptops((prevState) => {
      return [...prevState];
    });
  };

  const increaseCounter = () => {
    setCounterNumber((prevState) => {
      return prevState + 1;
    });
  };

  const decreaseCounter = () => {
    if (counterNumber <= 0) return;

    setCounterNumber((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className="App">
      <Container>
        {/* <Button clickFunc={increaseCounter} class={"newBtnDanger"}>
          +
        </Button>
        <Counter>{counterNumber}</Counter>
        <Button clickFunc={decreaseCounter} class={"newBtnDanger"}>
          -
        </Button> */}
        {/* <ButtonStyledComp>Bu style-component btn </ButtonStyledComp> */}
        <LaptopForm addLaptopFunc={addNewLaptop} />
        <AllLaptops sellLaptopHandle={sellLaptop} laptops={laptops} />
      </Container>
    </div>
  );
}

export default App;
