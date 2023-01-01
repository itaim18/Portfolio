import React, { useState } from "react";
// import desktop from "../../../assets/sportodo/sportodo-desktop.jpeg";
// import tablet from "../../../assets/sportodo/sportodo-tablet.jpeg";
// import mobile from "../../../assets/sportodo/sportodo-mobile.jpeg";
import styles from "./ResponsiveImages.module.css";
const ResponsiveImages = ({ images }) => {
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

      {img === 1 ? (
        <>
          <div className={styles.computerBottom} />
          <div className={styles.computer} />
          <img src={images[img]} alt="desktop" className={styles.desktop} />
        </>
      ) : null}

      {img === 0 ? (
        <>
          <img src={images[img]} alt="tablet" className={styles.tablet} />
          <div className={styles.tabletSide}>
            <div className={styles.tabletBtn}></div>
          </div>
        </>
      ) : null}
      {img === 2 ? (
        <>
          <img src={images[img]} alt="mobile" className={styles.mobile} />{" "}
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
