import React from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";

export default function DashBoard() {
  console.log(project);
  return (
    <div>
      {project.project.map((elementos, index) => (
        // <div>{elementos.image}</div>
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}
