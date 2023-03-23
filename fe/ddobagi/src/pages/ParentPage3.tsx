import React from 'react';
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import { Box, Grid, Typography } from '@mui/material';
import ParentHeader from "../assets/ParentHeader.png"
// import Background from '../components/ParentPage/Background';
// import studyBtn from '../components/ParentPage/studyBtn';
import "../components/ParentPage/hovertest.scss";

// interface StudyButtonProps {
//   studyBtn: string;
// }

function ParentPage3() {
    //언어 변수
    const language = useSelector(
      (state: RootState) => state.languageChange.language
    );
    //
    // 탭 선택 함수
    const navigate = useNavigate();
    const navigateToParent1 = () => {
      navigate("/parentpage");
    };
    const navigateToParent2 = () => {
      navigate("/parentpage/map");
    };
    const navigateToParent3 = () => {
      navigate("/parentpage/news");
    };
    // 탭 선택 함수 끝
  return(
    <div className={styles.FContainer}>
      <img src={ParentHeader} alt="" className={styles.Header} />
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <Box
       sx={{
        display:"flex",
        justifyContent:"center",
       }}
      >

        <Box // 버튼들 담을 박스
          sx={{
            display:"grid",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: "200px",
                  height:"200px",
                  backgroundColor: "#FFDADA",
                  margin:"30px"
                }}
                onClick={() => {
                  navigateToParent1();
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  {language === "CN" ? "子女学习记录" : language === "VI" ? "hồ sơ con cái" : "자녀 학습 기록"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: "200px",
                  height:"200px",
                  backgroundColor: "#FFF5D7",
                  margin:"30px"
                }}
                onClick={() => {
                  navigateToParent2();
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  {language === "CN" ? "多元文化中心位置" : language === "VI" ? "vị trí trung tâm đa văn hóa" : "다문화 센터 위치"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: "200px",
                  height:"200px",
                  backgroundColor: "#DCFFE0",
                  margin:"30px"
                }}
                onClick={() => {
                  navigateToParent3();
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  {language === "CN" ? "多元文化支持信息" : language === "VI" ? "Thông tin hỗ trợ đa văn hóa" : "다문화 지원 정보"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display:"flex",
          justifyContent:"center",
          marginTop: "30px",
          flexDirection: "column" // 한줄추가
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize:"48px",
              fontFamily: "CookieRun-Regular",
            }}
          >
            다문화 정책 및 지원 정보
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize:"48px",
            fontFamily: "CookieRun-Regular",
          }}
          className="text-hover text-hover-underline-opening"
        >
          호버 테스트
        </Typography>
      </Box>
    </div>
  )
}

export default ParentPage3