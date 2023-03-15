import React from "react";
import styles from "./NavBar.module.scss"
import SelectLanguage from "../container/LanguageSelectorContainer";

function NavBar() {

  
    
  return (
    <div className={styles.NavBar}>
      <div>로고</div>
      <div className={styles.NavBarMenu}>
        <div>부모님이신가요?</div>
        <div>한국어 연습</div>     
        <div>한국 문화</div>     
        <div>언어 선택</div>     
        <SelectLanguage />
        <div>로그인</div>     
        <div>로그아웃</div>
      </div>     
    </div>
  );
}

export default NavBar;
