import React from "react";
import Form from "../components/Form";
import "../Styles/contact.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="contact slide-right">
        <span>
          <h2 className="box-fonts">Contactanos</h2>
          <p className="box-fonts">Envianos tus consultas</p>
        </span>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
