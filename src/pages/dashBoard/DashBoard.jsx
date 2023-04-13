import React, { useState, useEffect } from "react";
import project from "../../../db.json";
import { ProjectCard } from "../../components/dashBoard/projectCard";
import ReactPaginate from "react-paginate";

export default function DashBoard({ currentItems }) {
  console.log(project);
  return (
    <div class="  flex flex-wrap md:flex-wrap justify-center gap-4 bg-grey-123	p-4 items-center ">
      {currentItems.map((elementos, index) => (
        <ProjectCard elementos={elementos} key={index} />
      ))}
    </div>
  );
}

export function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = project.project.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(project.project.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <DashBoard currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </>
  );
}
