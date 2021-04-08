import React, {useContext} from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContext";

function AboutUs() {
    const {test} = useContext(LanguageContext);
    return (
        <div className="page-container">
            <p>{test}</p>
            {test && console.log(test)}
            <h2>{content.nl.aboutUs.title}</h2>
            <p>Dit is je profielpagina!</p>
            <img src={writers} alt="Bob & Betsy"/>
            <p>{content.nl.aboutUs.writers}</p>
        </div>
    );
}

export default AboutUs;
