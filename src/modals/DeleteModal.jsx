import React, { useState } from "react";
// Services
import { deleteProjectById } from "../service/service";

const DeleteModal = ({ modalStyle, setModalOpen, idProject }) => {
  //States
  const [deleteProjectMessage, setDeleteProjectMessage] = useState(""); // state managing delete project message
  /**
   * Function deleting a project by calling service deleteProject and manage message error. Reload if success
   *
   */
  const runDeleteProject = () => {
    const token = localStorage.getItem("token_access_portfolio");
    deleteProjectById(idProject, `Bearer ${token}`)
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
    <div style={modalStyle} className="modal">
      <div className="modal-delete">
        <button
          onClick={() => setModalOpen(false)}
          className="button-exit"
          type="button"
        >
          X
        </button>
        {!deleteProjectMessage && (
          <p>Etes vous sûr de vouloir supprimer ce projet?</p>
        )}
        {!deleteProjectMessage && (
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
        )}
        <p className="message">
          {deleteProjectMessage ? deleteProjectMessage : ""}
        </p>
      </div>
    </div>
  );
};

export default DeleteModal;
