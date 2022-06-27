import React, { useState, useContext } from "react";
// Style
import "../styles/admin.scss";
// Service function
import uploadPhoto, { updateIntro, createProject } from "../service/service";
// Context
import ContextInfos from "../context/ContextInfos";

const Admin = () => {
  const [file, setFile] = useState(null); // state to send file
  const [fileImageProject, setFileImageProject] = useState(null);
  const [messagePhoto, setMessagePhoto] = useState(""); // state manage messages
  const [messageIntro, setMessageIntro] = useState(""); // state manage messages
  const [messageProject, setMessageProject] = useState(""); // state manage messages
  const [dataProject, setDataProject] = useState({});

  // Context
  const contextInfos = useContext(ContextInfos);
  const { actually, introduction } = contextInfos.infoIntro;

  /**
   * Function running the service uploadPhoto function
   * @param {event} e
   */
  const sendPhoto = (e, photo) => {
    const data = new FormData();
    data.append("file", photo);
    uploadPhoto(data)
      .then(() => {
        setMessagePhoto("la photo est modifiée");
      })
      // .then(() => {
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 3000);
      // })
      .catch(() => {
        setMessagePhoto("photo non envoyée");
      });
  };

  /**
   * Function getting input data
   * @param {string} value
   * @param {string} key
   */
  const getInputDataIntro = (value, key) => {
    const newDataIntro = contextInfos.infoIntro;
    newDataIntro[key] = value;
    contextInfos.setInfoIntro(newDataIntro);
  };
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
   * Function running service function updateIntro
   */
  const runUpdateIntro = () => {
    updateIntro(contextInfos.infoIntro)
      .then(() => {
        setMessageIntro("modification réussie");
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      })
      .catch(() => {
        setMessageIntro("erreur lors de la modification");
      });
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
        <form className="form-photo">
          {/* Part upload photo */}
          <div className="container-avatar">
            <img
              src="http://localhost:3001/api/portFolio_Vianney/upload"
              alt="avatar"
            />
          </div>
          <h2>Changer la photo de l'introduction</h2>
          <div className="change-button">
            <label htmlFor="image">
              <input
                type="file"
                name="image"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
            </label>
            <button type="button" onClick={(e) => sendPhoto(e, file)}>
              changer la photo
            </button>
          </div>
          <p className="message">{messagePhoto ? messagePhoto : ""}</p>
        </form>
        <form className="form-text-intro">
          {/* Part Introduction */}
          <h2>Modification du texte d'introduction ou de actuellement</h2>
          <label htmlFor="introduction">
            <span>Texte d'introduction: </span>
            <textarea
              placeholder="introduction"
              name="introduction"
              defaultValue={introduction ? introduction : ""}
              onChange={(event) =>
                getInputDataIntro(event.target.value, "introduction")
              }
            ></textarea>
          </label>
          <label htmlFor="actually">
            <span>Actuellement: </span>
            <input
              type="text"
              name="actually"
              placeholder="actually"
              defaultValue={actually ? actually : ""}
              onChange={(event) =>
                getInputDataIntro(event.target.value, "actually")
              }
            ></input>
          </label>
          <button type="button" onClick={runUpdateIntro}>
            valider
          </button>
          <p className="message">{messageIntro ? messageIntro : ""}</p>
        </form>
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
