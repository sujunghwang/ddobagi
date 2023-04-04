import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/RootReducer";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import ParentHeader from "../assets/ParentHeader.png";
// import Background from '../components/ParentPage/Background';
// import studyBtn from '../components/ParentPage/studyBtn';
import "../components/ParentPage/hovertest.scss";
import axios from "axios";
import PaginationComponent from "../components/PaginationComponent";
import ChartAnimation from "../components/animations/ParentChart";
import MapAnimation from "../components/animations/Map";
import NewsAnimation from "../components/animations/News";
import SupportAnimation from "../components/animations/Support";

// interface StudyButtonProps {
//   studyBtn: string;
// }
interface NewsType {
  id: number;
  title: string;
  summary: string;
  url: string;
}

function ParentPage4() {
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

  // newsList data axios 통신
  const [data, setData] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("/data/mockData.json");
        const response = await axios.get("https://j8a608.p.ssafy.io/api/parents/information");
        // setData(response.data.data.news);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // 링크 이동 함수
  const handleItemClick = (item: any) => {
    window.location.replace(`${item.url}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = data.slice(indexOfFirstItem, indexOfLastItem);
  const AvatarColor = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

  const handleChangePage = (event: any, newPage: number) => {
    setCurrentPage(newPage);
  };

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
                  borderBottom: "5px solid blue",
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
            // width: {
            //   xs: '100%', // 모바일 크기에서는 100%의 너비를 가짐
            //   sm: '50%', // 태블릿 크기에서는 50%의 너비를 가짐
            //   md: '60%', // 데스크탑 크기에서는 33%의 너비를 가짐
            // },
            height: "900px",
            backgroundColor: "#07449C",
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
              ? "多文化支援消息"
              : language === "VI"
              ? "tin tức hỗ trợ đa văn hóa"
              : "다문화 지원 소식"}
          </Typography>
          <div // 다문화센터 정책 및 지원 정보 내용 들어갈 부분
            style={{
              width: "100%",
              height: "1050px",
              backgroundColor: "#D8E8FF",
              marginTop: "30px",
              borderRadius: "0 0 20px 20px",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                marginTop: "30px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "MaplestoryOTFLight" }}
              >
                총&nbsp;
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontFamily: "MaplestoryOTFLight" }}
              >
                {data.length}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontFamily: "MaplestoryOTFLight" }}
              >
                건
              </Typography>
            </Box>
            <Box // 리스트
              sx={{
                width: "900px",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <List
                sx={{
                  marginBottom: "20px",
                }}
              >
                {filteredData.map((item: any) => (
                  <>
                    <ListItem
                      key={item.id}
                      button
                      onClick={() => handleItemClick(item)}
                    >
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            backgroundColor:
                              AvatarColor[item.id % AvatarColor.length],
                          }}
                        >
                          {item.id}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="h5"
                            sx={{ fontFamily: "MaplestoryOTFBold", marginBottom:"10px" }}
                          >
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="body1"
                            sx={{ fontFamily: "MaplestoryOTFLight" }}
                          >
                            {item.summary.slice(0, 150)}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                  </>
                ))}
              </List>
              <Box // 페이지네이션
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <PaginationComponent
                  total={data.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onChange={handleChangePage}
                />
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
      <Box sx={{ height: "250px" }} />
    </div>
  );
}

export default ParentPage4;
