import React, { useState } from "react";
// Style
import "../styles/admin.scss";
// Service function
import uploadPhoto from "../service/service";

const Admin = () => {
  const [file, setFile] = useState(null); // state to send file
  const [messagePhoto, setMessagePhoto] = useState(""); // state manage messages
  const [messageIntro, setMessageIntro] = useState(""); // state manage messages
  const [messageProject, setMessageProject] = useState(""); // state manage messages
  /**
   * Function running the service uploadPhoto function
   * @param {event} e
   */
  const send = (e) => {
    const data = new FormData();
    data.append("file", file);
    uploadPhoto(data)
      .then(() => {
        setMessagePhoto("la photo est modifiée");
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(() => setMessagePhoto("photo non envoyée"));
  };
  return (
    <div className="admin">
      <h1>Administration du portfolio</h1>
      <div className="container-form">
        <form className="form-photo">
          <div className="container-avatar">
            <img
              src="http://localhost:3001/api/portFolio_Vianney/upload"
              alt="avatar"
            />
          </div>
          <h2>Changer la photo de l'introduction</h2>
          <div className="change-button">
            <label htmlFor="file">
              <input
                type="file"
                name="image"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
            </label>
            <button type="button" onClick={(e) => send(e)}>
              changer la photo
            </button>
          </div>
          <p className="message">{messagePhoto ? messagePhoto : ""}</p>
        </form>
        <form className="form-text-intro">
          <h2>Modification du texte d'introduction ou de actuellement</h2>
          <label htmlFor="introduction">
            <span>Texte d'introduction: </span>
            <textarea placeholder="introduction" name="introduction"></textarea>
          </label>
          <label htmlFor="actually">
            <span>Actuellement: </span>
            <input type="text" name="actually" placeholder="actually"></input>
          </label>
          <button type="button">valider</button>
          <p className="message">{messageIntro ? messageIntro : ""}</p>
        </form>
        <form className="form-projects">
          <h2>Gestion des projets</h2>
          <label htmlFor="name">
            <span>Nom du projet: </span>
            <input type="text" name="name" placeholder="nom du projet"></input>
          </label>
          <label htmlFor="url">
            <span>lien vers le site: </span>
            <input type="text" name="url" placeholder="url du site"></input>
          </label>
          <label htmlFor="image-url">
            <span>image url du projet </span>
            <input
              type="text"
              name="image-url"
              placeholder="url image du projet"
            ></input>
          </label>
          <label htmlFor="date">
            <span>Périodes: </span>
            <input type="text" name="date" placeholder="dates"></input>
          </label>
          <label htmlFor="description">
            <span>Description du projet </span>
            <textarea
              name="description"
              placeholder="description du projet"
            ></textarea>
          </label>
          <button type="button">valider</button>
          <p className="message">{messageProject ? messageProject : ""}</p>
        </form>
      </div>
    </div>
  );
};

export default Admin;
