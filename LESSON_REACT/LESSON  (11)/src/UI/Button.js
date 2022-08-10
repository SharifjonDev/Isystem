import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.clickFunc}
      className={`${styles["new-btn"]} ${styles[props.class]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
