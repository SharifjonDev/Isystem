import "./AboutJohn.css";
import Button from "../UI/Button";
import JohnPhoto from "./JohnPhoto";

const AboutJohnLife = {
  firtName: "Hi, I am John, Creative Technologist",
  declaration:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
};

const AboutJohn = () => {
  return (
    <div className="header-content">
      <div className="row">
        <div className="col-xl-6">
          <h1>{AboutJohnLife.firtName}</h1>
          <p>{AboutJohnLife.declaration}</p>
          <Button>Download Resume</Button>
        </div>
        <div className="col-xl-6">
          <JohnPhoto />
        </div>
      </div>
    </div>
  );
};

export default AboutJohn;
