import React from "react";

export function ProjectCard({ elementos }) {
  return (
    <>
      <div className="card w-96 shadow-xl  bg-white p-2 ">
        <figure>
          <img src={elementos.image} alt={elementos.tittle} />
        </figure>
        <div className="flex justify-center  ">
          <p className="text-black font-bold text-2xl p-1 font-Dela">
            {elementos.descriptionOne}
          </p>
        </div>
        <div className="card-actions justify-center p-2 font-Montserrat">
          <div className="badge badge-outline p-1">Front-End</div>
          <div className="badge badge-outline p-1">Bakc-End</div>
          <div className="badge badge-outline p-1">Banco de Dados</div>
        </div>

        <div className="card-body">
          <p className="text-black font-Montserrat">
            {elementos.descriptionTwo}
          </p>
          <hr />
          <div className="text-black opacity-50">
            <p> Linguages: {elementos.languages}</p>
            <p>Detalhes: {elementos.details}</p>
            <p> Prazo Sugerido: {elementos.prazo}</p>
          </div>

          <div className="card-title flex justify-around pt-8">
            <h2 className=" rounded-lg bg-grey-bgGreen text-white  p-1">
              Add to Learned
            </h2>
            <h2 className="bg-grey-bgRed rounded-lg text-white p-1">Remove </h2>
          </div>
        </div>
      </div>
    </>
  );
}
