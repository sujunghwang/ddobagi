import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";
import support from "../../assets/support.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

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
            다문화 가정을 위한 다양한 정보 제공
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <img src={support} alt="support" width="570px" height="420px" />
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
            아이의 학습 정보 뿐만 아니라, 다문화 센터 위치나 관련 정책 등 유용한
            정보를 제공해 드려요.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
