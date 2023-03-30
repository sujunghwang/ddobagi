import React from 'react';
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import ParentHeader from "../assets/ParentHeader.png"
// import CenterBackground from "../assets/CenterBackground.png"
import "../components/ParentPage/ParentPage2.css"
import SidoSelect from '../components/ParentPage/SelectBox/sidoSelect';
import SigoonSelect from '../components/ParentPage/SelectBox/sigoonSelect';
// import CenterFields from '../components/ParentPage/SelectBox/CenterField';
// import styles2 from "../components/ParentPage/SelectBox/BoxStyle.module.scss";
// import studyBtn from '../components/ParentPage/studyBtn';
import SearchBtn from '../components/ParentPage/SelectBox/SearchBtn';
import CenterMap from '../components/Map/CenterMap';

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
    // const navigateToParent4 = () => {
    //   navigate("/parentpage/map2");
    // };
    // 탭 선택 함수 끝
  return(
    <div className={styles.FContainer}>
      <img src={ParentHeader} alt="" className={styles.Banner} />
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
          marginTop: "30px"
        }}
      >
        <Box
          sx={{
            width:"1400px",
            height:"900px",
            backgroundColor:"#A3C9FF",
            borderRadius:"20px"
          }}
          >
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "CookieRun-Regular",
              color:"#ffffff",
              marginTop:"20px"
            }}
            >
            {language === "CN" ? "多元文化中心位置" : language === "VI" ? "vị trí trung tâm đa văn hóa" : "다문화 센터 위치 및 정보"}
          </Typography>
          <div // 다문화센터 위치 내용 들어갈 부분
            style={{
              width: "100%",
              height: "auto",
              backgroundColor:"#FFF6DA",
              marginTop:"30px",
              borderRadius: "0 0 20px 20px"
            }}
          >
            <Box sx={{
              width:"80%",
              marginLeft:"10%",
              paddingTop:"20px",
              paddingBottom: "30px",
            }}>
              <Typography sx={{ fontSize:"25px", fontFamily: "CookieRun-Regular", }}>
                {language === "CN" ? "选择市/道及区/郡,可以获得多元文化中心及家庭中心的位置信息。" : language === "VI" ? "Nếu bạn chọn tỉnh/thành phố và quận/huyện, bạn có thể nhận được thông tin vị trí của trung tâm đa văn hóa và trung tâm gia đình." : "시/도 및 구/군을 선택하시면 다문화 센터 및 가족 센터의 위치 정보를 얻으실 수 있습니다."}
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
  )
}

export default ParentPage2