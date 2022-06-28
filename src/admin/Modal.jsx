import React from "react";
// Style
import "../styles/modal.scss";

const Modal = ({ modalStyle }) => {
  return (
    <>
      <div className="container-modal"></div>
      <div style={modalStyle} className="modal">
        <div className="modal-delete">
          <button className="button-exit" type="button">
            X
          </button>
          <p>Etes vous sûr de vouloir supprimer ce projet?</p>
          <div className="yes-no-buttons">
            <button type="button">oui</button>
            <button type="button">non</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
