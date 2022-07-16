import React, { useContext, useState, useEffect } from "react";
// Style
import "../styles/a-propos.scss";
import FadeIn from "../animation/animation";

// Context
import ContextInfos from "../context/ContextInfos";

// Service
import { getAvatar } from "../service/service";

const Apropos = () => {
  // Context
  const contextInfos = useContext(ContextInfos);
  const { introduction } = contextInfos.infoIntro;

  // States
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    getAvatar()
      .then((result) => {
        setAvatar(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            src={`data:${avatar.type};base64,${avatar.base64}`}
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
