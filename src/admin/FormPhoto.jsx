import React, { useState } from "react";
// Services
import uploadPhoto from "../service/service";

const FormPhoto = () => {
  const [messagePhoto, setMessagePhoto] = useState(""); // state manage messages
  const [file, setFile] = useState(null); // state to send file

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
        console.log(btoa(binaryString).length);
        console.log(photo);
        const image64 = { type: photo.type, base64: btoa(binaryString) };

        uploadPhoto(image64, token)
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
          //src="https://portfolio-vianney.herokuapp.com/api/portFolio_Vianney/upload"
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
