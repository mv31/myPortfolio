import React from "react";
import ProjectItem from "../components/ProjectItem";
import Doctor from "../assets/proj1.jpg";
import { ProjectList } from "../constants/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects Worked</h1>
      <div className="projectList">
      {ProjectList.map((pro,index) => {
        return <ProjectItem name={pro.name} id={index} image={pro.image} />;
      })}
      </div>
      
    </div>
  );
}

export default Projects;
