import React from "react";
import { useNavigate } from "react-router-dom";
//style
import "../styles/page404.scss";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="container-page404">
      <p>erreur 404</p>
      <p>Page inexistante</p>
      <button onClick={() => navigate("/")} type="button">
        Revenir à l'accueil
      </button>
    </div>
  );
};

export default Page404;
