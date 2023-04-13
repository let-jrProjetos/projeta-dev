import React, { useState, useEffect } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";
import ReactPaginate from "react-paginate";

export default function DashBoard() {
  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(project.project)
        .then((response) => response.json())
        .then((data) => data);

      setItens(result);
    };
    fetchData();
  }, []);

  return (
    <div class="  flex flex-wrap md:flex-wrap justify-center gap-4 bg-grey-123	p-4 items-center ">
      <div>
        <div>{pages}</div>

        {Array.from(Array(pages), (item, index) => {
          return (
            <>
              <div>{pages}</div>
              <div>{index}</div>
              <div>{item}</div>
            </>
          );
        })}
      </div>
      {project.project.map((elementos, index) => (
        <ProjectCard elementos={elementos} key={index} />
      ))}
    </div>
  );
}
