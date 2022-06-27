import React from "react";
// Style
import "../styles/admin.scss";

//Components
import FormPhoto from "./FormPhoto";
import FormTextIntro from "./FormTextIntro";
import FormCreateProjects from "./FormCreateProjects";
import ManageProjects from "./ManageProjects";

const Admin = () => {
  return (
    <div className="admin">
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
