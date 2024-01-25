import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full py-20 border">
      <div className="container">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-center">
          Contato
        </h2>
        <ContactForm />
        <p className="text-center my-6 text-muted-foreground">
          ( Em Desenvolvimento... )
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
