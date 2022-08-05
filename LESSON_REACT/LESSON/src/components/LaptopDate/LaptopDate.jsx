import { convertDate } from "../../helper/ConvertDate";
import "./LaptopDate.css";
const LaptopDate = (props) => {
  const { date } = props;
  return <h4>{convertDate(date)}</h4>;
};

export default LaptopDate;
