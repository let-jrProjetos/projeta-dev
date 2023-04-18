import React, { useState } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";
import ReactPaginate from "react-paginate";
import { FaArrowLeft } from "react-icons/fa";

const ITEMS_PER_PAGE = 2;

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const currentItems = project.project.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const pageCount = Math.ceil(project.project.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="flex flex-wrap md:flex-wrap justify-center gap-4 bg-grey-123 p-4 items-center">
        {currentItems.map((elementos, index) => (
          <ProjectCard key={index} elementos={elementos} />
        ))}
      </div>

      <div className=" flex justify-center  ">
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
}
