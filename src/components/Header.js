import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Header.css';
import headerLogo from '../images/logo.png';

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1200) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  function darkmodeFunction() {
    const about = document.querySelector(".about-container");
    const cooperation = document.querySelector(".cooperation-description");
    const distribution = document.querySelector(".distribution-container");
    const brand = document.querySelector(".brand-container");
    const header = document.querySelector(".navbar");
    const navigation = document.querySelector(".navigation");
    const product = document.querySelector(".products-container");
    const slider = document.querySelector(".CardSlider");
    const popup = document.querySelector(".popup");
    
    about.classList.toggle("dark-mode");
    cooperation.classList.toggle("dark-mode");
    distribution.classList.toggle("dark-mode");
    brand.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    navigation.classList.toggle("dark-mode");
    product.classList.toggle("dark-mode");
    slider.classList.toggle("dark-mode");
    popup.classList.toggle("light-mode");

  }


  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={headerLogo} alt='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                O NAMA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                DVG PROIZVODI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BRENDOVI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                DISTRIBUCIJA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SARADNJA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                NOVOSTI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                KONTAKT
              </Link>
            </li>
            <ul className='dropdown-language-selector'>
              <li>Magyar</li>
              <li>Srpski</li>
              <li>English</li>
            </ul>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={() => {
                  closeMobileMenu();
                  darkmodeFunction();
                }}
              >
                DARK MODE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={darkmodeFunction}>DARK MODE</Button>}
          <ul className='language-menu'>
            <li className='language-item'>
                <span>Srpski</span>
                <span>Magyar</span>
                <span>English</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;