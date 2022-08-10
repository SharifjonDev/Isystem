import "./FutureWork.css";

const FutureWork = (props) => {
  const { works } = props;
  return (
    <div className="cards">
      <img src={works.img} alt="" />
      <div className="allText">
        <h2>{works.type}</h2>
        <div className="d-flex">
          <h4>{works.date}</h4>
          <h3>{works.job}</h3>
        </div>
        <p>{works.description}</p>
      </div>
    </div>
  );
};

export default FutureWork;
