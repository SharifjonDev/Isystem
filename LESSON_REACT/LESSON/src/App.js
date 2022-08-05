import React, { useState } from "react";
import Container from "./components/UI/Container/Container";
import LaptopForm from "./components/LaptopForm/LaptopForm";
import AllLaptops from "./components/AllLaptops/AllLaptops";
import { NEW, SOLD } from "./constans/constans";

const initialLaptops = [
  {
    id: 1,
    brand: "MackBook Prop 14-inch",
    description: "Silver M1/512Gb/2021",
    date: new Date("2022-01-20"),
    price: "25000000",
    status: NEW,
  },
  {
    id: 2,
    brand: "MackBook Prop 16-inch",
    description: "Silver M1/512Gb/2021",
    date: new Date("2022-03-10"),
    price: "32000000",
    status: SOLD,
  },
  {
    id: 3,
    brand: "MackBook Prop 14-inch",
    description: "Silver M1/1024Gb/2021",
    date: new Date("2021-12-30"),
    price: "27000000",
    status: NEW,
  },
];

function App() {
  const [laptops, setLaptops] = useState(initialLaptops);

  const addNewLaptop = (newLaptop) => {
    setLaptops((prevState) => {
      return [newLaptop, ...prevState];
    });
  };

  const sellLaptop = (id) => {
    const objIndex = laptops.findIndex((item) => item.id === id);
    laptops[objIndex].status = "sold";

    setLaptops((prevState) => {
      return [...prevState];
    });
  };
  return (
    <React.Fragment>
      <Container>
        <LaptopForm addLaptop={addNewLaptop} />
        <AllLaptops laptops={laptops} sellLaptopHandle={sellLaptop} />
      </Container>
    </React.Fragment>
  );
}

export default App;
