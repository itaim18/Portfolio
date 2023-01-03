import React from "react";
import ResponsiveImages from "../../components/UI/ResponsiveImages/ResponsiveImages";
import Button from "../../components/UI/Button/Button";
import styles from "./Project.module.css";
const Project = ({ title, deck, images, liveLink, codeLink }) => {
  return (
    <article className={styles.project}>
      <ResponsiveImages images={images} />
      <h1>{title}</h1>
      <p>{deck}</p>
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
