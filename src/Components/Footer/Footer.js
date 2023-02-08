import React from "react";
import { FaHeart, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import wapp from "./whatsapp (10).png";
import "./Footer.css";

const Footer = () => (
  <footer
    className="footer"
    style={{ position: "fixed", bottom: 0, width: "100%" }}
  >
    <div className="footer__social">
      <a href="https://www.linkedin.com/in/agustinamonzon/" target="_blank">
        <FaLinkedin size="40" color="#0077B5" />
      </a>
      <a href="https://github.com/AgustinaMonzon" target="_blank">
        <FaGithub size="40" color="#000000" />
      </a>
      <a href="mailto: agusdlmonzon@gmail.com" target="_blank">
        <FaEnvelope size="40" color="#DB4437" />
      </a>
      <a href="https://twitter.com/Agustin89354668" target="_blank">
        <FaTwitter size="40" color="#657786)" />
      </a>
      <a href="https://join.skype.com/invite/ecJhEJy8s4bY" target="_blank">
        <FaSkype size="40" color="#00AFF0" />
      </a>
      {/* <a
        href="https://wa.link/8daidi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img" src={wapp} />
      </a> */}
    </div>
    {/* <p className="footer__copyright">
      Seguime en mis redes <FaHeart color="#B51942" /> para conocerme.
    </p> */}
  </footer>
);

export default Footer;
