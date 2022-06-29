import React from "react";

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
      </div>
    </div>
  );
};

export default UpdateModal;
