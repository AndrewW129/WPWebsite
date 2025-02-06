import React from "react";
import { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [showLogo, setShowLogo] = useState(true);

  const listenWindowFooter = () => {
    if (window.innerWidth <= 960) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  };

  useEffect(() => {
    listenWindowFooter();
  }, []);

  window.addEventListener("resize", listenWindowFooter);

  return (
    <div class="footer-container">
      <p class="phone-number">919 - 999 - 9999</p>
      {showLogo && (
        <img class="footer-logo" src="no_bg_logo.png" alt="Logo" />
      )}
      <p class="email">wporaleigh@gmail.com</p>
    </div>
  );
}

export default Footer;
