import React from "react";
import Card from '@mui/material/Card';
import { Button, Box, Typography, CardActionArea, CardMedia, CardContent, Grid } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { RootState } from "../../redux/RootReducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

// 문화 상세 사진
import dokdo from "../../assets/dokdopeng.jpg"
import game from "../../assets/game.jpg"
import kb from "../../assets/kyungbok.jpg"
import netflix from "../../assets/netflix.jpg"
import ddobak from "../../assets/말남아.png"

type CultureBoxProp = {
  contentType: string;
  backColor: string;
  title: string;
  content: string;
  videoURL: string;
  others: Array<number>;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CultureBox({ contentType, backColor, title, content, videoURL, others }: CultureBoxProp) {

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
    );
  //

  const introduce = () =>  {
    if (language === "CN") {
      return "其他视频"
    } else if (language === 'VI') {
      // @ts-ignore
      return "Có cái này nữa nè!"
    } else {
      return "이런 것도 있어요!"
    }
  }

  // 영상 학습 완료 함수 (추후에 API POST 보낼 곳)
  const handleEnded = () => {
    console.log("비디오 재생이 완료되었습니다.");
  }

  let idnumbers : Array<[number, string, any ]>;

  idnumbers = [[1, '독도', dokdo], [2, '놀이문화', game], [3, '경복궁', kb], [4, '한국의 넷플릭스', netflix]]

  return (
    <Box sx={{
      display:"flex",
      justifyContent:"center",
    }}>
      <Box 
        sx={{
          display: "flex",
          backgroundColor: backColor,
          flexDirection:"column",
          width:"1200px",
          height:"auto",
          borderRadius: "50px",
          alignItems : "center",
        }}>
        <Typography 
          sx={{
            fontSize: "50px",
            fontFamily: "CookieRun-Regular",
          }}
        >
          {contentType}
        </Typography>
        <Box 
        sx={{
          width: "1100px",
          height: "auto",
          backgroundColor:"#FFE8E8",
          borderRadius : "75px",
        }}>
          {/* <Box>
            {videoURL}
          </Box> */}
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            margin:"30px",
          }}>
            <ReactPlayer 
              url={videoURL} 
              width="80%"
              height="650px"
              muted={true}
              playing={true}
              onEnded={handleEnded}
              />

          </Box>
          <Box sx={{ margin: "30px",}}>
            <Typography
              sx={{
                fontSize:"40px",
                fontFamily: "CookieRun-Regular",
                marginBottom: "10px",
              }}
            >
              { title }
            </Typography>
            <Typography
              sx={{
                fontSize:"24px",
                fontFamily: "CookieRun-Regular",
              }}
            >
              {content}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img 
            src={ddobak}
            alt="또박이"
            width="75px"
            height="80px"
          />
          <Typography
            sx={{
              fontSize:"30px",
              fontFamily: "CookieRun-Regular",
              marginTop: "10px"
            }}
          >
            {introduce()}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "1100px",
            height: "auto",
            backgroundColor:"#FFE8E8",
            borderRadius : "20px",
            marginBottom: "20px",
          }}
        >
          {others}
          <Box sx={{ margin: "10px"}}>
            <Grid container spacing={2}>
              {idnumbers.map((one) => (
                <Grid item xs={12} md={6} lg={3}>
                  <Card
                    sx={{
                      borderRadius:"20px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="220"
                        image={one[2]}
                      />
                      <CardContent>
                        <Typography
                          sx={{
                            fontSize:"20px",
                            fontFamily: "CookieRun-Regular",
                          }}
                        >
                          {one[1]}
                        </Typography>
                      </CardContent>
                    </CardActionArea> 
                  </Card>

                </Grid>
              ))}
            </Grid>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CultureBox;