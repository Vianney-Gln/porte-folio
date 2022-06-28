import React, { useState } from "react";

const Project = ({ project }) => {
  const [projectOpen, setProjectOpen] = useState(false);
  return (
    <div className={projectOpen ? "oneProject oneProject-open" : "oneProject"}>
      <h2 className="number-project">{project.name}</h2>
      <p className="description">{project.description}</p>
      <img
        className="card-image"
        src={`http://localhost:3001/api/portFolio_Vianney/projects/image/${project.id}`}
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
