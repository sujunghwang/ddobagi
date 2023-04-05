import React from "react";
import Card from "@mui/material/Card";
import {
  Button,
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import { MouseEventHandler } from 'react';
import axios from "axios";
import { RootState } from "../../redux/RootReducer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import BackBtn from "./BackButton";
import styles from "./Culture.module.scss";

// 문화 상세 사진
// import dokdo from "../../assets/dokdopeng.jpg"
// import game from "../../assets/game.jpg"
// import kb from "../../assets/kyungbok.jpg"
// import netflix from "../../assets/netflix.jpg"
import ddobak from "../../assets/말남아.png";

interface Culture {
  cultureId: number;
  url: string;
  cultureContentQueryDtoList: CultureContent[];
  completed: boolean;
}

interface CultureContent {
  cultureId: number;
  lang: string;
  title: string;
  description: string;
}

type CultureBoxProp = {
  contentType: string;
  backColor: string;
  title: string;
  content: string;
  videoURL: string;
  others: Culture[];
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CultureBox({
  contentType,
  backColor,
  title,
  content,
  videoURL,
  others,
}: CultureBoxProp) {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  const introduce = () => {
    if (language === "CN") {
      return "其他视频";
    } else if (language === "VI") {
      // @ts-ignore
      return "Có cái này nữa nè!";
    } else {
      return "다른 영상 보기";
    }
  };

  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

  // let idnumbers : Array<[number, string, any ]>;

  // idnumbers = [[1, '독도', dokdo], [2, '놀이문화', game], [3, '경복궁', kb], [4, '한국의 넷플릭스', netflix]]

  const getYouTubeThumbnailUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // const NowCategory = categoryProp
  // console.log(NowCategory)
  const { id } = useParams();

  // @ts-ignore
  const [CategoryNumber, cultureNumber] = id.split("_");

  console.log(CategoryNumber);
  console.log(cultureNumber);

  const CultureFinish = () => {
    axios({
      url: `http://j8a608.p.ssafy.io:8080/api/cultures/${cultureNumber}/users/${userId}`,
      method: "POST",
      // withCredentials: true,
      // data: {
      //   corrected : false
      // },
    })
      .then(() => {
        console.log("영상을 다봤어요");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 영상 학습 완료 함수 (추후에 API POST 보낼 곳)
  const handleEnded = () => {
    console.log("비디오 재생이 완료되었습니다.");
    CultureFinish();
  };

  const navigate = useNavigate();

  // const OtherMove = (Number : string) => {
  //   navigate(`/cultureitem/${CategoryNumber}_${Number}`);
  // }

  // @ts-ignore
  const OtherMove = (MoveNum: number) => {
    const CategoryNum = CategoryNumber;
    navigate(`/cultureitem/${CategoryNum}_${MoveNum}`);
  };

  console.log(others);

  return (
    <Box
      sx={{
        borderRadius: "20px 20px 0 0",
        backgroundColor: backColor,
        padding: "2rem 2rem 0 2rem",
        boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.6)",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          padding: "1rem 2rem 2rem 2rem",
          borderRadius: "20px 20px 0 0",
        }}
      >
        {" "}
        <div>
          <Typography
            sx={{
              fontSize: "4rem",
              textAlign: "start",
              fontFamily:
                language === "CN"
                  ? "JingNanMaiYuanTi"
                  : language === "VI"
                  ? "UVNHaiBaTrung"
                  : "MaplestoryOTFLight",
            }}
          >
            {contentType}
          </Typography>
          <Box
            sx={{
              paddingBottom: "2rem",
              width: "900px",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* <Box>
            {videoURL}
          </Box> */}
            <Box
              sx={{
                borderRadius: "10px",
                width: "900px",
                height: "506px",
              }}
            >
              <ReactPlayer
                width="900px"
                height="506px"
                url={videoURL}
                playing={true}
                onEnded={handleEnded}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  paddingLeft: "2rem",
                  textAlign: "start",
                  fontSize: "3rem",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  wordBreak: "keep-all",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  textAlign: "start",
                  fontSize: "20px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                }}
              >
                {content}
              </Typography>
            </Box>{" "}
          </Box>
        </div>
        <div className={styles.ColumnFlex}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className={styles.RowFlex}>
              <Typography
                sx={{
                  paddingTop: ".3rem",
                  fontSize: "30px",
                  fontFamily:
                    language === "CN"
                      ? "JingNanMaiYuanTi"
                      : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "MaplestoryOTFLight",
                  marginTop: "10px",
                }}
              >
                {introduce()}
              </Typography>
              <img src={ddobak} alt="또박이" width="55px" height="80px" />{" "}
            </div>
          </Box>
          <Box>
            {/* {others} */}
            <Box
              sx={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              {/* {idnumbers.map((one) => ( */}
              {others.map((other) => (
                <Card
                  sx={{
                    width: "25rem",
                    height: "9rem",
                    borderRadius: "10px",
                    marginBottom: "2rem",
                  }}
                  onClick={() => OtherMove(other.cultureId)}
                >
                  <CardActionArea
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={getYouTubeThumbnailUrl(other.url)}
                      sx={{
                        maxWidth: "16rem",
                        height: "9rem",
                      }}
                    />
                    <CardContent sx={{ width: "100%" }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontFamily:
                            language === "CN"
                              ? "JingNanMaiYuanTi"
                              : language === "VI"
                              ? "UVNHaiBaTrung"
                              : "MaplestoryOTFLight",
                        }}
                      >
                        {language === "CN"
                          ? other.cultureContentQueryDtoList[1].title
                          : language === "VI"
                          ? other.cultureContentQueryDtoList[2].title
                          : other.cultureContentQueryDtoList[0].title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
              <BackBtn width="10rem" />
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default CultureBox;
