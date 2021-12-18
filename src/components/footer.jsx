import React from "react";
import FadeIn from "../animation/animation";
//styles
import "../styles/footer.scss";

const Footer = () => {
  return (
    <FadeIn>
      <div className="footer">
        <p>© Copyright 2021 - Vianney Geloen. Tous droits réservés.</p>
        <nav className="nav-footer">
          <ul className="list-footer">
            <li className="element-list-footer">
              <a href="#accueil">Revenir en haut</a>
            </li>
            <li className="element-list-footer">|</li>
            <li className="element-list-footer">
              <a href="#a-propos">A propos</a>
            </li>
            <li className="element-list-footer">|</li>
            <li className="element-list-footer">
              <a href="#competence">Compétences</a>
            </li>
            <li className="element-list-footer">|</li>
            <li className="element-list-footer">
              <a href="#porte-folio">Portfolio</a>
            </li>
            <li className="element-list-footer">|</li>
            <li className="element-list-footer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </FadeIn>
  );
};

export default Footer;
