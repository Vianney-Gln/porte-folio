import React from "react";
//style
import "../styles/actuellement.scss";

const Actuellement = () => {
  return (
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
  );
};

export default Actuellement;
