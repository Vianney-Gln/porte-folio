import React from "react";
//style
import "../styles/heros.scss";
import Navigation from "./navigation";

const Heros = ({ isOpen, setOpen }) => {
  return (
    <>
      {isOpen && <Navigation />}
      <div className="heros">
        <div className="container-fond-transparent">
          <h2>Vianney Geloen</h2>
          <p>Développeur web - junior</p>
        </div>
      </div>
    </>
  );
};

export default Heros;
