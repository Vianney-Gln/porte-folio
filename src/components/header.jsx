import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
// image
import avatar from "../images/avatar-vianney-200.png";
// burger
import Hamburger from "hamburger-react";
//style
import "../styles/header.scss";

const Header = ({ isOpen, setOpen }) => {
  //states
  const [displayHeader, setDisplayHeader] = useState(false);

  window.addEventListener("scroll", () => {
    let scrollValue =
      (window.innerHeight + window.scrollY) / document.body.offsetHeight;
    if (scrollValue > 0.35) {
      setDisplayHeader(true);
    } else {
      setDisplayHeader(false);
    }
  });

  return (
    <header className={displayHeader ? "blackHeader" : "transitionHeader"}>
      <div className="avatar">
        <Link to="/#accueil">
          <img src={avatar} alt="avatar-vianney" />
        </Link>
        <nav className="nav-header">
          {!displayHeader && (
            <ul className="list-header">
              <li>
                <Link to={"/#a-propos"}>À propos</Link>
              </li>
              <li>
                <Link to={"/#competence"}>Compétences</Link>
              </li>
              <li>
                <Link to="/#porte-folio">Portfolio</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          )}
        </nav>

        <div className="hamburger">
          <Hamburger
            onToggle={() => {
              setOpen(!isOpen);
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
