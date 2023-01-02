import React from "react";
import styles from "./AboutPar.module.css";
import Button from "../UI/Button/Button";
const AboutPar = () => {
  return (
    <>
      <div id="about" className={styles.about}>
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
        <a
          title="Resume"
          href="assets/files/Resume.pdf"
          download="Itai Mizlish - Resume"
        >
          <Button colorFront={{ color: "white" }}>
            <img
              src="assets/images/downloading.png"
              alt="download"
              style={{ width: "28px", filter: "grayscale(1) invert(1)" }}
            />{" "}
            Resume
          </Button>
        </a>
      </div>
    </>
  );
};

export default AboutPar;
