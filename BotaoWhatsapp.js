import React from "react";
import "./ComponenteCSS/BotaoWhatsapp.css";

function BotaoWhatsapp() {
  return (
    <a
      href="https://wa.me/message/WDKBKL52CTMFN1"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/assets/img/whatsappLogo.avif" alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
}

export default BotaoWhatsapp;
