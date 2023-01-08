import React from "react";
import styles from "./Button.module.css";
import useSound from "use-sound";
import on from "../../../sounds/switch-on.mp3";
const Button = (props) => {
  const [play] = useSound(on);
  const { colorFront, colorEdge } = props;
  return (
    <button
      onMouseEnter={play}
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
