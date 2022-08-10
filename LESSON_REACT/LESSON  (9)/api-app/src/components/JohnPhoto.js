import JohnPicture from "../image/Ellipse 1.svg";
import "./JohnPhoto.css";

const JohnPhoto = () => {
  return (
    <div className="position-relative">
      <img src={JohnPicture} alt="Photo" />
      <div className="circle"></div>
    </div>
  );
};

export default JohnPhoto;
