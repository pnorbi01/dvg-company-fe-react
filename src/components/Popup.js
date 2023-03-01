import React from 'react';
import './Popup.css';

function Popup() {
    window.addEventListener("load", function() {

        const body= document.querySelector("body");
    
        setTimeout (
            function open(event) {
                document.querySelector(".popup").style.display = "block";
                body.style.overflow="hidden";
            },
            1000
        )
    })

    function closePopup() {
        
        const body= document.querySelector("body");
    
        document.querySelector(".popup").style.display = "none";
        body.style.overflow="auto";
    }

    return (
        <>
        <div className="popup">
            <div className="content">
                <span>Dobrodošli na DVG Company sajt! Prihvatite sve kolačiće da biste nastavili da surfujete na sajtu.</span>
                <a onClick={closePopup}><i class="fa-solid fa-check"></i></a>
            </div>
        </div>
        </>
    );
};

export default Popup;