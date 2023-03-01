import React from 'react';
import './Footer.css';
import logo from '../images/footerLogo.png';
import background from '../images/footerImg.png';

function Footer() {
    return (
        <>
            <div className='container' style={{ 'backgroundImage': `url(${background})`}}>
                <div className='content'>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                    <div className='contact'>
                        <div className='contact-elements'>
                            <h1>D.V.G. COMPANY</h1>
                            <div className='contact-element'>
                                <i class="fa-solid fa-location-dot"></i>
                                <a href='http://maps.google.com/?q=Čantavirski put bb 24000 Subotica, Srbija'>Čantavirski put bb 24000 Subotica, Srbija</a>
                            </div>
                            <div className='contact-element'>
                                <i class="fa-solid fa-phone"></i>
                                <a href='tel:+38124568555'>+381 24 568 555</a>
                            </div>
                            <div className='contact-element'>
                                <i class="fa-regular fa-envelope"></i>
                                <a href='mailto:office@dvgcompany.com'>office@dvgcompany.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='links'>
                        <a href='/'>O NAMA</a>
                        <a href='/'>DVG PROIZVODI</a>
                        <a href='/'>BRENDOVI</a>
                        <a href='/'>DISTRIBUCIJA</a>
                        <a href='/'>SARADNJA</a>
                        <a href='/'>NOVOSTI</a>
                        <a href='/'>KONTAKT</a>
                    </div>
                    <div className='socials'>
                        <span>Pratite nas:</span>
                        <div className='social-icons'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-facebook-messenger"></i>
                        </div>
                    </div>
                </div>
                <div className='copyright-content'>
                <span>Copyright 2021 DVG Company, Subotica d.o.o. Sva prava zadrzana.</span>
                <a href='/'>Privatnost podatka</a>
                <a href='/'>Uslovi korišćenja</a>
                <span>Powered by: <a href='/'>StudioPresent</a></span>
            </div>
            </div>
        </>
    );
};

export default Footer;