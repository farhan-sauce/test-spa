import React, { useContext } from 'react'
import LanguageContext from './context'

const ChangeLang = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>{`selected language is ${language}`}</p>
      <button onClick={() => setLanguage("de")}>
        Set de language
      </button>
      <button onClick={() => setLanguage("en")}>
        Set en language
      </button>
      <button onClick={() => setLanguage("es")}>
        Set es language
      </button>
    </div>
  );
};

export default ChangeLang;
