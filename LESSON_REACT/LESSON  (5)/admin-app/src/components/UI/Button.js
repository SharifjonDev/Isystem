import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button onClick={props.clickFunc} className={classes.newBtn}>
      {props.children}
    </button>
  );
};

export default Button;
