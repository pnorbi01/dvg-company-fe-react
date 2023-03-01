import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navigation'>
                <div className='navigation-menu'>
                    <h3>O NAMA</h3>
                    <span>vizija za uspeh</span>
                </div>
                <div className='navigation-menu'>
                    <h3>DVG PROIZVODI</h3>
                    <span>naši proizvodi</span>
                </div>
                <div className='navigation-menu'>
                    <h3>BRENDOVI</h3>
                    <span>koje zasupamo</span>
                </div>
                <div className='navigation-menu'>
                    <h3>DISTRIBUCIJA</h3>
                    <span>logistika i operativa</span>
                </div>
                <div className='navigation-menu'>
                    <h3>SARADNJA</h3>
                    <span>poširenje ponude</span>
                </div>
                <div className='navigation-menu'>
                    <h3>NOVOSTI</h3>
                    <span>aktuelnosti</span>
                </div>
                <div className='navigation-menu'>
                    <h3>KONTAKT</h3>
                    <span>kontaktirajte nas</span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;