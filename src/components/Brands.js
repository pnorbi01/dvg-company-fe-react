import React from 'react';
import './Brands.css';
import dove from '../images/dove.png';
import ajax from '../images/ajax.png';
import cif from '../images/cif.png';
import nivea from '../images/nivea.png';
import vanish from '../images/vanish.png';
import Button from '@mui/material/Button';

function Brands() {
    return (
        <>
            <div className='brand-container'>
                <div className='brand-title'>
                    <h1>Istaknuti brendovi za koje radimo distribuciju</h1>
                </div>
                <div className='brand-elements-container'>
                    <div className='brand-element'>
                        <img src={dove} alt='Dove' />
                        <span>Dove</span>
                    </div>
                    <div className='brand-element'>
                        <img src={ajax} alt='Ajax' />
                        <span>Ajax</span>
                    </div>
                    <div className='brand-element'>
                        <img src={cif} alt='Cif' />
                        <span>Cif</span>
                    </div>
                    <div className='brand-element'>
                        <img src={nivea} alt='Nivea' />
                        <span>Nivea</span>
                    </div>
                    <div className='brand-element'>
                        <img src={vanish} alt='Vanish' />
                        <span>Vanish</span>
                    </div>
                </div>
                <Button variant="contained" color="error" className='brand-btn'>Svi brendovi u našem portfoliju</Button>
            </div>
        </>
    );
};

export default Brands;