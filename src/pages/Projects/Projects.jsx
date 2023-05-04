import React, { useState, useEffect } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/Projects/ProjectCard";
import ReactPaginate from "react-paginate";
import { EmptyProjectPage } from "../../components/Projects/emptyProjectPage";
import { AddRemoveComponent } from "../../components/ButtonComponent/AddRemoveComponent";
import { FilterMenu } from "../../components/FilterMenu/FilterMenu";
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
    setCurrentPage(0);
  };

  const handleShowOtherProjects = () => {
    setShowMyProjects(false);
    setCurrentPage(0);
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
  }
  if (
    projectList.filter((element) => element.myProjects === true).length === 0
  ) {
    return <EmptyProjectPage />;
  }

  return (
    <>
      <FilterMenu
        showMyProjects={showMyProjects}
        handleShowMyProjects={handleShowMyProjects}
        handleShowOtherProjects={handleShowOtherProjects}
      />

      <div className="flex flex-wrap md:flex-wrap justify-center gap-4 bg-gray-123 p-4 items-center">
        {currentItems.map((elementos, index) => (
          <ProjectCard
            key={index}
            elementos={elementos}
            showMyProjects={showMyProjects}
          />
        ))}
      </div>

      <div className=" flex justify-center bg-gray-123 p-8">
        <ReactPaginate
          className="flex justify-between w-48  "
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="pagination-container"
          pageClassName="pagination-page "
          activeClassName="font-bold text-black pagination-active"
          disabledClassName="pagination-disabled"
        />
      </div>
    </>
  );
};
export default ProjectsPage;
