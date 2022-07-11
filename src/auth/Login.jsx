import React, { useState } from "react";
// Style
import "../styles/login.scss";
// Router
import { useNavigate } from "react-router-dom";
// Service
import { authentificate } from "../service/auth";

const Login = () => {
  // Navigate
  const navigate = useNavigate();
  // States
  const [creds, setCreds] = useState({});
  const [message, setMessage] = useState("");
  /**
   * Function getting credentials from inputs
   * @param {String} value
   * @param {String} type
   */
  const getCredentialsFromInput = (value, type) => {
    const newCreds = creds;
    creds[type] = value;
    setCreds(newCreds);
  };
  /**
   * Function running authentificate from service, store the token in the localstorage and redirect to /admin
   * @param {Event} e
   */
  const runAuthentificate = (e) => {
    e.preventDefault();
    authentificate(creds)
      .then((result) => {
        localStorage.setItem("token_access_portfolio", result);
        navigate("/admin");
      })
      .catch(() => {
        setMessage("mot de passe ou email incorrect");
      });
  };

  return (
    <div className="container-login">
      <h1>Se connecter</h1>
      <form onSubmit={(e) => runAuthentificate(e)}>
        <label htmlFor="email">
          <span>Votre adresse mail:</span>
          <input
            onChange={(e) => getCredentialsFromInput(e.target.value, "email")}
            type="email"
            name="email"
            placeholder="email"
          />
        </label>
        <label htmlFor="password">
          <span>Votre mot de passe:</span>
          <input
            onChange={(e) => {
              getCredentialsFromInput(e.target.value, "password");
            }}
            type="password"
            name="password"
            placeholder="mot de passe"
          />
        </label>
        <button type="submit">valider</button>
      </form>
      <p>{message && message}</p>
    </div>
  );
};

export default Login;
