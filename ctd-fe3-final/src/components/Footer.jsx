import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "../Styles/footer.css";
import { useGlobalStates } from "./utils/context";
const Footer = () => {
  const {state} = useGlobalStates();
  return (
    <footer className={state.theme ? `footer-color` : ``}>
      <div className={state.theme ? `footer footer-theme` : `footer`}>
        <p>Contactanos a traves de nuestras redes sociales </p>
        <ul>
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
          <FaWhatsapp />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
