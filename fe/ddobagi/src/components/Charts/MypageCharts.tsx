import React, { useState } from "react";
import CircleCharts from "./CircleCharts";
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
function MypageCharts({ statistics }: Props) {
  return (
    <div className={styles.Background}>
      <div className={styles.UpperGroup}>
        <CircleCharts
          value={Number(statistics.schoolCategoryProgress)}
          name="집에서"
        />
        <CircleCharts
          value={Number(statistics.homeCategoryProgress)}
          name="학교에서"
        />
        <CircleCharts
          value={Number(statistics.storeCategoryProgress)}
          name="가게에서"
        />
        <CircleCharts
          value={Number(statistics.playgroundCategoryProgress)}
          name="놀이터에서"
        />
      </div>
      <div className={styles.DownGroup}>
        <CircleCharts
          value={Number(statistics.scriptProgress)}
          name="대화 연습"
        />
        <CircleCharts
          value={Number(statistics.quizProgress)}
          name="단어 연습"
        />
        <CircleCharts
          value={Number(statistics.cultureProgress)}
          name="문화 영상"
        />
      </div>
    </div>
  );
}

export default MypageCharts;
