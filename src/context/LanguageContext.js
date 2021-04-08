import React, {createContext, useState} from "react";

function LanguageContextProvider({children}) {
    const [language, toggleLanguage] = useState('nl')

    function changeLanguage() {
        toggleLanguage(language === 'nl' ? 'es' : 'nl')
    }

    const data = {
        activeLanguage: language,
        changeLanguageFunction: changeLanguage,
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export const LanguageContext = createContext({});

export default LanguageContextProvider