import React, { useEffect } from "react";
import ResponsiveImages from "../../components/UI/ResponsiveImages/ResponsiveImages";
// import Button from "../../components/UI/Button/Button";
import styles from "./Project.module.css";
import ScrollReveal from "scrollreveal";
const Button = React.lazy(() => import("../../components/UI/Button/Button"));
const Project = ({ title, deck, images, liveLink, codeLink }) => {
  useEffect(() => {
    ScrollReveal({ reset: true, duration: 500 }).reveal("#project", {
      delay: "300",
      distance: "10%",
      duration: "700",
      opacity: 0,
      scale: 0.25,
    });

    ScrollReveal({ reset: true }).reveal("#title", {
      delay: "300",
      origin: "left",
      duration: "700",
      distance: "100%",
      opacity: 0,
    });
    ScrollReveal({ reset: true }).reveal("#deck", {
      delay: "300",
      origin: "right",
      duration: "700",
      distance: "75%",
      opacity: 0,
    });
  }, []);

  return (
    <article id="project" className={styles.project}>
      <ResponsiveImages images={images} />
      <h1 id="title">{title}</h1>
      <p id="deck">{deck}</p>
      <div
        style={{
          margin: "0 auto",
          width: "fit-content",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <a href={liveLink}>
          <Button>Live site</Button>
        </a>
        <a href={codeLink}>
          <Button
            colorEdge={{
              background:
                "linear-gradient(to left,rgb(40,212,40) 0%,rgb(40,192,57) 8%,rgb(20,100,40) 92%,rgb(15,120,30) 100%)",
            }}
            colorFront={{ background: "green", color: "white" }}
          >
            code
          </Button>
        </a>
      </div>
    </article>
  );
};

export default Project;
