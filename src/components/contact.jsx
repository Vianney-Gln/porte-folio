import React from "react";
import FadeIn from "../animation/animation";
//style
import "../styles/contact.scss";

const Contact = () => {
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
          <form action="https://formspree.io/f/mpzbavkb" method="post">
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Votre nom"
                id="name"
                name="name"
              />
            </label>
            <label htmlFor="firstname">
              <input
                type="text"
                placeholder="Votre prénom"
                id="firstname"
                name="firstname"
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Votre email"
                required
              />
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                placeholder="Votre message"
                minLength="10"
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
