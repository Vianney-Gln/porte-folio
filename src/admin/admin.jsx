import React, { useState } from "react";
// Style
import "../styles/admin.scss";
// Service function
import uploadPhoto from "../service/service";

const Admin = () => {
  const [file, setFile] = useState(null); // state to send file
  const [message, setMessage] = useState(""); // state manage messages
  /**
   * Function running the service uploadPhoto function
   * @param {event} e
   */
  const send = (e) => {
    const data = new FormData();
    data.append("file", file);
    uploadPhoto(data)
      .then(() => {
        setMessage("la photo est modifiée");
      })
      .catch(() => setMessage("photo non envoyée"));
  };
  return (
    <div className="admin">
      <h1>Administration du portfolio</h1>
      <form className="form-photo">
        <h2>Changer la photo de l'introduction</h2>
        <label htmlFor="file">
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
        </label>
        <button type="button" onClick={(e) => send(e)}>
          send
        </button>
        {message && <p>{message}</p>}
      </form>
      <form className="form-text-intro">
        <h2>Modifier le texte d'introduction</h2>
        <label htmlFor="introduction">
          <textarea name="introduction"></textarea>
        </label>
      </form>
    </div>
  );
};

export default Admin;
