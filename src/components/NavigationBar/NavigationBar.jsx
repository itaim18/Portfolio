import { useState, useEffect } from "react";
import styles from "./NavigationBar.module.css";
import { BsFillHouseFill, BsPersonLinesFill } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { FaShapes } from "react-icons/fa";
import { AiFillPhone, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  useEffect(() => {
    const checkD = localStorage.getItem("isDownloaded");
    if (checkD === "true") {
      setIsDownloaded(true);
    }
  }, []);

  const [showSubMenu, setShowSubMenu] = useState(false);
  var pauseAnimation = { animation: "none" };
  const toggleMenu = () => {
    setShowSubMenu((prevState) => !prevState);
  };
  const downloadFile = () => {
    setIsDownloaded(true);
    localStorage.setItem("isDownloaded", "true");
    window.open("/assets/files/Resume.pdf", "_blank");
  };
  return (
    <div
      className={`${styles.topnav} ${showSubMenu ? styles.responsive : null} `}
      id="myTopnav"
    >
      <a className={styles.icon} onClick={toggleMenu}>
        {showSubMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </a>
      <div className={styles.links}>
        <a title="Home" href="#">
          <BsFillHouseFill />
        </a>
        <a title="Projects" href="#projects">
          <IoIosApps />
        </a>
        <a title="Skills" href="#skills">
          <FaShapes />
        </a>
        <a title="Contact" href="#contact">
          <AiFillPhone />
        </a>
        <a id="resume" title="Resume" target="_blank" onClick={downloadFile}>
          <BsPersonLinesFill
            className={styles.Resume}
            style={isDownloaded ? pauseAnimation : null}
          />
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
