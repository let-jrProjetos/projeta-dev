import React from "react";

export function ProjectCard({ project }) {
  console.log(project);
  console.log("michele");
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {project.tittle}
            <div className="badge badge-secondary"></div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">michelle</div>
            <div className="badge badge-outline">outros</div>
          </div>
        </div>
      </div>
    </>
  );
}
