import React from "react";
import FadeIn from "../animation/animation";
//style
import "../styles/actuellement.scss";

const Actuellement = () => {
  return (
    <div className="container-actuellement">
      <FadeIn>
        <div className="actuellement">
          <p className="actuellement-gras">Actuellement :</p>
          <br></br>
          <br></br>
          <p className="text-normal">
            En recherche d'emplois de développeur web
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Actuellement;
