import React, { useState } from "react";
import styles from "./Charts.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
interface Props {
  statistics: {
    viewedVideoCount: number;
    recordedScriptCount: number;
    studiedQuizCount: number;
    crownCount: number;
    schoolCategoryProgress: number;
    homeCategoryProgress: number;
    storeCategoryProgress: number;
    playgroundCategoryProgress: number;
    scriptProgress: number;
    quizProgress: number;
    cultureProgress: number;
  };
}

function UserLog({ statistics }: Props) {
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <div className={styles.Background2}>
      <div className={styles.LogGroup}>
        <div>
          {language === "CN"
            ? "观看过的视频"
            : language === "VI"
              ? "Lượt truy cập video"
              : "본 영상"}
        </div>
        <div className={styles.iconGroup}>
          <img src={"/img/icon_1.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.viewedVideoCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>
          {language === "CN"
            ? "录音次数"
            : language === "VI"
              ? "số lần thu âm"
              : "녹음한 문장"}
        </div>
        <div className={styles.iconGroup}>
          <img src={"/img/icon_2.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.recordedScriptCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>    {language === "CN"
          ? "学过的字"
          : language === "VI"
            ? "chữ đã học"
            : "공부한 단어"}</div>
        <div className={styles.iconGroup}>
          <img src={"/img/icon_3.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.studiedQuizCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>
          {language === "CN"
            ? "正确答案数"
            : language === "VI"
              ? "trả lời đúng tất cả các câu hỏi"
              : "모은 도장"}
        </div>
        <div className={styles.iconGroup}>
          <img src={"/img/icon_4.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.viewedVideoCount}</div>
        </div>
      </div>
    </div>
  );
}

export default UserLog;