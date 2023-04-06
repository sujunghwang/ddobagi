import React, { useState } from "react";
import styles from "./Charts.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Typography from "@mui/material/Typography";

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
      <div className={styles.title}>
        {language === "CN"
          ? "活动履历"
          : language === "VI"
          ? "lịch sử hoạt động"
          : "활동 내역"}
      </div>
      <hr className={styles.hr} />

      <div className={styles.RowGroup}>
        <div className={styles.SubGroup}>
          <div className={styles.LogGroup}>
            <div>
              {language === "CN"
                ? "观看过的视频"
                : language === "VI"
                ? "Lượt truy cập video"
                : "본 영상"}
            </div>
            <div className={styles.iconGroup}>
              <img
                src={"/img/icon_1.png"}
                alt="icon_1"
                className={styles.icon}
              />
              <Typography
                sx={{
                  whiteSpace: "pre",
                  fontSize: "2.5rem",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {" "}
                x {statistics.viewedVideoCount}
              </Typography>
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
              <img
                src={"/img/icon_2.png"}
                alt="icon_1"
                className={styles.icon}
              />
              <Typography
                sx={{
                  whiteSpace: "pre",
                  fontSize: "2.5rem",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {" "}
                x {statistics.studiedQuizCount}
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.SubGroup}>
          <div className={styles.LogGroup}>
            <div>
              {language === "CN"
                ? "学过的字"
                : language === "VI"
                ? "chữ đã học"
                : "공부한 단어"}
            </div>
            <div className={styles.iconGroup}>
              <img
                src={"/img/icon_3.png"}
                alt="icon_1"
                className={styles.icon}
              />
              <Typography
                sx={{
                  whiteSpace: "pre",
                  fontSize: "2.5rem",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {" "}
                x {statistics.recordedScriptCount}{" "}
              </Typography>
            </div>
          </div>
          <div className={styles.LogGroup}>
            <div>
              {language === "CN"
                ? "正确答案数"
                : language === "VI"
                ? "bộ sưu tập tem"
                : "모은 도장"}
            </div>
            <div className={styles.iconGroup}>
              <img
                src={"/img/icon_4.png"}
                alt="icon_1"
                className={styles.icon}
              />
              <Typography
                sx={{
                  whiteSpace: "pre",
                  fontSize: "2.5rem",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {" "}
                x {statistics.viewedVideoCount}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLog;
