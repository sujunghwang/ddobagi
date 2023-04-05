import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";
import image51 from "../../assets/랜딩51.png";
import image52 from "../../assets/랜딩52.png";
import image53 from "../../assets/랜딩53.png";
// import './Main.css';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Landing51Animation from "../animations/Landing51";
import Landing52Animation from "../animations/Landing52";
import Landing53Animation from "../animations/Landing53";

export default function MainFive() {
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
                    ? "父母也在一起吧"
                    : language === "VI"
                    ? "Ba mẹ cũng ở bên cạnh nữa"
                    : "부모님도 함께 해요"}
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
                    ? "可以确认孩子学习的内容,掌握学习进行到什么程度。"
                    : language === "VI"
                    ? "Tôi có thể kiểm tra nội dung học tập của trẻ và nắm bắt được mức độ học tập đã được tiến hành."
                    : "아이가 배우는 내용을 확인하고, 어느 정도 학습이 진행되었는지 파악할 수 있어요."}
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
              {/* <img src={image51} alt="landing4" width="300px" height="300px" /> */}
              <Landing51Animation />
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
                {language === "CN"
                    ? "提供学习结果统计"
                    : language === "VI"
                    ? "Cung cấp số liệu thống kê kết quả học tập"
                    : "학습 결과 통계를 제공해요"}
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
              {/* <img
                src={image52}
                alt="landing5"
                width="240px"
                height="160px"
                style={{ marginTop: "4rem" }}
              /> */}
              <Landing52Animation />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {language === "CN" && (
                  <>
                    提供多文化中心的位置信息
                  </>
                )}
                {language === "VI" && (
                  <>
                    Cung cấp thông tin vị trí của trung tâm đa văn hóa
                  </>
                )}
                {language !== "CN" && language !== "VI" && (
                  <>
                    다문화 센터의 <div>위치 정보를 제공해요</div>
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
                src={image53}
                alt="landing6"
                width="210px"
                height="210px"
                style={{ marginTop: "3rem" }}
              /> */}
              <Landing53Animation />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {language === "CN" && (
                  <>
                    传达多文化家庭相关报道和政策
                  </>
                )}
                {language === "VI" && (
                  <>
                    Truyền tải những bài báo và chính sách liên quan đến các gia đình đa văn hóa
                  </>
                )}
                {language !== "CN" && language !== "VI" && (
                  <>
                    다문화 가정 관련 <div>기사와 정책을 전달해요</div>
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
