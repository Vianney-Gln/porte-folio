import React, { useState } from "react";
// Style
import "../styles/modal.scss";
// Services
import { deleteProjectById } from "../service/service";

const Modal = ({ modalStyle, setModalOpen, idProject }) => {
  const [deleteProjectMessage, setDeleteProjectMessage] = useState(""); // state managing delete project message

  /**
   * Function deleting a project by calling service deleteProject and manage message error. Reload if success
   *
   */
  const runDeleteProject = () => {
    deleteProjectById(idProject)
      .then(() => {
        setDeleteProjectMessage("Le projet a bien été supprimé");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(() => {
        setDeleteProjectMessage(
          "Il y a eu une erreur lors de la suppression du projet"
        );
      });
  };
  return (
    <>
      <div className="container-modal"></div>
      <div style={modalStyle} className="modal">
        <div className="modal-delete">
          <button
            onClick={() => setModalOpen(false)}
            className="button-exit"
            type="button"
          >
            X
          </button>
          <p>Etes vous sûr de vouloir supprimer ce projet?</p>
          <div className="yes-no-buttons">
            <button
              onClick={() => {
                runDeleteProject();
              }}
              type="button"
            >
              oui
            </button>
            <button onClick={() => setModalOpen(false)} type="button">
              non
            </button>
          </div>
          <p className="message">
            {deleteProjectMessage ? deleteProjectMessage : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
