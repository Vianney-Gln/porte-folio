import React from "react";
// Style
import "../styles/a-propos.scss";
import FadeIn from "../animation/animation";

const Apropos = () => {
  return (
    <div className="apropos" id="a-propos">
      <p className="qui-suis-je">
        <span>
          <a href="#contact">Contactez moi!</a>
        </span>
      </p>
      <FadeIn>
        <div className="container-avatar">
          <img
            src="http://localhost:3001/api/portFolio_Vianney/upload"
            alt="avatar-vianney"
          />
          <div className="texte-presentation">
            <p>
              Bonjour, je m'appelle Vianney, développeur web junior.<br></br>
              <br></br>
              Fort d'une expèrience d'opérateur logistique depuis 11 ans, j'ai
              acquis de très bonnes compétences en travail d'équipe, en
              relationnel et aussi en rigueur.<br></br>
              <br></br>
              J'ai cependant décidé de me reconvertir dans le développement web,
              c'est ce métier qui me motive et qui éveille ma curiosité de jours
              en jours.<br></br>
              <br></br>
              Après 1 an d'apprentissage des bases du web en autodidacte (html,
              css, javascript, php, mysql), j'ai décidé de rejoindre la Wild
              Code School afin de professionnaliser et approfondir mes
              compétences.
              <br></br>
              <br></br>A la Wild, j'ai renforcé mes compétences en Javascript,
              appris à utiliser React, Express et MySql. Au delà des compétences
              techniques, j'ai également pu développer des compétences
              transverses comme la rigueur, la détermination, le travail
              d'équipe.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Apropos;
