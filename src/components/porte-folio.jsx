import React, { useState } from "react";
import FadeIn from "../animation/animation";
//node module react slideShow
import { Slide } from "react-slideshow-image";
//import data projets
import projets from "../data/projets";
//style
import "../styles/porte-folio.scss";
import "react-slideshow-image/dist/styles.css";

const PorteFolio = () => {
  const [projet, setProjet] = useState(projets);

  const handleCard = (id) => {
    const newProjet = projet;
    newProjet[id - 1].isOpen = !newProjet[id - 1].isOpen;
    console.log(newProjet);
    setProjet([...newProjet]);
  };
  window.addEventListener("resize", () => {
    setProjet(projets);
  });
  return (
    <div className="porteFolio" id="porte-folio">
      <h2>Portfolio</h2>
      <p className="descriptif-porteFolio">
        Vous trouverez ci-dessous mes projets réalisés pendant et après la
        formation.
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
            {projet.map((pro) => (
              <div
                className={
                  pro.isOpen ? "oneProject oneProject-open" : "oneProject"
                }
                key={pro.id}
              >
                <h2 className="number-project">{pro.title}</h2>
                <p className="description">{pro.description}</p>
                <img className="card-image" src={pro.image} alt={pro.title} />
                <a className="button-mobile" href={pro.lien}>
                  Visitez le site
                </a>
                <button
                  onClick={() => handleCard(pro.id)}
                  type="button"
                  className="button-desktop"
                >
                  {pro.isOpen ? "retour" : "plus d'infos"}
                </button>
                {pro.isOpen && <a href={pro.lien}>Visiter le site</a>}
                {!pro.isOpen && (
                  <span className="date-project">du {pro.date}</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default PorteFolio;
