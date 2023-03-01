import React from 'react';
import './Distribution.css';
import delivery from '../images/delivery.png';
import partners from '../images/partners.png';
import products from '../images/products.png';

function Cooperation() {
    return (
        <>
            <div className='distribution-container'>
                <div className='distribution-card'>
                    <img src={partners} alt='partners' />
                    <span>POSTANITE NAŠ PARTNER</span>
                </div>
                <div className='distribution-card'>
                    <img src={products} alt='products' />
                    <span>NAŠI PROIZVODI</span>
                </div>
                <div className='distribution-card'>
                    <img src={delivery} alt='delivery' />
                    <span>UVOZ IZ MAĐARSKE</span>
                </div>
            </div>
        </>
    );
};

export default Cooperation;
