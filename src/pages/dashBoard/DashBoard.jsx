import React, { useState, useEffect } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";
import ReactPaginate from "react-paginate";

export default function DashBoard({ currentItems }) {
  console.log(project);
  return (
    <div class="  flex flex-wrap md:flex-wrap justify-center gap-4 bg-grey-123  p-4 items-center ">
      {currentItems.map((elementos, index) => (
        <ProjectCard elementos={elementos} key={index} />
      ))}
    </div>
  );
}
