import React, { useContext } from "react";
// Style
import "../styles/admin.scss";
// Context
import ContextInfos from "../context/ContextInfos";
//Components
import FormPhoto from "./FormPhoto";
import FormTextIntro from "./FormTextIntro";
import FormCreateProjects from "./FormCreateProjects";

const Admin = () => {
  // Context
  const contextInfos = useContext(ContextInfos);
  return (
    <div className="admin">
      <h1>Administration du portfolio</h1>
      <div className="container-form">
        <FormPhoto />
        <FormTextIntro />
        <FormCreateProjects />
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
                          <button type="button">Supprimer</button>
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
      </div>
    </div>
  );
};

export default Admin;
