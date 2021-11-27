import React from "react";
import avatar from "../images/avatar-vianney-200.png";
import Hamburger from "hamburger-react";
//style
import "../styles/header.scss";

const Header = ({ isOpen, setOpen }) => {
  return (
    <header>
      <div className="avatar">
        <img src={avatar} alt="avatar-vianney" />
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  );
};

export default Header;
