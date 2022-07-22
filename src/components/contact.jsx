import React, { useState } from "react";
import FadeIn from "../animation/animation";
// style
import "../styles/contact.scss";
// service
import { sendEmail } from "../service/service";

const Contact = () => {
  const [dataMail, setDataMail] = useState({}); // state data email - object
  const [message, setMessage] = useState(""); // state message - string

  /**
   * Function getting all data input form contact form
   * @param {string} value
   * @param {string} key
   */
  const getDataInput = (value, key) => {
    const newDataIput = dataMail;
    newDataIput[key] = value;
    setDataMail(newDataIput);
  };

  const manageErrorMessage = (errorMessage) => {
    if (errorMessage.includes("pattern:")) {
      setMessage("caracteres speciaux non autorisés");
    } else if (
      errorMessage.includes(
        "length must be less than or equal to 100 characters long"
      )
    ) {
      setMessage("nom et prénom ne doivent pas dépasser 100 caractères");
    } else if (
      errorMessage.includes("empty") ||
      errorMessage.includes("is required")
    ) {
      setMessage("tous les champs doivent être remplis");
    } else if (
      errorMessage.includes("length must be at least 20 characters long")
    ) {
      setMessage("le message doit faire au moins 20 caractères de long");
    } else {
      setMessage("désolé, il y a eu une erreur lors de l'envois du message");
    }
  };

  const runSendEmail = (e) => {
    e.preventDefault();
    sendEmail(dataMail)
      .then(() => {
        setMessage("merci pour votre message!");
        setDataMail({});
        document.getElementById("name").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("object").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch((err) => {
        const error = err.response.data.validationError[0].message;
        console.log(error);
        manageErrorMessage(error);
      });
  };

  return (
    <div className="container-contact">
      <div className="contact" id="contact">
        <h2>Contactez moi</h2>
        <FadeIn>
          <p className="phrase-contactez-moi">
            N'hésitez pas à me contacter, je me ferais un plaisir d'échanger
            avec vous
          </p>
        </FadeIn>
        <FadeIn>
          <form onSubmit={(e) => runSendEmail(e)}>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Votre nom"
                id="name"
                name="name"
                onChange={(e) => getDataInput(e.target.value, "name")}
              />
            </label>
            <label htmlFor="firstname">
              <input
                type="text"
                placeholder="Votre prénom"
                id="firstname"
                name="firstname"
                onChange={(e) => getDataInput(e.target.value, "firstname")}
              />
            </label>
            <label htmlFor="object">
              <input
                type="text"
                placeholder="objet"
                id="object"
                name="object"
                onChange={(e) => getDataInput(e.target.value, "subject")}
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Votre email"
                onChange={(e) => getDataInput(e.target.value, "email")}
              />
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                placeholder="Votre message"
                onChange={(e) => getDataInput(e.target.value, "message")}
              />
            </label>
            <button type="submit">Envoyer</button>
          </form>
        </FadeIn>
        <FadeIn>
          <p className="mail">
            <i className="far fa-envelope"></i>
            <span>vgeloen@gmail.com</span>
          </p>
          <p className="github">
            <i className="fab fa-github"></i>
            <span>
              <a href="https://github.com/Vianney-Gln">
                https://github.com/Vianney-Gln
              </a>
            </span>
          </p>
          <p className="linkedin">
            <i className="fab fa-linkedin"></i>
            <span>
              <a href="https://www.linkedin.com/in/vianneygeloen/">Linkedin</a>
            </span>
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
