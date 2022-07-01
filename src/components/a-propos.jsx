import React, { useContext } from "react";
// Style
import "../styles/a-propos.scss";
import FadeIn from "../animation/animation";

// Context
import ContextInfos from "../context/ContextInfos";

const Apropos = () => {
  const contextInfos = useContext(ContextInfos);
  const { introduction } = contextInfos.infoIntro;
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
            src="https://portfolio-vianney.herokuapp.com/api/portFolio_Vianney/upload"
            alt="avatar-vianney"
          />
          <div className="texte-presentation">
            <p>
              {introduction
                ? introduction.split("\n").map((el, index) => {
                    return (
                      <span key={index}>
                        {el}
                        <br></br>
                      </span>
                    );
                  })
                : "load..."}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Apropos;
