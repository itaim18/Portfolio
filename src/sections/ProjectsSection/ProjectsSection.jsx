import React from "react";
import styles from "./ProjectsSection.module.css";
import projectsData from "./projectsData.json";
import Project from "./Project";
const ProjectsSection = () => {
  const { projects } = projectsData;
  return (
    <div id="projects" className={styles.projects}>
      <h1 style={{ marginTop: "15px" }}>Projects</h1>
      {projects.map((project, idx) => {
        const images = [
          project.tablet_image,
          project.desktop_image,
          project.mobile_image,
        ];
        return (
          <Project
            key={idx}
            title={project.name}
            deck={project.deck}
            images={images}
            liveLink={project.url}
            codeLink={project.code_url}
          />
        );
      })}
    </div>
  );
};

export default ProjectsSection;
