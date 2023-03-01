import React from 'react';
import './Cooperation.css';
import CooperationJSON from '../json/cooperation.json';
import CooperationImage from '../images/statistic.png';

function Cooperation() {
    return (
        <>
        <div className='cooperation-description'>
            <h1>DVG Company</h1>
            <span>u brojkama</span>
        </div>
        <div className='cooperation-container' style={{ 'backgroundImage': `url(${CooperationImage})`}}>
            <div className='cooperation-element'>
                {
                    CooperationJSON && CooperationJSON.map(element => {
                        return (
                            <div className='cooperation-element-content'>
                                <h1>{element.cooperationNumber}</h1>
                                <span>{element.cooperationTitle}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    );
};

export default Cooperation;