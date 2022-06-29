import React from "react";
import FormUpdateProjects from "../admin/FormCreateProjects";

const UpdateModal = ({ modalStyle, setModalOpen, toUpdate, idProject }) => {
  return (
    <div style={modalStyle} className="modal">
      <div className="modal-update">
        <button
          onClick={() => setModalOpen(false)}
          className="button-exit"
          type="button"
        >
          X
        </button>
        <FormUpdateProjects />
      </div>
    </div>
  );
};

export default UpdateModal;
