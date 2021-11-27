import React from "react";
//style
import "../styles/a-propos.scss";
import avatar from "../images/avatar-vianney-400.png";

const Apropos = () => {
  return (
    <div className="apropos">
      <p>QUI SUIS - JE?</p>
      <div className="container-avatar">
        <img src={avatar} alt="avatar-vianney" />
      </div>
    </div>
  );
};

export default Apropos;
