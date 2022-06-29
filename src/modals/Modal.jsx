import React from "react";
import FormCreateProjects from "../admin/FormCreateProjects";
// Style
import "../styles/modal.scss";
// Components
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const Modal = ({
  modalStyleDelete,
  modalStyleUpdate,
  setModalOpen,
  idProject,
  toUpdate,
}) => {
  return (
    <>
      <div className="container-modal"></div>
      {!toUpdate ? (
        <DeleteModal
          modalStyle={modalStyleDelete}
          setModalOpen={setModalOpen}
          idProject={idProject}
        />
      ) : (
        <UpdateModal
          modalStyle={modalStyleUpdate}
          setModalOpen={setModalOpen}
          toUpdate={toUpdate}
          idProject={idProject}
        />
      )}
    </>
  );
};

export default Modal;
