import { useState, useEffect, useContext } from "react";
import styles from "./NavigationBar.module.css";
import { BsFillHouseFill, BsPersonLinesFill } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { FaShapes } from "react-icons/fa";
import { AiFillPhone, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import useSound from "use-sound";
import popSfx from "../../sounds/pop.mp3";
import soundContext from "../../context/soundContext";
const NavigationBar = () => {
  const [play] = useSound(popSfx, { playbackRate: 0.5 });
  const soundOn = useContext(soundContext);
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
        <a
          title="Home"
          href="#"
          onMouseEnter={() => {
            `${soundOn.soundOn ? play() : null}`;
          }}
        >
          <BsFillHouseFill />
        </a>
        <a
          title="Projects"
          href="#projects"
          onMouseEnter={() => {
            `${soundOn.soundOn ? play() : null}`;
          }}
        >
          <IoIosApps />
        </a>
        <a
          title="Skills"
          href="#skills"
          onMouseEnter={() => {
            `${soundOn.soundOn ? play() : null}`;
          }}
        >
          <FaShapes />
        </a>
        <a
          title="Contact"
          href="#contact"
          onMouseEnter={() => {
            `${soundOn.soundOn ? play() : null}`;
          }}
        >
          <AiFillPhone />
        </a>
        <a
          id="resume"
          title="Resume"
          target="_blank"
          onMouseEnter={() => {
            `${soundOn.soundOn ? play() : null}`;
          }}
          onClick={downloadFile}
        >
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
