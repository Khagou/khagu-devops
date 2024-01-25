import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");

  const handleSend = async () => {
    setSent(true);
    try {
      await axios.post("/send_mail", {
        nom,
        prenom,
        text,
        mail,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="FormContact">
      <h4>Contact</h4>
      {!sent ? (
        <form className="form-contact" onSubmit={handleSend}>
          <div className="divNom">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              data-testid="nom-input"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="divPrenom">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              data-testid="prenom-input"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Entrez votre prénom"
            />
          </div>
          <div className="divEmail">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              data-testid="email-input"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Entrez votre adresse email"
            />
          </div>
          <div className="divMessage">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Entrez votre message"
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button type="submit"> Envoyer</button>
        </form>
      ) : (
        <div className="sent">
          <h5>Email Envoyé</h5>
          <p>
            Merci pour votre message, un retour vous sera fait dès que possible.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
