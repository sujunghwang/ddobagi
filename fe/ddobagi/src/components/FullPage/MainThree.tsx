import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";
import image31 from "../../assets/랜딩31.png";
import image32 from "../../assets/랜딩32.png";
import image33 from "../../assets/랜딩33.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Landing31Animation from "../animations/Landing31";
import Landing32Animation from "../animations/Landing32";
import Landing33Animation from "../animations/Landing33";
// import './Main.css';

export default function MainThree() {
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
        backgroundColor: "rgb(255 118 0 / 4%)",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily:
                language === "CN"
                  ? "JingNanMaiYuanTi"
                  : language === "VI"
                  ? "UVNHaiBaTrung"
                  : "MaplestoryOTFLight",
              fontWeight: "bold",
              fontSize: "45px",
              marginBottom: "5px",
            }}
          >
            {language === "CN"
                    ? "清清楚楚地，跟着学吧"
                    : language === "VI"
                    ? "Vừa học theo vừa làm theo"
                    : "또박또박, 따라하며 배워요"}
          </Typography>
          <Typography
            style={{
              fontFamily:
                language === "CN"
                  ? "JingNanMaiYuanTi"
                  : language === "VI"
                  ? "UVNHaiBaTrung"
                  : "MaplestoryOTFLight",
              fontSize: "30px",
              marginBottom: "5px",
            }}
          >
            {language === "CN"
                    ? "通过视频观看、听、跟着说可以在现实生活中直接使用的表达方式。"
                    : language === "VI"
                    ? "Xem video, nghe và nói theo những biểu hiện có thể sử dụng ngay trong cuộc sống thực tế."
                    : "실생활에 바로 활용 가능한 표현들을 영상으로 보고, 듣고 따라 말해요."}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "spaceAround",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FF6B6B",
              width: "360px",
              height: "360px",
              borderRadius: "20px",
              margin: "50px",
              padding: "2rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFDADA",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <img
                src={image31}
                alt="landing1"
                width="240px"
                height="160px"
                style={{ marginTop: "5rem" }}
              /> */}
              <Landing31Animation />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                  marginBottom: "1rem",
                }}
              >
                {language === "CN" && (
                  <>
                    模仿符合情况的台词学习
                  </>
                )}
                {language === "VI" && (
                  <>
                    Học theo lời thoại phù hợp với hoàn cảnh
                  </>
                )}
                {language !== "CN" && language !== "VI" && (
                  <>
                    상황에 맞는 대사를 
                    <div>따라하며 배워요</div>
                  </>
                )}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFD93D",
              width: "360px",
              height: "360px",
              borderRadius: "20px",
              margin: "50px",
              padding: "2rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF5D7",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <img src={image32} alt="landing2" width="240px" height="250px" /> */}
              <Landing32Animation />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                  marginBottom: "1rem",
                }}
              >
                {language === "CN" && (
                  <>
                    从模仿的文章中熟悉单词
                  </>
                )}
                {language === "VI" && (
                  <>
                    Học thuộc từ vựng trong câu đã bắt chước
                  </>
                )}
                {language !== "CN" && language !== "VI" && (
                  <>
                    따라했던 문장에서 <div>단어를 익혀요</div>
                  </>
                )}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#6BCB77",
              width: "360px",
              height: "360px",
              padding: "2rem",
              borderRadius: "20px",
              margin: "50px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF5D7",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <img
                src={image33}
                alt="landing3"
                width="210px"
                height="210px"
                style={{ marginTop: "3rem" }}
              /> */}
              <Landing33Animation />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                  marginBottom: "1rem",
                }}
              >
                {language === "CN" && (
                  <>
                    通过视频观看韩国的文化
                  </>
                )}
                {language === "VI" && (
                  <>
                    Chúng ta hãy xem qua video về văn hóa Hàn Quốc nhé
                  </>
                )}
                {language !== "CN" && language !== "VI" && (
                  <>
                    한국의 문화를 <div>영상으로 봐요</div>
                  </>
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
