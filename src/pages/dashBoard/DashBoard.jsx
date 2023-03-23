import React from "react";
import project from "../../../db";
import ProjectCard from "../../components/dashBoard/ProjectCard";
export default function DashBoard() {
  return (
    <>
      {project.map((project) => {
        <ProjectCard />;
      })}
      <div>DashBoard</div>
    </>
  );
}
