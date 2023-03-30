import React, { useState } from "react";
import CircleCharts from "./CircleCharts";
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
function MypageCharts({ statistics }: Props) {
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <div className={styles.Background}>
      <div className={styles.UpperGroup}>
        <CircleCharts
          value={Number(statistics.schoolCategoryProgress)}
          name={language === "CN" ? "在家里" : language === "VI" ? "ở nhà" : "집에서"}
        />
        <CircleCharts
          value={Number(statistics.homeCategoryProgress)}
          name={language === "CN" ? "在学校" : language === "VI" ? "Ở trường" : "학교에서"}
        />
        <CircleCharts
          value={Number(statistics.storeCategoryProgress)}
          name={language === "CN"
            ? "学习"
            : language === "VI"
              ? "tại cửa hàng"
              : "가게에서"}
        />
        <CircleCharts
          value={Number(statistics.playgroundCategoryProgress)}
          name={language === "CN"
            ? "在操场上"
            : language === "VI"
              ? "tại sân chơi"
              : "놀이터에서"}
        />
      </div>
      <div className={styles.DownGroup}>
        <CircleCharts
          value={Number(statistics.scriptProgress)}
          name={language === "CN"
            ? "对话练习"
            : language === "VI"
              ? "luyện tập đối thoại"
              : "대화 연습"}
        />
        <CircleCharts
          value={Number(statistics.quizProgress)}
          name={language === "CN"
            ? "单词练习"
            : language === "VI"
              ? "luyện tập từ vựng"
              : "단어 연습"}
        />
        <CircleCharts
          value={Number(statistics.cultureProgress)}
          name={language === "CN"
            ? "文化影像"
            : language === "VI"
              ? "Video văn hóa"
              : "문화 영상"}
        />
      </div>
    </div>
  );
}

export default MypageCharts;
