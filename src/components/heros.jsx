import React from "react";
//style
import "../styles/heros.scss";

const Heros = () => {
  return (
    <div className="heros">
      <div className="container-fond-transparent">
        <h2>Vianney Geloen</h2>
        <p>Développeur web - junior</p>
      </div>
      <button type="button">A propos de moi</button>
    </div>
  );
};

export default Heros;
