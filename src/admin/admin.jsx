import React, { useState, useContext } from "react";
// Style
import "../styles/admin.scss";
// Service function
import { createProject } from "../service/service";
// Context
import ContextInfos from "../context/ContextInfos";
//Components
import FormPhoto from "./FormPhoto";
import FormTextIntro from "./FormTextIntro";

const Admin = () => {
  const [fileImageProject, setFileImageProject] = useState(null);
  const [messageProject, setMessageProject] = useState(""); // state manage messages
  const [dataProject, setDataProject] = useState({});
  // Context
  const contextInfos = useContext(ContextInfos);

  /**
   * Function getting input data
   * @param {string} value
   * @param {string} key
   */
  const getDataInputProjects = (value, key) => {
    const newDataProject = dataProject;
    newDataProject[key] = value;
    setDataProject(newDataProject);
  };

  const runCreateProject = () => {
    const dataForm = new FormData();
    dataProject.name && dataForm.append("name", dataProject.name);
    dataProject.url && dataForm.append("url", dataProject.url);
    dataProject.date && dataForm.append("date", dataProject.date);
    dataProject.description &&
      dataForm.append("description", dataProject.description);
    dataForm.append("image-project", fileImageProject);
    createProject(dataForm)
      .then(() => {
        setMessageProject("projet créé");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setMessageProject("erreur lors de la création du projet");
      });
  };

  return (
    <div className="admin">
      <h1>Administration du portfolio</h1>
      <div className="container-form">
        <FormPhoto />
        <FormTextIntro />
        <form className="form-projects">
          {/* Part projects */}
          <h2>Nouveaux projets</h2>
          <label htmlFor="name">
            <span>Nom du projet: </span>
            <input
              type="text"
              name="name"
              placeholder="nom du projet"
              onChange={(e) => getDataInputProjects(e.target.value, "name")}
            ></input>
          </label>
          <label htmlFor="url">
            <span>lien vers le site: </span>
            <input
              type="text"
              name="url"
              placeholder="url du site"
              onChange={(e) => getDataInputProjects(e.target.value, "url")}
            ></input>
          </label>
          <label htmlFor="image-project">
            <span>upload image du projet </span>
            <input
              type="file"
              name="image-project"
              onChange={(e) => setFileImageProject(e.target.files[0])}
            ></input>
          </label>
          <label htmlFor="date">
            <span>Périodes: </span>
            <input
              type="text"
              name="date"
              placeholder="dates"
              onChange={(e) => getDataInputProjects(e.target.value, "date")}
            ></input>
          </label>
          <label htmlFor="description">
            <span>Description du projet </span>
            <textarea
              name="description"
              placeholder="description du projet"
              onChange={(e) =>
                getDataInputProjects(e.target.value, "description")
              }
            ></textarea>
          </label>
          <button type="button" onClick={() => runCreateProject()}>
            valider
          </button>
          <p className="message">{messageProject ? messageProject : ""}</p>
        </form>
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
