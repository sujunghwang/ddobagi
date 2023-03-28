import React, { useState } from "react";
import styles from "./Charts.module.scss";

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
  return (
    <div className={styles.Background2}>
      <div className={styles.LogGroup}>
        <div>본 영상</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_1.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.viewedVideoCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>녹음한 문장</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_2.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.recordedScriptCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>공부한 단어</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_3.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.studiedQuizCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>모은 왕관</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_4.png"} alt="icon_1" className={styles.icon} />
          <div> x {statistics.viewedVideoCount}</div>
        </div>
      </div>
    </div>
  );
}

export default UserLog;
