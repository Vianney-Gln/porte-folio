import React from "react";
//style
import "../styles/heros.scss";
import Navigation from "./navigation";

const Heros = ({ isOpen, setOpen }) => {
  window.addEventListener("scroll", () => {
    setOpen(false);
  });
  return (
    <>
      {isOpen && <Navigation isOpen={isOpen} setOpen={setOpen} />}
      <div className="heros">
        <div className="container-fond-transparent">
          <h2>Vianney Geloen</h2>
          <p>Développeur web - junior</p>
        </div>
        <a className="boutton-contactez-moi-desktop" href="#contact">
          Contactez moi!
        </a>
      </div>
    </>
  );
};

export default Heros;
