// import './Main.css';
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";
import talk from "../../assets/4인대화.png";
import styles from "./Two.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Landing2Animation from "../animations/Landing2";

export default function MainTwo() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#FFE69A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Box className={styles.Fadeleft}>
          <Typography
            sx={{
              fontSize: "80px",
              fontFamily:
                language === "CN"
                  ? "JingNanMaiYuanTi"
                  : language === "VI"
                  ? "UVNHaiBaTrung"
                  : "MaplestoryOTFLight",
              color: "#000000",
              marginBottom: "5px",
              whiteSpace: "pre-line",
            }}
          >
            {language === "CN"
                    ? "또바기 是什么样的服务？"
                    : language === "VI"
                    ? "또바기 Là dịch vụ gì vậy?"
                    : "또바기는 어떤 서비스인가요?"}
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Landing2Animation />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "35px",
              fontFamily:
                language === "CN"
                  ? "JingNanMaiYuanTi"
                  : language === "VI"
                  ? "UVNHaiBaTrung"
                  : "MaplestoryOTFLight",
              color: "#000000",
            }}
          >
            {language === "CN"
                    ? "这是帮助多文化家庭孩子们学习韩语的服务。"
                    : language === "VI"
                    ? "Đây là dịch vụ có thể giúp trẻ em trong các gia đình đa văn hóa học tiếng Hàn."
                    : "또바기는 다문화 가정 아이들의 한국어 학습을 도와줄 수 있는 서비스입니다."}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
