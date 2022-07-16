import React, { useState, useEffect } from "react";
// Services
import uploadPhoto, { getAvatar } from "../service/service";

const FormPhoto = () => {
  const [messagePhoto, setMessagePhoto] = useState(""); // state manage messages
  const [file, setFile] = useState(null); // state to send file
  const [avatar, setAvatar] = useState({}); // state getting avatar

  // Function getting avatar on component mounting
  useEffect(() => {
    getAvatar()
      .then((result) => {
        setAvatar(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**
   * Function running the service uploadPhoto function
   * @param {object} photo
   */
  const sendPhoto = (photo) => {
    const token = localStorage.getItem("token_access_portfolio");
    if (photo) {
      var reader = new FileReader();
      reader.onload = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        document.getElementById("photoToUpload").src =
          "data:image/png;base64," + btoa(binaryString);
        const image64 = { type: photo.type, base64: btoa(binaryString) };

        uploadPhoto(image64, `bearer ${token}`)
          .then(() => setMessagePhoto("photo modifiée"))
          .catch(() => setMessagePhoto("photo non envoyée"));
      };

      reader.readAsBinaryString(photo);
    }
    setMessagePhoto("la photo est modifiée");
  };
  return (
    <form className="form-photo">
      {/* Part upload photo */}
      <div className="container-avatar">
        <img
          id="photoToUpload"
          src={`data:${avatar.type};base64,${avatar.base64}`}
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
        <button type="button" onClick={() => sendPhoto(file)}>
          changer la photo
        </button>
      </div>
      <p className="message">{messagePhoto ? messagePhoto : ""}</p>
    </form>
  );
};

export default FormPhoto;
