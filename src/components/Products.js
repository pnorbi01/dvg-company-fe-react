import React from 'react';
import './Products.css';
import CardSlider from './CardSlider';

function Products() {
    return (
        <>
            <div className='products-container'>
                <div className='products-description'>
                    <h2>Naši proizvodi</h2>
                    <span>Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica i tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i naši kupci.</span>
                </div>
            </div>
                <CardSlider />
        </>
    );
};

export default Products;