import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="topContact">
        <div className="nav">
          <Navigation />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
