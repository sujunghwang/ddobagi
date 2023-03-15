import React from 'react';

type SelectLanguageProps = {
  language: string;
  changeLanguageBy: (language: string) => void; 
}

function SelectLanguage({
  language, 
  changeLanguageBy
} : SelectLanguageProps) {
  return(
    <div>
      <h1>{language}</h1>
      <div onClick={() => changeLanguageBy('KR')}>한국어</div>
      <div onClick={() => changeLanguageBy('CN')}>中文</div>
      <div onClick={() => changeLanguageBy('VI')}>Tiếng Việt</div>
    </div>
  )
}

export default SelectLanguage