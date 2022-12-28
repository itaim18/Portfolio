import React, { useState } from "react";
import desktop from "../../../assets/sportodo/sportodo-comp.jpeg";
import tablet from "../../../assets/sportodo/sportodo-tablet.jpeg";
import mobile from "../../../assets/sportodo/sportodo-mobile.jpeg";
import styles from "./ResponsiveImages.module.css";
const ResponsiveImages = () => {
  const images = ["tablet", "desktop", "mobile"];
  const [img, setImg] = useState(1);
  const moveForward = () => {
    if (img < 2) {
      setImg(img + 1);
    }
  };
  const moveBack = () => {
    if (img > 0) {
      setImg(img - 1);
    }
  };
  return (
    <div className={styles.images}>
      <h1
        style={{
          opacity: `${img === 0 ? 0.2 : 1}`,
          cursor: `${img === 0 ? "default" : "pointer"}`,
        }}
        onClick={moveBack}
        className={styles.back}
      >
        {"<"}
      </h1>

      {images[img] === "desktop" ? (
        <>
          <div className={styles.computerBottom} />
          <div className={styles.computer} />
          <img src={desktop} alt="sportodo" className={styles.desktop} />
        </>
      ) : null}

      {images[img] === "tablet" ? (
        <>
          <img src={tablet} alt="sportodo" className={styles.tablet} />
          <div className={styles.tabletSide}>
            <div className={styles.tabletBtn}></div>
          </div>
        </>
      ) : null}
      {images[img] === "mobile" ? (
        <>
          <img src={mobile} alt="sportodo" className={styles.mobile} />{" "}
        </>
      ) : null}
      <h1
        style={{
          opacity: `${img === 2 ? 0.2 : 1}`,
          cursor: `${img === 2 ? "default" : "pointer"}`,
        }}
        onClick={moveForward}
        className={styles.fore}
      >
        {">"}
      </h1>
    </div>
  );
};

export default ResponsiveImages;
