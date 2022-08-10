import React, { useState } from "react";
import { NEW } from "../constants/constants";
import AllLaptops from "./AllLaptops";
import "./LaptopForm.css";
const LaptopForm = (props) => {
  //   const [newLaptop, setNewLaptop] = useState({
  //     laptopName: "",
  //     laptopModel: "",
  //     laptopDate: "",
  //     laptopPrice: "",
  //   });

  const { addLaptopFunc } = props;
  const [laptopName, setLaptopName] = useState("");
  const [laptopModel, setLaptopModel] = useState("");
  const [laptopDate, setLaptopDate] = useState("");
  const [laptopPrice, setLaptopPrice] = useState("");

  const laptopNameHandler = (event) => {
    setLaptopName(event.target.value);

    /*setNewLaptop((prevState) => {
      return {
        ...prevState,
        laptopName: event.target.value,
      };
    });*/

    /* setNewLaptop({
      ...newLaptop,
      laptopName: event.target.value,
    });*/
  };
  const laptopModelHandler = (event) => {
    setLaptopModel(event.target.value);

    /*setNewLaptop((prevState) => {
      return {
        ...prevState,
        laptopModel: event.target.value,
      };
    });*/

    /*setNewLaptop({
       ...newLaptop,
       laptopModel: event.target.value,
    });*/
  };
  const laptopDateHandler = (event) => {
    setLaptopDate(event.target.value);

    /*setNewLaptop((prevState) => {
      return {
        ...prevState,
        laptopDate: event.target.value,
      };
    });*/

    /* setNewLaptop({
      ...newLaptop,
      laptopDate: event.target.value,
    });*/
  };
  const laptopPriceHandler = (event) => {
    setLaptopPrice(event.target.value);

    /*setNewLaptop((prevState) => {
      return {
        ...prevState,
        laptopPrice: event.target.value,
      };
    });*/

    /*setNewLaptop({
      ...newLaptop,
      laptopPrice: event.target.value,
    });*/
  };
  //   const newLptopHandler = (event, type) => {
  //     console.log(event.target.value);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <form className="laptop-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="laptopName">Laptop name</label>
        <br />
        <input
          type="text"
          id="laptopName"
          value={laptopName}
          required
          onChange={laptopNameHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="laptopModel">Model</label>
        <br />

        <input
          type="text"
          id="model"
          value={laptopModel}
          required
          onChange={laptopModelHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="laptopDate">Date</label>
        <br />
        <input
          type="date"
          id="date"
          value={laptopDate}
          required
          onChange={laptopDateHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="laptopPrice">Price</label>
        <br />
        <input
          type="number"
          id="price"
          value={laptopPrice}
          required
          onChange={laptopPriceHandler}
        />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default LaptopForm;
