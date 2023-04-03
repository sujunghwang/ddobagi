import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/RootReducer';
import { changeLanguageBy } from '../redux/LanguageSelector';
import SelectLanguage from '../components/SelectLanguage';

function LanguageSelectorContainer() {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const language = useSelector((state: RootState) => state.languageChange.language)
  const dispatch = useDispatch() // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onChangeLanguageBy = (language:string) => {
    dispatch(changeLanguageBy(language))
  }


  return (
    <SelectLanguage
      language={language}
      changeLanguageBy={onChangeLanguageBy}
    />
  );
};

export default LanguageSelectorContainer;