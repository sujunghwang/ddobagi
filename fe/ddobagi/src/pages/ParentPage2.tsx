import React from 'react';
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import { Box, Grid, Typography, TextField } from '@mui/material';
import ParentHeader from "../assets/ParentHeader.png"
// import CenterBackground from "../assets/CenterBackground.png"
import "../components/ParentPage/ParentPage2.css"
import SidoSelect from '../components/ParentPage/SelectBox/sidoSelect';
import SigoonSelect from '../components/ParentPage/SelectBox/sigoonSelect';
// import CenterFields from '../components/ParentPage/SelectBox/CenterField';
// import styles2 from "../components/ParentPage/SelectBox/BoxStyle.module.scss";
// import studyBtn from '../components/ParentPage/studyBtn';
import SearchBtn from '../components/ParentPage/SelectBox/SearchBtn';

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
              marginTop:"30px"
            }}
            >
            {language === "CN" ? "多元文化中心位置" : language === "VI" ? "vị trí trung tâm đa văn hóa" : "다문화 센터 위치 및 정보"}
          </Typography>
          <div // 다문화센터 위치 내용 들어갈 부분
            style={{
              width: "100%",
              height: "870px",
              backgroundColor:"#FFF6DA",
              marginTop:"30px",
              borderRadius: "0 0 20px 20px"
            }}
          >
            <div
              style={{ width:"1330px", height:"560px", marginTop:"100px"}}
              className="banner"
            >
              <Box
                sx={{
                  width:"645px",
                  height:"auto",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center",
                }}
              >
                <Typography
                  sx={{
                    marginTop:"10px",
                    fontSize: "30px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  다문화센터 위치 검색
                </Typography>
                <Box // 셀렉트박스와 검색
                  // className={styles2.SelcectBox}
                  sx={{
                    marginTop: "30px",
                    marginLeft:"20%",
                    width:"60%",
                  }}
                >
                  <SidoSelect />
                  <Box sx={{
                    height:"50px"
                    }}
                  />
                  <SigoonSelect />
                  <Box sx={{
                    height:"50px"
                    }}
                  />
                  {/* <CenterFields /> */}
                  <TextField 
                    id="outlined-basic" 
                    label="명칭" 
                    variant="outlined" 
                    style={{ 
                      backgroundColor:"white",
                      width:"100%",
                    }} />
                  <Box sx={{
                    height:"50px"
                    }}
                  />
                  <SearchBtn width='190px' />
                </Box>
              </Box>
              <div className='banner-content'>
                hi
              </div>
            </div>
            {/* <img 
              src={CenterBackground} 
              alt="" 
              style={{ width:"1330px", height:"560px", marginTop:"100px"}} 
            /> */}
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default ParentPage2