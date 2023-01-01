import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return <article className={styles.card}>{props.children}</article>;
};

export default Card;
