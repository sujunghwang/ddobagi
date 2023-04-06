import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";
import support from "../../assets/support.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Landing4Animation from "../animations/Landing4";

export default function MainFour() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#84D88F",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginTop: "100px" }}>
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
                    ? "为多文化家庭提供多种信息"
                    : language === "VI"
                    ? "Cung cấp nhiều thông tin đa dạng cho các gia đình đa văn hóa"
                    : "다문화 가정을 위한 다양한 정보 제공"}
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Landing4Animation />
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
                    ? "不仅提供孩子的学习信息,还提供多文化中心位置或相关政策等有用的信息。"
                    : language === "VI"
                    ? "Không chỉ cung cấp thông tin học tập cho trẻ mà còn cung cấp thông tin hữu ích như vị trí trung tâm đa văn hóa và chính sách liên quan."
                    : "아이의 학습 정보 뿐만 아니라, 다문화 센터 위치나 관련 정책 등 유용한 정보를 제공해 드려요."}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
