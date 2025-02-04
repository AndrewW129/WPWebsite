import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);  // Change to false to hide Sign Up button
  const [logo, setLogo] = useState(true); 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
        setLogo(false);
    } else {
        setButton(true);
        setLogo(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            {logo && <img className='navbar-logo' src='no_bg_logo.png' alt='Logo' />}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>   
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
            </li>
            <li className='nav-item'>
                <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
            </li>
            <li className='nav-item'>
                <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About Us</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Make Payment</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar