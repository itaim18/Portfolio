import React from "react";
import styles from "./AboutPar.module.css";
import Button from "../UI/Button/Button";
const AboutPar = () => {
  return (
    <>
      <div id="about" className={styles.about}>
        <h1>
          Hi, I'm Itai.
          <br /> <span>Front-End Developer</span>.
        </h1>
        <p>
          I am a <span> UI/UX designer</span>, a <span> react developer</span>{" "}
          and a quiche lover. College graduate at the age of 19 with a{" "}
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
