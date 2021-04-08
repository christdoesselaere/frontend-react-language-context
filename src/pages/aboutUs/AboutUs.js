import React, {useContext} from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContext";

function AboutUs() {
    const {activeLanguage} = useContext(LanguageContext);
    return (
        <div className="page-container">
            {activeLanguage && console.log(activeLanguage)}
            <h2>{content.nl.aboutUs.title}</h2>
            <p>Dit is je profielpagina!</p>
            <img src={writers} alt="Bob & Betsy"/>
            <p>{content.nl.aboutUs.writers}</p>
        </div>
    );
}

export default AboutUs;
