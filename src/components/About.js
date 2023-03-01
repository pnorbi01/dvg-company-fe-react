import React from 'react';
import './About.css';
import aboutImg from '../images/dvgCompanyImg.png';
import Button from '@mui/material/Button';

function About() {
    return (
        <>
            <div className='about-container'>
                <div className='about-image'>
                    <img src={aboutImg} alt='about-us' width='100%' height='550' />
                </div>
                <div className='about-description'>
                    <h1 className="companyName">DVG Company</h1>
                    <h2 className="profession">Veleprodaja i maloprodaja kozmetike i kucne hemije</h2>
                    <h5 className="description">DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Sobitici.
                        Prevenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u
                        privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne
                        prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja,
                        čuvanja i plasiranja robe.</h5>
                        <Button variant="contained" color="error" className='about-btn'>Saznajte više o nama</Button>
                </div>
            </div>
        </>
    );
};

export default About;