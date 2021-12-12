import React, { useState } from "react";
import avatar from "../images/avatar-vianney-200.png";
import Hamburger from "hamburger-react";
//style
import "../styles/header.scss";

const Header = ({ isOpen, setOpen }) => {
  //states
  const [displayHeader, setDisplayHeader] = useState(false);

  window.addEventListener("scroll", (e) => {
    let scrollValue =
      (window.innerHeight + window.scrollY) / document.body.offsetHeight;
    console.log(scrollValue);

    if (scrollValue > 0.35) {
      setDisplayHeader(true);
    } else {
      setDisplayHeader(false);
    }
  });

  return (
    <header className={displayHeader ? "blackHeader" : "transitionHeader"}>
      <div className="avatar">
        <a href="/">
          <img src={avatar} alt="avatar-vianney" />
        </a>
        <nav className="nav-header">
          <ul className="list-header">
            <li>
              <a href="#a-propos">A propos</a>
            </li>
            <li>
              <a href="#competence">Compétences</a>
            </li>
            <li>
              <a href="#porte-folio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="hamburger">
          <Hamburger
            onToggle={() => {
              setOpen(!isOpen);
              console.log(isOpen);
            }}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
