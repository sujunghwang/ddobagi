import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/joy';
import image51 from "../../assets/랜딩51.png"
import image52 from "../../assets/랜딩52.png"
import image53 from "../../assets/랜딩53.png"
// import './Main.css';

export default function MainFive() {
  return (
    <div>
      <Box 
      sx={{
        height:"150px"
      }}>

      </Box>
      <div
        style={{
          width: '100%',
          height: '92vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(255 118 0 / 4%)',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '80px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "CookieRun-Regular",
                fontWeight: "bold",
                fontSize: '45px',
                marginBottom: '5px',
              }}
            >
              부모님도 함께 해요
            </Typography>
            <Typography
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: '30px',
                marginBottom: '5px',
              }}
            >
              아이가 배우는 내용을 확인하고, 어느 정도 학습이 진행되었는지 파악할 수 있어요.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx = {{
              display: "flex",
              justifyContent: 'spaceAround',
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FF6B6B",
                width: "360px",
                height: "360px",
                borderRadius:"20px",
                margin : "50px",
              }}
            >
              <Box
                sx={{
                  marginLeft:"40px",
                  marginTop:"25px",
                  paddingTop:"10px",
                  backgroundColor: "#FFDADA",
                  width: "280px",
                  height: "310px",
                  borderRadius:"20px",
                }}
              >
                <img
                  src={image51}
                  alt="landing4"
                  width="209px"
                  height="209px"
                />
                <Typography
                  sx={{
                    fontSize:"30px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  학습 결과 통계를 제공해요
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFD93D",
                width: "360px",
                height: "360px",
                borderRadius:"20px",
                margin : "50px",
              }}
            >
              <Box
                sx={{
                  marginLeft:"40px",
                  marginTop:"25px",
                  paddingTop:"10px",
                  backgroundColor: "#FFF5D7",
                  width: "280px",
                  height: "310px",
                  borderRadius:"20px",
                }}
              >
                <img
                  src={image52}
                  alt="landing5"
                  width="240px"
                  height="160px"
                />
                <Typography
                  sx={{
                    fontSize:"30px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  다문화 센터 위치 정보를 제공해요
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#6BCB77",
                width: "360px",
                height: "360px",
                borderRadius:"20px",
                margin : "50px",
              }}
            >
              <Box
                sx={{
                  marginLeft:"40px",
                  marginTop:"25px",
                  paddingTop:"10px",
                  backgroundColor: "#FFF5D7",
                  width: "280px",
                  height: "310px",
                  borderRadius:"20px",
                }}
              >
                <img
                  src={image53}
                  alt="landing6"
                  width="210px"
                  height="210px"
                />
                <Typography
                  sx={{
                    fontSize:"30px",
                    fontFamily: "CookieRun-Regular",
                  }}
                >
                  다문화 가정 관련 정보를 전달해요
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}