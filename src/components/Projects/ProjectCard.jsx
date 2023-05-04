import React from "react";

export function ProjectCard({ elementos, showMyProjects }) {
  return (
    <>
      <div className="  card w-96 shadow-xl   bg-white  ">
        <figure>
          <img
            className="h-56 w-96"
            src={elementos.image}
            alt={elementos.tittle}
          />
        </figure>
        <div className="flex justify-center  ">
          <p className="text-black font-bold text-2xl p-1 font-Dela ">
            {elementos.descriptionOne}
          </p>
        </div>
        <div className="card-actions justify-center p-2 font-Montserrat ">
          <div className="badge badge-outline px-2">Front-End</div>
          <div className="badge badge-outline p-1">Bakc-End</div>
          <div className="badge badge-outline p-1">Banco de Dados</div>
        </div>

        <div className="card-body">
          <p className="text-black font-Montserrat h-36">
            {elementos.descriptionTwo}
          </p>
          <hr />
          <div className="text-black opacity-50">
            <p> Linguagens: {elementos.languages}</p>
            <p>Detalhes: {elementos.details}</p>
            <p> Prazo Sugerido: {elementos.prazo}</p>
          </div>

          <div className="card-title flex justify-around pt-4">
            <button
              className={`${
                showMyProjects
                  ? "hidden"
                  : "rounded-lg bg-green-greenAdd text-white px-4"
              }`}
            >
              Adicionar
            </button>
            <button
              className={`${
                !showMyProjects
                  ? "hidden"
                  : "bg-red-redAdd rounded-lg text-white px-4"
              }`}
            >
              Remover{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
