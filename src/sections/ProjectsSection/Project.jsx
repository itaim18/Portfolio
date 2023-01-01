import React from "react";
import ResponsiveImages from "../../components/UI/ResponsiveImages/ResponsiveImages";
import Button from "../../components/UI/Button/Button";
const Project = ({ title, deck, images, liveLink }) => {
  return (
    <article>
      <ResponsiveImages images={images} />
      <h1>{title}</h1>
      <p>{deck}</p>
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <a href={liveLink}>
          <Button>Live site</Button>
        </a>
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
  );
};

export default Project;
