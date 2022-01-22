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
        Vous trouverez ci dessous les projets réalisés pendant la formation.
        <br></br>2 projets fictifs ont déjà été effectués, un troisième est en
        cours et sera réalisé pour un vrai client !
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
