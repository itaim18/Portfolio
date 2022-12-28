import "./App.css";
import FaceIcon from "./components/FaceIcon/FaceIcon";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutPar from "./components/AboutPar/AboutPar";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FaceIcon />
      <AboutPar />
      <div className="Box">
        {/* projects section */}
        <ProjectsSection />
        <SkillsSection />
        {/* skills section  */}
      </div>
    </div>
  );
}

export default App;
