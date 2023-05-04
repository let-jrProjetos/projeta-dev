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
}) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2  bg-gray-123 font-Dela">
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            showMyProjects ? "text-black font-bold" : "text-green"
          }`}
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
          }`}
          onClick={handleShowOtherProjects}
        >
          <FaGraduationCap />
          Todos Projetos
        </button>
      </div>

      <div className="flex justify-center items-center gap-2  bg-gray-123 font-Dela">
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            showMyProjects ? "text-black font-bold" : "text-green"
          }`}
          onClick={handleShowMyProjects}
        >
          Front-End
        </button>

        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            !showMyProjects ? "text-black font-bold" : "text-green"
          }`}
          onClick={handleShowOtherProjects}
        >
          Back-End{" "}
        </button>
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            !showMyProjects ? "text-black font-bold" : "text-green"
          }`}
          onClick={handleShowOtherProjects}
        >
          Banco de Dados
        </button>
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            !showMyProjects ? "text-black font-bold" : "text-green"
          }`}
          onClick={handleShowOtherProjects}
        >
          Full-Stack
        </button>
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            !showMyProjects ? "text-black font-bold" : "text-green"
          }`}
          onClick={handleShowOtherProjects}
        >
          CSS{" "}
        </button>
        <button
          className={`flex justify-center items-center gap-4 m-4 p-4 bg-white focus:text-black ${
            !showMyProjects ? "text-black font-bold" : "text-green"
          }`}
          onClick={handleShowOtherProjects}
        >
          Outro Filtro
        </button>
      </div>
    </>
  );
};
