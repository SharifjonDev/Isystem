import Col from "../../layout/Col/Col";
import Card from "../../components/Card/Card";

const Allcountries = props => {
  const { countriesData } = props;

  if (countriesData.errorMessage === "") {
    return countriesData.countries.map((item, index) => (
      <Col key={index}>
        <Card country={item} />
      </Col>
    ));
  }
  return <div>NO DATA</div>;
};

export default Allcountries;
