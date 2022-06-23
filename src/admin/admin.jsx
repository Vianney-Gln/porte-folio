import React, { useState } from "react";
// Style
import "../styles/admin.scss";
// Axios
import axios from "axios";

const Admin = () => {
  const [file, setFile] = useState(null); // state to send file

  const send = (e) => {
    const data = new FormData();
    data.append("file", file);
    axios
      .post("http://localhost:3001/api/portFolio_Vianney/upload", data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="admin">
      <form>
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
      </form>
    </div>
  );
};

export default Admin;
