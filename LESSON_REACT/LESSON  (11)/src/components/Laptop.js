import React, { useState, Fragment } from "react";
import "./Laptop.css";
import LaptopDate from "./LaptopDate";
import LaptopPrice from "./LaptopPrice";
import { NEW } from "../constants/constants";

const Laptop = (props) => {
  const { laptop, sellLaptop } = props;

  const isNew = laptop.status === NEW;

  const sellLaptopHandle = () => {
    sellLaptop(laptop.id);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="row">
          <div className="col">
            <h2>{laptop.brand}</h2>
            {/* <h2>{laptop.brand}</h2> */}
          </div>
          <div className="col">
            <h3>{laptop.description}</h3>
          </div>
          <div className="col">
            <LaptopDate date={laptop.date} />
          </div>
          <div className="col">
            <LaptopPrice price={laptop.price} />
          </div>
          <button
            disabled={!isNew}
            onClick={sellLaptopHandle}
            className={`btn ${isNew ? "btn-dark" : "sold-btn"}`}
          >
            {isNew ? "Sotish" : "Sotildi"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Laptop;
