import React, { useState } from "react";

const Project = ({ project }) => {
  // States
  const [projectOpen, setProjectOpen] = useState(false); // State managin the display of a project

  // Function closing a card project to escape bugs css on resize
  window.addEventListener("resize", () => {
    setProjectOpen(false);
  });

  return (
    <div className={projectOpen ? "oneProject oneProject-open" : "oneProject"}>
      <h2 className="number-project">{project.name}</h2>
      <p className="description">{project.description}</p>
      <img
        className="card-image"
        src={`https://portfolio-vianney.herokuapp.com/api/portFolio_Vianney/projects/image/${project.id}`}
        alt={project.name}
      />
      <a className="button-mobile" href={project.url}>
        Visitez le site
      </a>
      <button
        onClick={() => setProjectOpen(!projectOpen)}
        type="button"
        className="button-desktop"
      >
        {projectOpen ? "retour" : "plus d'infos"}
      </button>
      {projectOpen && <a href={project.lien}>Visiter le site</a>}
      {!projectOpen && <span className="date-project">du {project.date}</span>}
    </div>
  );
};

export default Project;
