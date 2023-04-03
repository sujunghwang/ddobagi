import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import { Box, Grid, Typography } from "@mui/material";
import ParentHeader from "../assets/ParentHeader.png";
// import RadialBarChart2 from '../components/Charts/ParentChart2';
// import RadialBarChart3 from '../components/Charts/ParentChart3';
import RadialBarChart from "../components/Charts/ParentChart";
import ChartData from "../components/Charts/ParentChartData.json";
import ColumnChartWithGroupLabel from "../components/Charts/StickChart";
import ChartAnimation from "../components/animations/ParentChart";
import MapAnimation from "../components/animations/Map";
import NewsAnimation from "../components/animations/News";
import SupportAnimation from "../components/animations/Support";

function ParentPage1() {
  //언어 함수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  // 언어 함수 끝
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

  // 임시 차트 데이터
  const chartdata = ChartData;

  // const ColumnChartData = [
  //   { name: "해당 사용자", data: [chartdata.userPronounceScoreAvg, chartdata.userAllProgressAvg] },
  //   { name: "전체 사용자", data: [chartdata.otherPronounceScoreProgress, chartdata.otherAllProgressAvg] },
  // ]

  // const categories = ["발음 평균 점수", "전체 진행도"];

  // const title = "유저 비교 통계";

  let ColumnChartData, categories, title;

  if (language === "CN") {
    ColumnChartData = [
      {
        name: "相关用户",
        data: [chartdata.userPronounceScoreAvg, chartdata.userAllProgressAvg],
      },
      {
        name: "所有用户",
        data: [
          chartdata.otherPronounceScoreProgress,
          chartdata.otherAllProgressAvg,
        ],
      },
    ];
    categories = ["发音平均分数", "整体进度"];
    title = "用户比较统计";
  } else if (language === "VI") {
    ColumnChartData = [
      {
        name: "Người dùng tương ứng",
        data: [chartdata.userPronounceScoreAvg, chartdata.userAllProgressAvg],
      },
      {
        name: "Tất cả người dùng",
        data: [
          chartdata.otherPronounceScoreProgress,
          chartdata.otherAllProgressAvg,
        ],
      },
    ];
    categories = ["Điểm trung bình phát âm", "Tiến độ toàn bộ"];
    title = "So sánh thống kê theo hạng mục";
  } else {
    ColumnChartData = [
      {
        name: "해당 사용자",
        data: [chartdata.userPronounceScoreAvg, chartdata.userAllProgressAvg],
      },
      {
        name: "전체 사용자",
        data: [
          chartdata.otherPronounceScoreProgress,
          chartdata.otherAllProgressAvg,
        ],
      },
    ];
    categories = ["발음 평균 점수", "전체 진행도"];
    title = "유저 비교 통계";
  }

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
                  borderBottom: "5px solid red",
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
            width: "1200px",
            height: "auto",
            backgroundColor: "#FF9999",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "MaplestoryOTFLight",
              color: "#ffffff",
              marginTop: "30px",
            }}
          >
            {language === "CN"
              ? "我子女学习进行率"
              : language === "VI"
              ? "Tiến độ học tập của con tôi"
              : "내 자녀 학습 진행률"}
          </Typography>
          <Box // 자녀 학습 진행률 하단 내용 들어갈 부분
            sx={{
              width: "100%",
              height: "1200px",
              backgroundColor: "#FFDADA",
              marginTop: "30px",
              borderRadius: "0 0 20px 20px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontFamily: "MaplestoryOTFLight",
                }}
              >
                {language === "CN"
                  ? "分类统计"
                  : language === "VI"
                  ? "thống kê theo hạng mục"
                  : "카테고리별 통계"}
              </Typography>
              <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "在家里"
                        : language === "VI"
                        ? "ở nhà"
                        : "집에서"
                    }
                    totalValue={parseInt(chartdata.schoolCategoryProgress)}
                    totalColor="#FF6B6B"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "在学校里"
                        : language === "VI"
                        ? "Ở trường học"
                        : "학교에서"
                    }
                    totalValue={parseInt(chartdata.homeCategoryProgress)}
                    totalColor="#FFD93D"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "在店里"
                        : language === "VI"
                        ? "ở cửa hàng"
                        : "가게에서"
                    }
                    totalValue={parseInt(chartdata.storeCategoryProgress)}
                    totalColor="#6BCB77"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "在游乐场"
                        : language === "VI"
                        ? "ở sân chơi"
                        : "놀이터에서"
                    }
                    totalValue={parseInt(chartdata.playgroundCategoryProgress)}
                    totalColor="#4D96FF"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "对话练习"
                        : language === "VI"
                        ? "luyện tập đối thoại"
                        : "대화 연습"
                    }
                    totalValue={parseInt(chartdata.scriptProgress)}
                    totalColor="#FF6B6B"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "单词练习"
                        : language === "VI"
                        ? "luyện tập từ vựng"
                        : "단어 연습"
                    }
                    totalValue={parseInt(chartdata.quizProgress)}
                    totalColor="#FFD93D"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <RadialBarChart
                    totalLabel={
                      language === "CN"
                        ? "文化影像"
                        : language === "VI"
                        ? "Video văn hóa"
                        : "문화 영상"
                    }
                    totalValue={parseInt(chartdata.cultureProgress)}
                    totalColor="#6BCB77"
                  />
                </Grid>
              </Grid>
            </Box>
            <Typography
              sx={{ fontSize: "25px", fontFamily: "MaplestoryOTFLight" }}
            >
              {language === "CN" ? (
                <span style={{ fontSize: "40px" }}>比较统计</span>
              ) : language === "VI" ? (
                <span style={{ fontSize: "30px" }}>So sánh thống kê </span>
              ) : (
                <span style={{ fontSize: "40px" }}>비교통계</span>
              )}{" "}
              {language === "CN"
                ? "（以韩国定居年度为准）"
                : language === "VI"
                ? "(tiêu chuẩn năm định cư Hàn Quốc)"
                : "(한국 정착년도 기준)"}
            </Typography>
            <ColumnChartWithGroupLabel
              data={ColumnChartData}
              categories={categories}
              title={title}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ParentPage1;
