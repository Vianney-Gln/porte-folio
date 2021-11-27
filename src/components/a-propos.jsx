import React from "react";
//style
import "../styles/a-propos.scss";
import avatar from "../images/avatar-vianney-400.png";

const Apropos = () => {
  return (
    <div className="apropos">
      <p class="qui-suis-je">QUI SUIS - JE?</p>
      <div className="container-avatar">
        <img src={avatar} alt="avatar-vianney" />
      </div>
      <div className="texte-presentation">
        <p>
          Bonjour, je m'appelle Vianney, développeur web junior.<br></br>
          <br></br>
          Je suis issu d'une carrière d'opérateur logistique qui a durée 11 ans,
          ce qui m'a permis d'acquérir de très bonnes compétences en travail
          d'équipe, en relationnel et aussi en rigueur.<br></br>
          <br></br>
          J'ai cependant décidé de me reconvertir dans le développement web
          parce-que c'est ce métier qui me motive et qui éveil ma curiosité de
          jours en jours.<br></br>
          Après 1 an d'apprentissage des bases du web en autodidacte (html, css,
          javascript, php, mysql), j'ai décidé de rejoindre la Wild Code School
          afin de professionnaliser et approfondir mes compétences.<br></br>
          <br></br>
          Mon objectif est d'obtenir le titre de développeur web de niveau bac
          +2, c'est pourquoi je recherche un stage de fin d'études de 4 mois
          d'ici la mi-Février.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
