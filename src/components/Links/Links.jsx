import React from "react";
// import styles from "./Links.module.css";
import Button from "../UI/Button/Button";
const Links = () => {
  return (
    <ul style={{ listStyle: "none" }}>
      <Button colorFront={{ color: "white" }}>
        <img
          src="assets/images/downloading.png"
          alt="download"
          style={{ width: "28px", filter: "grayscale(1) invert(1)" }}
        />{" "}
        Resume
      </Button>
      {/* <Button
        colorEdge={{
          background:
            "linear-gradient(to left,hsl(218,13%,12%) 0%,hsl(218, 18%, 25%) 8%,hsl(218, 8%, 5%) 92%,hsl(218, 28%, 35%) 100%)",
        }}
        colorFront={{ background: "#1b1e23", color: "white" }}
      >
        github
      </Button>
      <Button
        colorEdge={{
          background:
            "linear-gradient(to left,hsl(4,87%,58%) 0%,hsl(4,97%,68%) 8%,hsl(4,77%,38%) 92%,hsl(4,92%,61%) 100%)",
        }}
        colorFront={{ background: "#f14336", color: "white" }}
      >
        Gmail
      </Button> */}
    </ul>
  );
};

export default Links;
