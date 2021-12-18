import React from "react";
import FadeIn from "../animation/animation";
//style
import "../styles/actuellement.scss";

const Actuellement = () => {
  return (
    <FadeIn>
      <div className="actuellement">
        <p className="actuellement-gras">Actuellement :</p>
        <br></br>
        <br></br>
        <p className="text-normal">
          En formation développeur web React-js/Express-js chez<br></br>
          <br></br>
          <span>Wild Code School</span>
        </p>
      </div>
    </FadeIn>
  );
};

export default Actuellement;
