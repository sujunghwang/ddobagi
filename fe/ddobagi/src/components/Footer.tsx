import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  // 네비게이션을 위한 함수들
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToCategory = () => {
    navigate("/CategoryList");
  };
  const navigateToCulture = () => {
    navigate("/CultureList");
  };
  const navigateToParents = () => {
    navigate("/parentpage");
  };
  const navigateToMyPage = () => {
    navigate("/mypage");
  };
  return (
    <div className={styles.container}>
      <div className={styles.vertical}>
        <img src={"/img/Logo.png"} alt="logo" onClick={navigateToHome} />
        <div className={styles.vertical3}>
          <FacebookIcon className={styles.icon} />
          <TwitterIcon className={styles.icon} />
          <GitHubIcon className={styles.icon} />
        </div>
      </div>
      <hr />
      <div className={styles.vertical2}>
        <div className={styles.router} onClick={navigateToCategory}>
          한국어 연습
        </div>
        <div className={styles.router} onClick={navigateToCulture}>
          한국 문화
        </div>
        <div className={styles.router} onClick={navigateToMyPage}>
          내 정보
        </div>
        <div className={styles.router} onClick={navigateToParents}>
          보호자
        </div>
      </div>
      <div className={styles.vertical}>
        <div>© 2023 A608 create. All rights reserved. </div>
        <div className={styles.vertical}>
          <div>개인정보 보호정책</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
