import React, { useState, useContext } from "react";
// Context
import ContextInfos from "../context/ContextInfos";
// Services
import { updateIntro } from "../service/service";

const FormTextIntro = () => {
  // States
  const [messageIntro, setMessageIntro] = useState(""); // state manage messages
  // Context
  const contextInfos = useContext(ContextInfos);
  const { actually, introduction } = contextInfos.infoIntro;

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
   * Function running service function updateIntro
   */
  const runUpdateIntro = () => {
    const token = localStorage.getItem("token_access_portfolio");
    updateIntro(contextInfos.infoIntro, `Bearer ${token}`)
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
  return (
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
  );
};

export default FormTextIntro;
