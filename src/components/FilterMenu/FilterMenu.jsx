import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaGripLinesVertical,
} from "react-icons/fa";

export const FilterMenu = ({
  showMyProjects,
  handleShowMyProjects,
  handleShowOtherProjects,
  projectList,
}) => {
  //   let filterProject;
  //   if (projectList.filter((element) => element.front === true)) {
  //     return (filterProject = element);
  //   }
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2  bg-gray-123 font-Dela">
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            showMyProjects ? "text-black font-bold" : "text-green"
          } w-full sm:w-auto`}
          onClick={handleShowMyProjects}
        >
          <FaBookOpen />
          Meus Projetos
        </button>
        <div className="opacity-25">
          <FaGripLinesVertical />
        </div>
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            !showMyProjects ? "text-black font-bold" : "text-green"
          } w-full sm:w-auto`}
          onClick={handleShowOtherProjects}
        >
          <FaGraduationCap />
          Todos Projetos
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 bg-gray-123 font-Dela">
        <button className="flex w-full sm:w-auto px-8 sm:px-16 text-black focus:underline justify-center items-center gap-4 m-4 p-3 bg-white focus:text-black">
          Front-End
        </button>

        <button className="flex w-full sm:w-auto px-8 sm:px-16 text-black focus:underline justify-center items-center gap-4 m-4 p-3 bg-white focus:text-black">
          Back-End
        </button>

        <button className="flex w-full sm:w-auto px-8 sm:px-16 text-black focus:underline justify-center items-center gap-4 m-4 p-3 bg-white focus:text-black">
          Banco de Dados
        </button>

        <button className="flex w-full sm:w-auto px-8 sm:px-16 text-black focus:underline justify-center items-center gap-4 m-4 p-3 bg-white focus:text-black">
          Full-Stack
        </button>

        <button className="flex w-full sm:w-auto px-8 sm:px-16 text-black focus:underline justify-center items-center gap-4 m-4 p-3 bg-white focus:text-black">
          Outro Filtro
        </button>
      </div>
    </>
  );
};
