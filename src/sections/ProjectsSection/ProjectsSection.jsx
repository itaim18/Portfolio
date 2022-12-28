import React from "react";
import styles from "./ProjectsSection.module.css";
import ResponsiveImages from "../../components/UI/ResponsiveImages/ResponsiveImages";
import Button from "../../components/UI/Button/Button";

const ProjectsSection = () => {
  return (
    <div className={styles.projects}>
      <h1 style={{ marginTop: "15px" }}>Projects</h1>
      <article>
        {" "}
        <ResponsiveImages />
        <h1>Sportodo</h1>
        <p>
          Hey, take a look at the earthlings. Goodbye! My dad once told me,
          laugh and the world laughs with you, Cry, and I'll give you something
          to cry about you little bastard! God creates dinosaurs. Do you have
          any idea how long it takes those cups to decompose. You're a very
          talented young man, with your own clever thoughts and ideas.
        </p>
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <Button>Live site</Button>
          <Button
            colorEdge={{
              background:
                "linear-gradient(to left,rgb(40,212,40) 0%,rgb(40,192,57) 8%,rgb(20,100,40) 92%,rgb(15,120,30) 100%)",
            }}
            colorFront={{ background: "green", color: "white" }}
          >
            code
            {/* <img style={{ height: "32px" }} src="GHL8.png" alt="github" /> */}
          </Button>
        </div>
      </article>
      <article>
        {" "}
        <img src="https://picsum.photos/200/300?grayscale" alt="app" />
        <h1>ProjectsSection</h1>
        <p>
          Hey, take a look at the earthlings. Goodbye! My dad once told me,
          laugh and the world laughs with you, Cry, and I'll give you something
          to cry about you little bastard! God creates dinosaurs. Do you have
          any idea how long it takes those cups to decompose. You're a very
          talented young man, with your own clever thoughts and ideas.
        </p>
      </article>{" "}
      <article>
        {" "}
        <img src="https://picsum.photos/200/300?grayscale" alt="app" />
        <h1>ProjectsSection</h1>
        <p>
          Hey, take a look at the earthlings. Goodbye! My dad once told me,
          laugh and the world laughs with you, Cry, and I'll give you something
          to cry about you little bastard! God creates dinosaurs. Do you have
          any idea how long it takes those cups to decompose. You're a very
          talented young man, with your own clever thoughts and ideas.
        </p>
      </article>{" "}
      <article>
        {" "}
        <img src="https://picsum.photos/200/300?grayscale" alt="app" />
        <h1>ProjectsSection</h1>
        <p>
          Hey, take a look at the earthlings. Goodbye! My dad once told me,
          laugh and the world laughs with you, Cry, and I'll give you something
          to cry about you little bastard! God creates dinosaurs. Do you have
          any idea how long it takes those cups to decompose. You're a very
          talented young man, with your own clever thoughts and ideas.
        </p>
      </article>
    </div>
  );
};

export default ProjectsSection;
