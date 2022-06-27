import React, { useContext, useState } from "react";
// Context
import ContextInfos from "../context/ContextInfos";
// Services
import { deleteProjectById } from "../service/service";

const ManageProjects = () => {
  // Context
  const contextInfos = useContext(ContextInfos);

  // States
  const [deleteProjectMessage, setDeleteProjectMessage] = useState("");

  const runDeleteProject = (id) => {
    deleteProjectById(id)
      .then(() => {
        setDeleteProjectMessage("Le projet a bien été supprimé");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(() => {
        setDeleteProjectMessage(
          "Il y a eu une erreur lors de la suppression du projet"
        );
      });
  };
  return (
    <>
      <h2 className="title-manage-project">Gestion des projets</h2>
      <div className="manage-projects">
        <div className="container-projects">
          {contextInfos.projects.length ? (
            <ul className="list-projects">
              {contextInfos.projects.length
                ? contextInfos.projects.map((project) => {
                    return (
                      <li key={project.id}>
                        <h3>{project.name}</h3>
                        <img
                          src={`http://localhost:3001/api/portFolio_Vianney/projects/image/${project.id}`}
                          alt={project.name}
                        />
                        <div className="buttons">
                          <button
                            type="button"
                            onClick={() => runDeleteProject(project.id)}
                          >
                            Supprimer
                          </button>
                          <button type="button">Modifier</button>
                        </div>
                      </li>
                    );
                  })
                : ""}
            </ul>
          ) : (
            <p className="no-projects">
              Vous n'avez pas encore réalisé de projets...
            </p>
          )}
        </div>
      </div>
      <p className="message">
        {deleteProjectMessage ? deleteProjectMessage : ""}
      </p>
    </>
  );
};

export default ManageProjects;
