import "./Container.css";
const Container = (props) => {
  return <div className="container">{props.children}</div>;
};
//Children vazifa qanaqangi content bo'lsa hammasini yig'adi va kerakli joyga tashib beradi
export default Container;
