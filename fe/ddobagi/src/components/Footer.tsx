import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";

function Footer() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
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
    navigate("/parentpage/record");
  };
  const navigateToMyPage = () => {
    navigate("/mypage");
  };
  return (
    <div className={styles.Full}>
      <div className={styles.vertical}>
        <div className={styles.vertical2}>
          <div className={styles.router} onClick={navigateToHome}>
            {language === "CN"
              ? "首页"
              : language === "VI"
                ? "trang chủ"
                : "홈"}        </div>
          <div className={styles.router} onClick={navigateToCategory}>
            {language === "CN"
              ? "学习"
              : language === "VI"
                ? "học hỏi"
                : "한국어 연습"}        </div>
          <div className={styles.router} onClick={navigateToCulture}>
            {language === "CN"
              ? "韩国文化"
              : language === "VI"
                ? "văn hoá"
                : "한국 문화"}        </div>
          <div className={styles.router} onClick={navigateToMyPage}>
            {language === "CN"
              ? "我的简历"
              : language === "VI"
                ? "Thông tin của tôi"
                : "내 정보"}        </div>
          <div className={styles.router} onClick={navigateToParents}>
            {language === "CN"
              ? "监护人"
              : language === "VI"
                ? "người giám hộ"
                : "보호자"}
          </div>
        </div>
        <div className={styles.vertical3}>
          <FacebookIcon className={styles.icon} sx={{ fontSize: "3rem" }} />
          <TwitterIcon className={styles.icon} sx={{ fontSize: "3rem" }} />
          <GitHubIcon className={styles.icon} sx={{ fontSize: "3rem" }} />
        </div>
      </div>

      <div className={styles.vertical}>
        <div>© 2023 A608 create. All rights reserved. </div>
        <div className={styles.vertical}>
          <div>
            {language === "CN"
              ? "个人信息保护政策"
              : language === "VI"
                ? "Chính sách bảo vệ thông tin cá nhân"
                : "개인정보 보호정책"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
