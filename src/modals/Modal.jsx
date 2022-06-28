import React from "react";
// Style
import "../styles/modal.scss";
// Components
import DeleteModal from "./DeleteModal";

const Modal = ({ modalStyle, setModalOpen, idProject }) => {
  return (
    <>
      <div className="container-modal"></div>
      <DeleteModal
        modalStyle={modalStyle}
        setModalOpen={setModalOpen}
        idProject={idProject}
      />
    </>
  );
};

export default Modal;
