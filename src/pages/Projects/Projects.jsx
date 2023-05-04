import React, { useState } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/Projects/ProjectCard";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 6;
const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  //Essa verificação precisa mudar com context
  const myProjects = project.project.filter(
    (element) => element.myProjects === true
  );

  const otherProjects = project.project.filter(
    (element) => element.myProjects === false
  );

  let currentItems;
  let pageCount;

  if (myProjects.length > 0) {
    currentItems = myProjects.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    );
    pageCount = Math.ceil(myProjects.length / ITEMS_PER_PAGE);
  } else if (otherProjects.length > 0) {
    currentItems = otherProjects.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    );
    pageCount = Math.ceil(otherProjects.length / ITEMS_PER_PAGE);
  } else if (myProjects.length === 0) {
    return (
      <div className="flex justify-center  items-center m-20 bg-gray-123 ">
        <p>Você ainda não criou um projeto.</p>
      </div>
    );
  }

  return (
    <>
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
