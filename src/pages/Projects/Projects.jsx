import React, { useState, useEffect } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/Projects/ProjectCard";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 6;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showMyProjects, setShowMyProjects] = useState(true);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(project.project);
  }, []);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleShowMyProjects = () => {
    setShowMyProjects(true);
    setCurrentPage(0); // resetar a página atual quando mudar a lista de projetos
  };

  const handleShowOtherProjects = () => {
    setShowMyProjects(false);
    setCurrentPage(0); // resetar a página atual quando mudar a lista de projetos
  };

  const filteredProjects = showMyProjects
    ? projectList.filter((element) => element.myProjects === true)
    : projectList.filter((element) => element.myProjects === false);

  let currentItems;
  let pageCount;

  if (filteredProjects.length > 0) {
    currentItems = filteredProjects.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    );
    pageCount = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  } else if (
    projectList.filter((element) => element.myProjects === true).length > 0
  ) {
    return (
      <div className="flex justify-center items-center m-20 bg-gray-123 ">
        <p>Não há ainda projetos a serem exibidos.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center gap-4 my-4">
        <button
          className={`${
            showMyProjects ? "bg-gray-700 text-white" : ""
          } px-4 py-2 rounded-md`}
          onClick={handleShowMyProjects}
        >
          Meus Projetos
        </button>
        <button
          className={`${
            !showMyProjects ? "bg-gray-700 text-white" : ""
          } px-4 py-2 rounded-md`}
          onClick={handleShowOtherProjects}
        >
          Outros Projetos
        </button>
      </div>
      <div className="flex flex-wrap md:flex-wrap justify-center gap-4 bg-gray-123 p-4 items-center">
        {currentItems.map((elementos, index) => (
          <ProjectCard key={index} elementos={elementos} />
        ))}
      </div>

      <div className=" flex justify-center bg-gray-123 p-8">
        <ReactPaginate
          className="flex justify-between w-48  hover:text-[#C3DCE3] active:text-blue-green "
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="pagination-container"
          pageClassName="pagination-page"
          activeClassName="pagination-active"
          disabledClassName="pagination-disabled"
        />
      </div>
    </>
  );
};
export default ProjectsPage;
