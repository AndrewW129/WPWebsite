import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [logoClassName, setLogoClassName] = useState(true);
  const [navLinkClassName, setNavLinkClassName] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const logoClass = logoClassName ? "navbar-logo-web" : "navbar-logo-mobile";
  const navLinkClass = navLinkClassName ? "nav-item" : "nav-item-mobile";

  const listenWindow = () => {
    if (window.innerWidth <= 960) {
      // setButton(false);
      setLogoClassName(false);
      setNavLinkClassName(false);
    } else {
      // setButton(true);
      setLogoClassName(true);
      setNavLinkClassName(true);
    }
  };

  useEffect(() => {
    listenWindow();
  }, []);

  window.addEventListener("resize", listenWindow);

  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <Link to="/">
            <img class={logoClass} src="no_bg_logo.png" alt="Logo" />
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class={navLinkClass}>
              <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class={navLinkClass}>
              <Link to="/about" class="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li class={navLinkClass}>
              <Link to="/gallery" class="nav-links" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li class={navLinkClass}>
              <Link to="/contact" class="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li class={navLinkClass}>
              <Link
                to="/Testimonials"
                class="nav-links"
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Make Payment</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
