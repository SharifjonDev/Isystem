import React from "react";
import Main from "../Main/Main";
import Row from "../UI/Row/Row";
import Col from "../UI/Col/Col";
import Card from "../Card/Card";
import Button from "../Button/Button";
import LaptopDate from "../LaptopDate/LaptopDate";
import LaptopPrice from "../LaptopPrice/LaptopPrice";
import { NEW } from "../../constans/constans";
import "./Laptop.css";

const Laptop = (props) => {
  const { laptop, sellLaptop } = props;

  const isNew = laptop.status === NEW;

  const sellLaptopHandle = () => {
    sellLaptop(laptop.id);
  };

  return (
    <React.Fragment>
      <Main>
        <Row>
          <Col>
            <Card>
              <h2>{laptop.brand}</h2>
            </Card>
          </Col>
          <Col>
            <Card>
              <h3>{laptop.description}</h3>
            </Card>
          </Col>
          <Col>
            <Card>
              <LaptopDate date={laptop.date} />
            </Card>
          </Col>
          <Col>
            <Card>
              <LaptopPrice price={laptop.price} />
            </Card>
          </Col>
          <Button
            disabled={!isNew}
            onClick={sellLaptopHandle}
            className={isNew ? "btn-new" : "btn-sold"}
          >
            {isNew ? "Sotish" : "Sotildi"}
          </Button>
        </Row>
      </Main>
    </React.Fragment>
  );
};

export default Laptop;
