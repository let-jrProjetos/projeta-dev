import React from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";

export default function DashBoard() {
  console.log("michelle");
  return (
    <div>
      {project.project.map((elementos, index) => (
        <ProjectCard elementos={elementos} key={index} />
      ))}
    </div>
  );
}
