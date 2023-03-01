import React from 'react';
import './Parallax.css';

const Parallax = () => {
    const prallaxImage = [
        "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    return (
        <>
            <div className='parallax-container' style={{ 'backgroundImage': `url(${prallaxImage[0]})` }}>
                <div className='parallax-content'>
                    <span>POUZDANA DISTRIBUCIJA</span>
                </div>
            </div>
        </>
    );
};

export default Parallax;
