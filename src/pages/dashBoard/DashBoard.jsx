import React, { useState } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";

export default function DashBoard() {
  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(itens.length / itensPerPage);

  return (
    <div class="  flex flex-wrap md:flex-wrap justify-center gap-4 bg-grey-123	p-4 items-center ">
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index}
            </button>
          );
        })}
      </div>
      {project.project.map((elementos, index) => (
        <ProjectCard elementos={elementos} key={index} />
      ))}
    </div>
  );
}
