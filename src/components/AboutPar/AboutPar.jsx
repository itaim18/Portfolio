import React from "react";
import styles from "./AboutPar.module.css";
import Links from "../Links/Links";
const AboutPar = () => {
  return (
    <>
      <div className={styles.about}>
        <h1>
          Hi! I am a <span>Front-End Developer</span> and a React developer.
        </h1>
        <p>
          i am a <span> UI/UX designer</span>, a <span> react developer</span>{" "}
          and a quiche lover. knowledgeable in{" "}
          <span style={{ color: "#efd81d" }}>Js</span>,{" "}
          <span style={{ color: "#68a063" }}> node.js</span>,
          <span style={{ color: "#4faa41" }}>mongoDB</span> and{" "}
          <span style={{ color: "#3b4854" }}> express</span> , graduated college
          at the age of 19 with a{" "}
          <span>bachelor degree in computer science</span>.
        </p>
        <Links />
      </div>
    </>
  );
};

export default AboutPar;
