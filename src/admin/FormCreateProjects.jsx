import React, { useState, useEffect } from "react";
// Service function
import {
  createProject,
  getProjectById,
  updateProjectById,
  deleteImageProjectById,
} from "../service/service";

const FormCreateProjects = ({ idProjectToUpdate, toUpdate }) => {
  // States
  const [messageProject, setMessageProject] = useState(""); // state manage messages
  const [dataProject, setDataProject] = useState({}); //state manage data projects

  // UseEffect / on mountin and if state toUpdate = true, get project and store it in the dataProject state
  useEffect(() => {
    if (toUpdate) {
      getProjectById(idProjectToUpdate).then((result) => {
        setDataProject(result);
        console.log(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  /**
   * Function running service function createProject, manage success or error messages and reload if request is success
   */
  const runCreateProject = () => {
    const token = localStorage.getItem("token_access_portfolio");
    createProject(dataProject, `Bearer ${token}`)
      .then(() => {
        setMessageProject("projet créé");
      })
      .catch((err) => {
        console.log(err);
        setMessageProject("erreur lors de la création du projet");
      });
  };

  /**
   * Function running service function updateProject, manage success or error messages and reload if request is success
   */
  const runUpdateProject = () => {
    const token = localStorage.getItem("token_access_portfolio");
    updateProjectById(dataProject, idProjectToUpdate, `Bearer ${token}`)
      .then(() => {
        setMessageProject("projet modifié");
      })
      .catch((err) => {
        console.log(err);
        setMessageProject("erreur lors de la modification du projet");
      });
  };
  /**
   * Function running the service function deleteImageProjectById
   */
  const runDeleteImageProjectById = () => {
    const token = localStorage.getItem("token_access_portfolio");
    deleteImageProjectById(idProjectToUpdate, `Bearer ${token}`)
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="form-projects">
      {/* Part projects */}
      <h2>{!toUpdate ? "Nouveaux projets" : "modifier un projet"}</h2>
      <label htmlFor="name">
        <span>Nom du projet: </span>
        <input
          type="text"
          name="name"
          placeholder="nom du projet"
          defaultValue={toUpdate ? dataProject.name : ""}
          onChange={(e) => getDataInputProjects(e.target.value, "name")}
        ></input>
      </label>
      <label htmlFor="url">
        <span>lien vers le site: </span>
        <input
          type="text"
          name="url"
          placeholder="url du site"
          defaultValue={toUpdate ? dataProject.url : ""}
          onChange={(e) => getDataInputProjects(e.target.value, "url")}
        ></input>
      </label>
      <label htmlFor="image-project">
        <span>url image du projet </span>
        <input
          type="text"
          name="image-project"
          placeholder="url de l'image"
          defaultValue={toUpdate ? dataProject.urlimage : ""}
          onChange={(e) => getDataInputProjects(e.target.value, "urlImage")}
        ></input>
      </label>
      {toUpdate && (
        <div className="container-image-preview">
          <img
            id="imageProjectToUpload"
            className="image-preview"
            src={dataProject.urlimage ? dataProject.urlimage : ""}
            alt="img-preview"
          />
          <button
            className="delete-button"
            type="button"
            onClick={runDeleteImageProjectById}
          >
            Supprimer l'image
          </button>
        </div>
      )}
      <label htmlFor="date">
        <span>Périodes: </span>
        <input
          type="text"
          name="date"
          placeholder="dates"
          defaultValue={toUpdate ? dataProject.date : ""}
          onChange={(e) => getDataInputProjects(e.target.value, "date")}
        ></input>
      </label>
      <label htmlFor="description">
        <span>Description du projet </span>
        <textarea
          name="description"
          placeholder="description du projet"
          defaultValue={toUpdate ? dataProject.description : ""}
          onChange={(e) => getDataInputProjects(e.target.value, "description")}
        ></textarea>
      </label>
      <button
        type="button"
        onClick={() => {
          !toUpdate ? runCreateProject() : runUpdateProject();
        }}
      >
        valider
      </button>
      <p className="message">{messageProject ? messageProject : ""}</p>
    </form>
  );
};

export default FormCreateProjects;
