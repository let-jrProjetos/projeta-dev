import React from "react";

export function ProjectCard({ elementos }) {
  console.log(elementos);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={elementos.image} alt={elementos.tittle} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">??</div>
          </h2>
          <p>{elementos.descriptionOne}</p>
          <p>{elementos.languages}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Front-End{elementos.front}
            </div>
            <div className="badge badge-outline">Bakc-End{elementos.back}</div>
          </div>
        </div>
      </div>
    </>
  );
}
