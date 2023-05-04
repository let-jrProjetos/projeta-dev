import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const EmptyProjectPage = () => {
  const [user, setUser] = useState({ name: "Alex", id: "AlexA" });
  return (
    <div className=" bg-gray-123 h-full font-Montserrat  p-32 gap-40 flex flex-col justify-center items-center ">
      <p className=" rounded-lg p-11 bg-white text-black flex justify-center items-center ">
        <p>
          Infelizmente nós ainda não temos nenhum projeto seu para mostrar. =({" "}
        </p>
      </p>
      <Link to={`/novoProjeto/${user.id}`}>
        <button
          type="submit"
          className="bg-[#2B788B] max-w-3/6 px-4 py-2 text-white p-4"
        >
          Adicionar Novo Projeto!
        </button>
      </Link>
    </div>
  );
};
