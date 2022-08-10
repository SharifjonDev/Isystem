import "./Posts.css";

const Posts = (props) => {
  const { typeOfWork } = props;

  return (
    <div className="card">
      <h2>{typeOfWork.type}</h2>
      <div className="d-flex">
        <h4>{typeOfWork.date}</h4>
        <h4>{typeOfWork.typeProject}</h4>
      </div>
      <p>{typeOfWork.desciription}</p>
    </div>
  );
};

export default Posts;
