import React from "react";

//style
import "../styles/navigation.scss";

const Navigation = ({ isOpen, setOpen }) => {
  return (
    <ul className={"navigation"}>
      <li>
        <a onClick={() => setOpen(!isOpen)} href="#a-propos">
          A propos
        </a>
      </li>
      <li>
        <a onClick={() => setOpen(!isOpen)} href="#competence">
          Compétences
        </a>
      </li>
      <li>
        <a onClick={() => setOpen(!isOpen)} href="#porte-folio">
          Portfolio
        </a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;
