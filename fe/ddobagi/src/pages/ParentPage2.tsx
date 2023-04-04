import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import ParentHeader from "../assets/ParentHeader.png";
// import CenterBackground from "../assets/CenterBackground.png"
import "../components/ParentPage/ParentPage2.css";
import SidoSelect from "../components/ParentPage/SelectBox/sidoSelect";
import SigoonSelect from "../components/ParentPage/SelectBox/sigoonSelect";
// import CenterFields from '../components/ParentPage/SelectBox/CenterField';
// import styles2 from "../components/ParentPage/SelectBox/BoxStyle.module.scss";
// import studyBtn from '../components/ParentPage/studyBtn';
import SearchBtn from "../components/ParentPage/SelectBox/SearchBtn";
import CenterMap from "../components/Map/CenterMap";
import ChartAnimation from "../components/animations/ParentChart";
import MapAnimation from "../components/animations/Map";
import NewsAnimation from "../components/animations/News";
import SupportAnimation from "../components/animations/Support";

// interface StudyButtonProps {
//   studyBtn: string;
// }

function ParentPage2() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //
  // 탭 선택 함수
  const navigate = useNavigate();
  const navigateToParent1 = () => {
    navigate("/parentpage/record");
  };
  const navigateToParent2 = () => {
    navigate("/parentpage/map");
  };
  const navigateToParent3 = () => {
    navigate("/parentpage/news");
  };
  const navigateToParent4 = () => {
    navigate("/parentpage/support");
  };
  // 탭 선택 함수 끝
  return (
    <div className={styles.Fcontainer}>
      <div className={styles.Banner}>
        <div className={styles.Header}>
          {language === "CN"
            ? "父母亲"
            : language === "VI"
            ? "Trang của bố mẹ"
            : "보호자 페이지"}
        </div>
      </div>
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <Box
        className={styles.BtnBoxes}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box // 버튼들 담을 박스
          sx={{
            display: "grid",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box
                className={styles.BtnBox}
                sx={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#FFDADA",
                  margin: "30px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigateToParent1();
                }}
              >
                <Box
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <ChartAnimation />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "MaplestoryOTFLight",
                    userSelect: "none",
                  }}
                >
                  {language === "CN"
                    ? "子女学习记录"
                    : language === "VI"
                    ? "hồ sơ con cái"
                    : "자녀 학습 기록"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                className={styles.BtnBox}
                sx={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#FFF5D7",
                  margin: "30px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  borderBottom: "5px solid orange",
                }}
                onClick={() => {
                  navigateToParent2();
                }}
              >
                <Box
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <MapAnimation />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "MaplestoryOTFLight",
                    userSelect: "none",
                  }}
                >
                  {language === "CN"
                    ? "多元文化中心位置"
                    : language === "VI"
                    ? "vị trí trung tâm đa văn hóa"
                    : "다문화 센터 위치"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                className={styles.BtnBox}
                sx={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#DCFFE0",
                  margin: "30px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigateToParent3();
                }}
              >
                <Box
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <NewsAnimation />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "MaplestoryOTFLight",
                    userSelect: "none",
                  }}
                >
                  {language === "CN"
                    ? "多文化新闻"
                    : language === "VI"
                    ? "tin tức đa văn hóa"
                    : "다문화 뉴스"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                className={styles.BtnBox}
                sx={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#D8E8FF",
                  margin: "30px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigateToParent4();
                }}
              >
                <Box
                  sx={{
                    margin: "10px",
                    paddingLeft: "30px",
                  }}
                >
                  <SupportAnimation />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "MaplestoryOTFLight",
                    userSelect: "none",
                  }}
                >
                  {language === "CN"
                    ? "多文化支援消息"
                    : language === "VI"
                    ? "tin tức hỗ trợ đa văn hóa"
                    : "다문화 지원 소식"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        className={styles.MainBox}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "1400px",
            height: "900px",
            backgroundColor: "#A3C9FF",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "MaplestoryOTFLight",
              color: "#ffffff",
              marginTop: "20px",
            }}
          >
            {language === "CN"
              ? "多元文化中心位置"
              : language === "VI"
              ? "vị trí trung tâm đa văn hóa"
              : "다문화 센터 위치 및 정보"}
          </Typography>
          <div // 다문화센터 위치 내용 들어갈 부분
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "#FFF6DA",
              marginTop: "30px",
              borderRadius: "0 0 20px 20px",
              // boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
            }}
          >
            <Box
              sx={{
                width: "80%",
                marginLeft: "10%",
                paddingTop: "20px",
                paddingBottom: "30px",
              }}
            >
              <Typography
                sx={{ fontSize: "25px", fontFamily: "MaplestoryOTFLight" }}
              >
                {language === "CN"
                  ? "选择市/道及区/郡,可以获得多元文化中心及家庭中心的位置信息。"
                  : language === "VI"
                  ? "Nếu bạn chọn tỉnh/thành phố và quận/huyện, bạn có thể nhận được thông tin vị trí của trung tâm đa văn hóa và trung tâm gia đình."
                  : "시/도 및 구/군을 선택하시면 다문화 센터 및 가족 센터의 위치 정보를 얻으실 수 있습니다."}
                {/* 시/도 및 구/군을 선택하시면 다문화 센터 및 가족 센터의 위치 정보를 얻으실 수 있습니다 */}
              </Typography>
              <CenterMap />
            </Box>
            {/* <Button
              onClick={() => {
                navigateToParent4();
              }}>
              여기요 맵으로 이동 뾰로롱
            </Button> */}
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default ParentPage2;
