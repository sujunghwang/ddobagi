import React, { useState } from "react";
import CircleCharts from "./CircleCharts";
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
function MypageCharts({ data }: Props) {
  return (
    <div className={styles.Background}>
      <div className={styles.UpperGroup}>
        <CircleCharts value={Number(data.schoolCategoryProgress)} name="집에서" />
        <CircleCharts value={Number(data.homeCategoryProgress)} name="학교에서" />
        <CircleCharts value={Number(data.storeCategoryProgress)} name="가게에서" />
        <CircleCharts value={Number(data.playgroundCategoryProgress)} name="놀이터에서" />
      </div>
      <div className={styles.DownGroup}>
        <CircleCharts value={Number(data.scriptProgress)} name="대화 연습" />
        <CircleCharts value={Number(data.quizProgress)} name="단어 연습" />
        <CircleCharts value={Number(data.cultureProgress)} name="문화 영상" />
      </div>
    </div>
  );
}

export default MypageCharts;
