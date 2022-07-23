import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// anim
import FadeIn from "../animation/animation";
// styles
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="container-footer">
      <FadeIn>
        <div className="footer">
          <p>© Copyright 2021 - Vianney Geloen. Tous droits réservés.</p>
          <nav className="nav-footer">
            <ul className="list-footer">
              <li className="element-list-footer">
                <Link to={"/#accueil"}>Revenir en haut</Link>
              </li>
              <li className="element-list-footer">|</li>
              <li className="element-list-footer">
                <Link to={"/#a-propos"}>A propos</Link>
              </li>
              <li className="element-list-footer">|</li>
              <li className="element-list-footer">
                <Link to="/#competence">Compétences</Link>
              </li>
              <li className="element-list-footer">|</li>
              <li className="element-list-footer">
                <Link to="/#porte-folio">Portfolio</Link>
              </li>
              <li className="element-list-footer">|</li>
              <li className="element-list-footer">
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </FadeIn>
    </div>
  );
};

export default Footer;
