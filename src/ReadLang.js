import React, { useContext } from 'react'
import LanguageContext from './context'

const ReadLang = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h1>
        {`Current language is ${language}`}
      </h1>
    </div>
  );
};

export default ReadLang;
