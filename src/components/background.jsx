import React from "react";
import backgroundImage from "../images/monitor-pixabay.jpg";
//style
import "../styles/background.scss";

const Background = () => {
  return (
    <div className="background">
      <img src={backgroundImage} alt="monitor-pixabay" />
    </div>
  );
};

export default Background;
