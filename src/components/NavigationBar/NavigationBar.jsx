import { useState } from "react";
import styles from "./NavigationBar.module.css";
import { BsFillHouseFill } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { FaShapes } from "react-icons/fa";
import { AiFillPhone, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const NavigationBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleMenu = () => {
    setShowSubMenu((prevState) => !prevState);
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
        <a title="home" href="#news">
          <BsFillHouseFill />
        </a>
        <a title="projects" href="#contact">
          <IoIosApps />
        </a>
        <a title="skills" href="#about">
          <FaShapes />
        </a>
        <a title="contact">
          <AiFillPhone />
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
