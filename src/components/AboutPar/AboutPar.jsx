import { useEffect } from "react";
import styles from "./AboutPar.module.css";
import Button from "../UI/Button/Button";
import typer from "typer-js";
const AboutPar = () => {
  useEffect(() => {
    typer("#some-id")
      .cursor({ block: true, blink: "hard", color: "red" })
      .line("UI/UX Architect")
      .pause(300)
      .back("all")
      .continue("Whovian")
      .pause(300)
      .back("all")
      .continue("FrontEnd Developer", {
        military: { speed: 20, chars: 2 },
      });
  }, []);

  return (
    <>
      <div id="about" className={styles.about}>
        <h1>
          I'm Itai. 👨‍💻
          <br />
          <span
            // class="typer"
            id="some-id"
            data-cursordisplay="_"
            // data-words="poised,punctual,matchmaker.com"
            // data-colors="#ed426d,#6d67c6,#b74033"
            // data-delay="50"
            // data-loop="1"
          ></span>
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
