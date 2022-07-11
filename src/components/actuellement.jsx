import React, { useContext } from "react";
import FadeIn from "../animation/animation";
// Style
import "../styles/actuellement.scss";
// Context
import ContextInfos from "../context/ContextInfos";

const Actuellement = () => {
  // Context
  const contextInfos = useContext(ContextInfos);
  const { actually } = contextInfos.infoIntro;
  return (
    <div className="container-actuellement">
      <FadeIn>
        <div className="actuellement">
          <p className="actuellement-gras">Actuellement :</p>
          <br></br>
          <br></br>
          <p className="text-normal">{actually ? actually : "load..."}</p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Actuellement;
