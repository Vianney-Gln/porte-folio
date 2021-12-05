import React from "react";
//style
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contactez moi</h2>
      <p>
        N'hésitez pas à me contacter, je me ferais un plaisir d'échanger avec
        vous
      </p>
      <form action="https://formspree.io/f/mpzbavkb" method="post">
        <label for="name">
          <input type="text" placeholder="votre nom" id="name" name="name" />
        </label>
        <label for="firstname">
          <input
            type="text"
            placeholder="votre prénom"
            id="firstname"
            name="firstname"
          />
        </label>
        <label for="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="votre email"
          />
        </label>
        <label for="message">
          <textarea name="message" id="message" placeholder="votre message" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
