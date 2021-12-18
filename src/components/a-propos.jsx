import React from "react";
//style
import "../styles/a-propos.scss";
import photo from "../images/photo-vianney-carre.jpg";
import FadeIn from "../animation/animation";

const Apropos = () => {
  return (
    <div className="apropos" id="a-propos">
      <p class="qui-suis-je">
        <span>
          <a href="#contact">Contactez moi!</a>
        </span>
      </p>
      <FadeIn>
        <div className="container-avatar">
          <img src={photo} alt="avatar-vianney" />

          <div className="texte-presentation">
            <p>
              Bonjour, je m'appelle Vianney, développeur web junior.<br></br>
              <br></br>
              Fort d'une expèrience d'opérateur logistique depuis 11 ans, j'ai
              acquéris de très bonnes compétences en travail d'équipe, en
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
              <br></br>
              Mon objectif est d'obtenir le titre de développeur web de niveau
              bac +2 et de poursuivre ma carrière dans le web, c'est pourquoi je
              recherche un stage de fin d'études de 4 à 6 mois d'ici la
              mi-Février, et par la suite un contrat.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Apropos;
