import React, { useState } from "react";
import Button from "../Button/Button";
import "./LaptopForm.css";

const LaptopForm = (props) => {
  const { addLaptop } = props;

  const [laptopName, setLaptopName] = useState("");
  const [laptopModel, setLaptopModel] = useState("");
  const [laptopDate, setLaptopDate] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");

  const laptopNameHandler = (event) => {
    setLaptopName(event.target.value);
  };

  const laptopModelHandler = (event) => {
    setLaptopModel(event.target.value);
  };

  const laptopDateHandler = (event) => {
    setLaptopDate(event.target.value);
  };

  const laptopPriceHandler = (event) => {
    setLaptopPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLaptop = {
      id: Math.random(),
      brand: laptopName,
      description: laptopModel,
      date: new Date(laptopDate),
      price: laptopPrice,
      status: "new",
    };

    addLaptop(newLaptop);

    setLaptopName("");
    setLaptopModel("");
    setLaptopDate("");
    setLaptopPrice("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          required
          value={laptopName}
          onChange={laptopNameHandler}
          type="text"
          placeholder="Laptop's Name"
          id="name"
        />
        <label htmlFor="model"></label>
        <input
          required
          value={laptopModel}
          onChange={laptopModelHandler}
          type="text"
          placeholder="Laptop's model"
          id="model"
        />
        <label htmlFor="date"></label>
        <input
          value={laptopDate}
          required
          onChange={laptopDateHandler}
          type="date"
          id="date"
        />
        <label htmlFor="price"></label>
        <input
          required
          value={laptopPrice}
          onChange={laptopPriceHandler}
          type="number"
          placeholder="Laptop's Price"
        />
        <Button className="btn-add">Submit</Button>
      </form>
    </React.Fragment>
  );
};

export default LaptopForm;
