import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const { colorFront, colorEdge } = props;
  return (
    <button
      style={{ color: "white", margin: "20px 5px" }}
      className={styles.buttonPushable}
    >
      <span className={styles.buttonShadow}></span>
      <span style={colorEdge} className={styles.buttonEdge}></span>
      <span
        style={colorFront}
        className={`${styles.buttonFront} ${styles.text}`}
      >
        {props.children}
      </span>
    </button>
  );
};

export default Button;
