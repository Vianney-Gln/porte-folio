import React from "react";
import FadeIn from "../animation/animation";
//node module react slideShow
import { Slide } from "react-slideshow-image";
//import data projets
import projets from "../data/projets";
//style
import "../styles/porte-folio.scss";
import "react-slideshow-image/dist/styles.css";

const PorteFolio = () => {
  return (
    <div className="porteFolio" id="porte-folio">
      <h2>Portfolio</h2>
      <p className="descriptif-porteFolio">
        Vous trouverez ci dessous les 2 projets réalisés pendant la formation.
        <br></br>Je travail actuellement sur un site vitrine avec back-office,
        qui sera bientôt publié.
        <br></br>Vous trouverez également un travail effectué lors de
        l'évènement Hackathon Manomano réalisé les 20 et 21 Janvier 2022.
      </p>
      <div className="slide-container">
        <Slide>
          {projets.map((projet) => (
            <div className="each-slide" key={projet.id}>
              <span className="title-project">
                {projet.title.toUpperCase()}
              </span>
              <div>
                <img src={projet.image} alt={projet.title} />
                <span className="lien">
                  <a href={projet.lien}>Visitez le site</a>
                </span>
              </div>
            </div>
          ))}
        </Slide>
        <FadeIn>
          <div className="projects">
            {projets.map((pro) => (
              <div className="oneProject">
                <h2 className="number-project">{pro.title}</h2>
                <p className="description">{pro.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default PorteFolio;
