import { useState } from "react";
import styles from "./NavigationBar.module.css";
import { BsFillHouseFill, BsPersonLinesFill } from "react-icons/bs";
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
        <a title="Resume" href="#contact">
          <BsPersonLinesFill className={styles.Resume} />
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
