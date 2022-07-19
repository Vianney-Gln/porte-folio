/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// Component
import FormUpdateProjects from "../admin/FormCreateProjects";

// Service
import { getImageProjectById } from "../service/service";

const UpdateModal = ({ modalStyle, setModalOpen, toUpdate, idProject }) => {
  // States
  const [image64, setImage64] = useState({});

  useEffect(() => {
    getImageProjectById(idProject).then((result) => {
      setImage64(result);
    });
  }, []);
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
        <FormUpdateProjects
          image64={image64}
          toUpdate={toUpdate}
          idProjectToUpdate={idProject}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
};

export default UpdateModal;
