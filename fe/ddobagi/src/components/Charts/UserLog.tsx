import React, { useState } from "react";
import styles from "./Charts.module.scss";

interface Props {
  data: {
    viewedVideoCount: string;
    recoredScriptCount: string;
    studiedQuizCount: string;
    schoolCategoryProgress: string;
    homeCategoryProgress: string;
    storeCategoryProgress: string;
    playgroundCategoryProgress: string;
    scriptProgress: string;
    quizProgress: string;
    cultureProgress: string;
  }
}

function UserLog({ data }: Props) {
  return (
    <div className={styles.Background2}>
      <div className={styles.LogGroup}>
        <div>본 영상</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_1.png"} alt="icon_1" className={styles.icon} />
          <div> x {data.viewedVideoCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>녹음한 문장</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_2.png"} alt="icon_1" className={styles.icon} />
          <div> x {data.recoredScriptCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>공부한 단어</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_3.png"} alt="icon_1" className={styles.icon} />
          <div> x {data.studiedQuizCount}</div>
        </div>
      </div>
      <div className={styles.LogGroup}>
        <div>모은 왕관</div>
        <div className={styles.iconGroup}>
          <img src={"/icon/icon_4.png"} alt="icon_1" className={styles.icon} />
          <div> x {data.viewedVideoCount}</div>
        </div>
      </div>
    </div>
  );
}

export default UserLog;
