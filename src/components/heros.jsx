import React from "react";
import FadeIn from "../animation/animation";
//style
import "../styles/heros.scss";
import Navigation from "./navigation";

const Heros = ({ isOpen, setOpen }) => {
  window.addEventListener("scroll", () => {
    setOpen(false);
  });
  return (
    <>
      <FadeIn>
        {isOpen && <Navigation isOpen={isOpen} setOpen={setOpen} />}
        <div className="heros" id="accueil">
          <div className="container-fond-transparent">
            <h2>Vianney Geloen</h2>
            <p>Développeur web - junior</p>
          </div>
          <a className="boutton-contactez-moi-desktop" href="#contact">
            Contactez moi!
          </a>
        </div>
      </FadeIn>
    </>
  );
};

export default Heros;
