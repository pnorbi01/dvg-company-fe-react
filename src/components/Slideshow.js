import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';

const Slideshow = () => {
    const images = [
        "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3907936/pexels-photo-3907936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    return (
        <>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
        </>
    );
};

export default Slideshow;