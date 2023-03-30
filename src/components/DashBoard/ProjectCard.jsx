import React from "react";

export function ProjectCard({ elementos }) {
  return (
    <>
      <div className="card w-96 shadow-xl  bg-white p-2">
        <figure>
          <img src={elementos.image} alt={elementos.tittle} />
        </figure>
        <div className="flex justify-center  ">
          <p className="text-black font-bold text-3xl p-1">
            {elementos.descriptionOne}
          </p>
        </div>
        <div className="card-actions justify-center p-2">
          <div className="badge badge-outline p-1">Front-End</div>
          <div className="badge badge-outline p-1">Bakc-End</div>
          <div className="badge badge-outline p-1">Banco de Dados</div>
        </div>

        <div className="card-body">
          <p className="text-black">{elementos.descriptionTwo}</p>
          <p className="text-black">Linguages: {elementos.languages}</p>

          <h2 className="card-title">
            <div className=" rounded-lg bg-green-300 text-white  p-1">
              Add to Learned
            </div>
          </h2>
          <h2 className="card-title">
            <div className="bg-red-200 rounded-lg text-white p-1">Remove </div>
          </h2>
        </div>
      </div>
    </>
  );
}
