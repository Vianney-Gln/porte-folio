import React, { useContext } from "react";
import FadeIn from "../animation/animation";
//node module react slideShow
import { Slide } from "react-slideshow-image";
//style
import "../styles/porte-folio.scss";
import "react-slideshow-image/dist/styles.css";
// Context
import ContextInfos from "../context/ContextInfos";
import Project from "./Project";

const PorteFolio = () => {
  //Context
  const contextInfos = useContext(ContextInfos);
  const { projects } = contextInfos;

  return (
    <div className="porteFolio" id="porte-folio">
      <h2>Portfolio</h2>
      <p className="descriptif-porteFolio">
        Vous trouverez ci-dessous mes projets réalisés pendant et après la
        formation.
      </p>
      <div className="slide-container">
        <Slide>
          {projects
            ? projects.map((project) => (
                <div className="each-slide" key={project.id}>
                  <span className="title-project">
                    {project.name.toUpperCase()}
                  </span>
                  <div>
                    <img
                      src={`http://localhost:3001/api/portFolio_Vianney/projects/image/${project.id}`}
                      alt={project.name}
                    />
                    <span className="lien">
                      <a href={project.url}>Visitez le site</a>
                    </span>
                  </div>
                </div>
              ))
            : ""}
        </Slide>
        <FadeIn>
          <div className="projects">
            {projects.map((pro) => (
              <Project key={pro.id} project={pro} />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default PorteFolio;
