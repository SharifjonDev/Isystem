import { convertPrice } from "../../helper/ConvertPrice";
import "./LaptopPrice.css";

const LaptopPrice = (props) => {
  const { price } = props;
  return <h4>{convertPrice(price)}</h4>;
};

export default LaptopPrice;
