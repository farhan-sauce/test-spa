import React from 'react'
import ReadLang from '../ReadLang';
import ChangeLang from '../ChangeLang';

const About = () => {
  return (
    <div>
      <h4 id="about">
        User is LoggedIn
      </h4>
      <ChangeLang />
      <ReadLang />
    </div>
  );
};

export default About;
