import React, { useEffect } from "react";
import styles from "./SkillsSection.module.css";
import { TbBrandFirebase } from "react-icons/tb";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiReactrouter,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import VanillaTilt from "vanilla-tilt";
const SkillsSection = () => {
  const skillIconStyle = {
    width: "100%",
    padding: "5px ",
  };
  useEffect(() => {
    const arr = Array.from(
      document.getElementById("tools").querySelectorAll("ul li")
    );
    if (window.innerWidth > 1200) {
      VanillaTilt.init(arr, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div style={{ margin: "auto auto 50px" }} id="skills">
      <h1 style={{ margin: "10px auto", width: "fit-content" }}>Skills</h1>

      <h1 style={{ margin: "2.5% 5%", width: "fit-content" }}>knowledge</h1>
      <ul className={styles.skillsList}>
        <li>
          <FaHtml5 size={75} title="HTML" style={skillIconStyle} />
          <h3>HTML</h3>
        </li>
        <li>
          <FaCss3Alt size={75} title="CSS" style={skillIconStyle} />
          <h3>CSS</h3>
        </li>
        <li>
          <DiJavascript size={75} title="JS" style={skillIconStyle} />
          <h3>JS</h3>
        </li>
        <li>
          <FaSass size={75} title="Sass" style={skillIconStyle} />
          <h3>Sass</h3>
        </li>

        <li>
          <FaReact size={75} title="React" style={skillIconStyle} />
          <h3>React</h3>
        </li>
        <li>
          <FaNodeJs size={75} title="Node.js" style={skillIconStyle} />
          <h3>Node.js</h3>
        </li>
        <li>
          <SiExpress size={75} title="Express" style={skillIconStyle} />
          <h3>Express</h3>
        </li>
        <li>
          <SiReactrouter
            size={75}
            title="React Router"
            style={skillIconStyle}
          />
          <h3
            style={{
              margin: "0px auto",
              textAlign: "center",
            }}
          >
            React Router
          </h3>
        </li>
        <li>
          <SiMongodb size={75} title="Next.js" style={skillIconStyle} />
          <h3>MongoDB </h3>
        </li>
        <li>
          <TbBrandFirebase size={75} title="Firebase" style={skillIconStyle} />
          <h3>Firebase</h3>
        </li>
        <li>
          <FaBootstrap size={75} title="Bootstrap" style={skillIconStyle} />
          <h3>Bootstrap</h3>
        </li>
        <li>
          <SiTailwindcss size={75} title="Tailwind" style={skillIconStyle} />
          <h3>Tailwind</h3>
        </li>
      </ul>
      <div id="tools">
        <h1 style={{ margin: "2.5% 5%", width: "fit-content" }}>tools</h1>
        <ul className={styles.toolsList}>
          <li className={styles.riveLogo}>
            <img
              src="assets/images/skillsImages/riveLogo.png"
              alt="tool"
              height={100}
              className={styles.riveLogo}
            />
            <h3>Rive</h3>
            <p>
              Helps making better styled and interactive UI components. With not
              only great design, but great animations too.
            </p>
          </li>
          <li
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(1000px)",
            }}
          >
            <img
              src="assets/images/skillsImages/figma.png"
              alt="tool"
              height={100}
              style={{ transform: "translateZ(20px)" }}
            />
            <h3 style={{ transform: "translateZ(20px)" }}>Figma</h3>
            <p style={{ transform: "translateZ(20px)" }}>
              Visioning sites and having a better grasp of what my web app would
              eventually look like, is easier with figma.
            </p>
          </li>
          <li className={styles.riveLogo}>
            <img
              src="assets/images/skillsImages/responsiveLogo.png"
              alt="tool"
              className={styles.riveLogo}
              height={100}
            />
            <h3>Responsive Design</h3>
            <p>
              Using media queries and viewport selectors helps making web apps
              look more appealing in every OS.
            </p>
          </li>
          <li>
            <img
              src="assets/images/skillsImages/codepen.webp"
              alt="tool"
              height={100}
            />
            <h3>CODEPEN</h3>
            <p>
              Inspires new designs, UX interactions or assist in filling general
              great FE requirements in code.
            </p>
          </li>
          <li>
            <img
              src="assets/images/skillsImages/PS.png"
              alt="tool"
              height={100}
            />
            <h3>Photoshop</h3>
            <p>
              A Wonderful tool to beautify images or correcting them for
              personal uses.
            </p>
          </li>
          <li>
            <img
              src="assets/images/skillsImages/board.png"
              alt="tool"
              height={100}
            />
            <h3>Whiteboard & Marker</h3>
            <p>
              Assist in making small sketches, for code units algorithms and
              simplifying architectural needs
            </p>
          </li>
        </ul>
        <h1 style={{ margin: "2.5% 5%", width: "fit-content" }}>hobbies</h1>
        <ul className={styles.toolsList}>
          <li>
            <img
              src="assets/images/skillsImages/boardGame.png"
              alt="tool"
              height={100}
            />
            <h3>Board Games</h3>
            <p>
              I believe in sitting down with friends and playing with them and
              challenging myself and our intelligence.
            </p>
          </li>
          <li>
            <img
              src="assets/images/skillsImages/doctorWho.png"
              alt="tool"
              height={100}
            />
            <h3>Doctor Who</h3>
            <p>
              This long-running show keeps the clever plots, well developed
              characters, and amazing actings. “Allons-y!”
            </p>
          </li>
          <li>
            <img
              src="assets/images/skillsImages/dumbell.png"
              alt="tool"
              height={100}
            />
            <h3>Workouts</h3>
            <p>
              Keeping in physical shape is important for me and I see it as a
              great value to live by.
            </p>
          </li>

          <li>
            <img
              src="assets/images/skillsImages/art.png"
              alt="tool"
              height={100}
            />
            <h3>Digital Sketches</h3>
            <p>
              I love digital drawing and I do it whenever I have free time or
              inspired to draw something that could value me or will satisfy
              what I visioned.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
