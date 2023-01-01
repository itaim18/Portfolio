import "./App.css";
import FaceIcon from "./components/FaceIcon/FaceIcon";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutPar from "./components/AboutPar/AboutPar";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
// import moveRight from "./utils/face";
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
  return (
    <div className="App">
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
  );
}

export default App;
