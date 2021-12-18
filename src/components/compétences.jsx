import React from "react";
import FadeIn from "../animation/animation";
//style
import "../styles/compétences.scss";
//import d'icone des langages web
import nodeJs from "../images/node-js-640.png";
import php from "../images/icon-php-80.png";
import mySql from "../images/icons-mysql-96.png";
import css3 from "../images/icon-css3-96.png";
import sass from "../images/icon-sass-96.png";
import bootstrap from "../images/icon-bootstrap-96.png";
import html5 from "../images/icon-html-5-96.png";
import git from "../images/icon-git-96.png";
import javascript from "../images/javascript-128.ico";
import logoreact from "../images/react.png";

const Competences = () => {
  return (
    <div className="container-competence">
      <FadeIn>
        <div className="competences" id="competence">
          <h2>Compétences</h2>
          <div className="description-competences">
            <p>
              Actuellement encore en formation, mes compétences sont en
              constantes évolutions. Pour l'instant elles sont principalement
              centrées sur l'environnement Javascript :
            </p>
          </div>
          <div className="section-langages">
            <div>
              <h4>Back end: </h4>
              <ul className="backend">
                <li>
                  <img src={nodeJs} alt="icon-nodeJs" />
                </li>
                <li>
                  <img src={php} alt="icon-php" />
                </li>
                <li>
                  <img src={mySql} alt="icon-mySql" />
                </li>
              </ul>
            </div>
            <div>
              <h4>Front end: </h4>
              <ul className="frontend">
                <li>
                  <img src={html5} alt="icon-html5" />
                </li>
                <li>
                  <img src={css3} alt="icon-css3" />
                </li>
                <li>
                  <img src={sass} alt="icon-sass" />
                </li>
                <li>
                  <img src={logoreact} alt="icon-react" />
                </li>
                <li>
                  <img src={javascript} alt="icon-javascript" />
                </li>
              </ul>
            </div>
            <div>
              <h4>Divers: </h4>
              <ul className="divers">
                <li>
                  <img src={git} alt="icon-git" />
                </li>
                <li>
                  <img src={bootstrap} alt="icon-bootstrap" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Competences;
