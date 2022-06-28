import React, { useState } from "react";
// Style
import "../styles/admin.scss";

//Components
import FormPhoto from "./FormPhoto";
import FormTextIntro from "./FormTextIntro";
import FormCreateProjects from "./FormCreateProjects";
import ManageProjects from "./ManageProjects";
import Modal from "./Modal";

const Admin = () => {
  // Styles modal
  const modalStyleDelete = {
    width: "35vw",
    height: "35vh",
    backgroundColor: "black",
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "70",
    transform: "translate(-50%, -50%)",
    border: "2px solid white",
    borderRadius: "10px",
  };

  // States
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="admin">
      {modalOpen && (
        <Modal modalStyle={modalStyleDelete} setModalOpen={setModalOpen} />
      )}
      <h1>Administration du portfolio</h1>
      <div className="container-form">
        <FormPhoto />
        <FormTextIntro />
        <FormCreateProjects />
        <ManageProjects />
      </div>
    </div>
  );
};

export default Admin;
