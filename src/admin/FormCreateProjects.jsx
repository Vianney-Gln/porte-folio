import React, { useState } from "react";
// Service function
import { createProject } from "../service/service";

const FormCreateProjects = () => {
  // States
  const [fileImageProject, setFileImageProject] = useState(null); // state manage images projects
  const [messageProject, setMessageProject] = useState(""); // state manage messages
  const [dataProject, setDataProject] = useState({}); //state manage data projects

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
   * Function creting a formData
   * @returns {object} dataForm
   */
  const createFormData = () => {
    const dataForm = new FormData();
    dataProject.name && dataForm.append("name", dataProject.name);
    dataProject.url && dataForm.append("url", dataProject.url);
    dataProject.date && dataForm.append("date", dataProject.date);
    dataProject.description &&
      dataForm.append("description", dataProject.description);
    dataForm.append("image-project", fileImageProject);
    return dataForm;
  };

  /**
   * Function running service function createProject, manage success or error messages and reload if request is success
   */
  const runCreateProject = () => {
    const dataForm = createFormData();
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
          onChange={(e) => getDataInputProjects(e.target.value, "description")}
        ></textarea>
      </label>
      <button type="button" onClick={() => runCreateProject()}>
        valider
      </button>
      <p className="message">{messageProject ? messageProject : ""}</p>
    </form>
  );
};

export default FormCreateProjects;
