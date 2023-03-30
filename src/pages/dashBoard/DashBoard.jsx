import React from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";

export default function DashBoard() {
  return (
    <div class="flex flex-wrap md:flex-wrap justify-center items-center gap-2 bg-grey-123	p-4">
      {project.project.map((elementos, index) => (
        <ProjectCard elementos={elementos} key={index} />
      ))}
    </div>
  );
}
//flex flex-nowrap
