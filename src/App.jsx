import { useState } from "react";
import "./App.css";
import FaceIcon from "./components/FaceIcon/FaceIcon";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutPar from "./components/AboutPar/AboutPar";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import soundContext from "./context/soundContext";
import VolumeIcon from "./components/UI/VolumeIcon/VolumeIcon";

const moveRight = () => {
  const face = document.getElementById("face");
  if (scrollY > 312) {
    face.style.transform = "translateX(12.5%)";
  } else {
    face.style.transform = "translateX(0)";
  }
};
window.addEventListener("scroll", moveRight);

function App() {
  const [soundOn, setSoundOn] = useState(false);
  const toggleSound = () => {
    setSoundOn((prevState) => !prevState);
  };
  return (
    <soundContext.Provider value={{ soundOn: soundOn }}>
      <div className="App">
        <VolumeIcon toggleSound={toggleSound} />
        <NavigationBar />
        <FaceIcon />
        <AboutPar />
        <div className="Box">
          {/* projects section */}
          <ProjectsSection />
          {/* skills section  */}
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </soundContext.Provider>
  );
}

export default App;
