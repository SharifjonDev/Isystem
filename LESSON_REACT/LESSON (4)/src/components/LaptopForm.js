import React, { useState, useRef } from "react";
import "./LaptopForm.css";
import { NEW } from "../constants/constants";

const LaptopForm = (props) => {
  // const [newLaptop, setNewLaptop] = useState({
  //   laptopName: "",
  //   laptopModel: "",
  //   laptopDate: "",
  //   laptopPrice: "",
  // });

  const { addLaptopFunc } = props;
  //const inputLaptopName = useRef();

  const [laptopName, setLaptopName] = useState("");
  const [laptopModel, setLaptopModel] = useState("");
  const [laptopDate, setLaptopDate] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");

  const laptopNameHandler = (event) => {
    setLaptopName(event.target.value);

    // setNewLaptop({
    //   ...newLaptop,
    //   laptopName: event.target.value,
    // });

    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopName: event.target.value,
    //   };
    // });
  };

  const laptopModelHandler = (event) => {
    setLaptopModel(event.target.value);
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopModel: event.target.value,
    //   };
    // });
  };

  const laptopDateHandler = (event) => {
    setLaptopDate(event.target.value);
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopDate: event.target.value,
    //   };
    // });
  };

  const laptopPriceHandler = (event) => {
    setLaptopPrice(event.target.value);
    // setNewLaptop((prevState) => {
    //   return {
    //     ...prevState,
    //     laptopPrice: event.target.value,
    //   };
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //console.log(inputLaptopName.current.value);
    const newLaptop = {
      id: Math.random(),
      brand: laptopName,
      description: laptopModel,
      date: new Date(laptopDate),
      price: laptopPrice,
      status: NEW,
    };

    addLaptopFunc(newLaptop);

    setLaptopName("");
    setLaptopModel("");
    setLaptopDate("");
    setLaptopPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="laptop-form">
      <div className="form-control">
        <label htmlFor="laptopName">Laptop name</label>
        <br />
        <input
          id="laptopName"
          required
          //ref={inputLaptopName}
          value={laptopName}
          onChange={laptopNameHandler}
          type="text"
        />
      </div>
      <div className="form-control">
        <label htmlFor="model">Model</label>
        <br />
        <input
          id="model"
          required
          value={laptopModel}
          onChange={laptopModelHandler}
          type="text"
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <br />
        <input
          id="date"
          required
          value={laptopDate}
          onChange={laptopDateHandler}
          type="date"
        />
      </div>
      <div className="form-control">
        <label htmlFor="price">Price</label>
        <br />
        <input
          id="price"
          required
          value={laptopPrice}
          onChange={laptopPriceHandler}
          type="number"
        />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default LaptopForm;
