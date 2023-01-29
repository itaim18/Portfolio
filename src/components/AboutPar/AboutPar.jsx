import { useEffect } from "react";
import styles from "./AboutPar.module.css";
import Button from "../UI/Button/Button";
import typer from "typer-js";
const AboutPar = () => {
  useEffect(() => {
    typer("#some-id")
      .cursor({ block: true, blink: "hard", color: "red" })
      .line("Fullstack Architect,")
      .pause(300)
      .back("all")
      .continue("Whovian,")
      .pause(300)
      .back("all")
      .continue("FrontEnd Developer.", {
        military: { speed: 25, chars: 2 },
      });
  }, []);

  return (
    <>
      <div id="about" className={styles.about}>
        <h1>
          I'm Itai.
          <br />
          <span id="some-id"></span>
        </h1>
        <p>
          I am a <span> Fullstack Developer</span>, a <span> web developer</span>,
          programmer and an autodidact. Have a sense in solving problems and{" "}
          <span> graduated with a bachelor degree in computer science at the age of 19</span>.
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
