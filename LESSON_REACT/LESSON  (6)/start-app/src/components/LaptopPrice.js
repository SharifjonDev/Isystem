import { convertPrice } from "../helper/convertPrice";

const LaptopPrice = (props) => {
  return <h3>{convertPrice(props.price)}</h3>;
};
export default LaptopPrice;
