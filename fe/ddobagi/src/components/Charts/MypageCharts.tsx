import React, { useState } from "react";
import CircleCharts from "./CircleCharts";
import styles from "./Charts.module.scss";

function MypageCharts() {
  return (
    <div className={styles.Background}>
      <div className={styles.UpperGroup}>
        <CircleCharts value={10} name="집에서" />
        <CircleCharts value={40} name="학교에서" />
        <CircleCharts value={30} name="가게에서" />
        <CircleCharts value={60} name="놀이터에서" />
      </div>
      <div className={styles.DownGroup}>
        <CircleCharts value={70} name="대화 연습" />
        <CircleCharts value={80} name="단어 연습" />
        <CircleCharts value={90} name="문화 영상" />
      </div>
    </div>
  );
}

export default MypageCharts;
