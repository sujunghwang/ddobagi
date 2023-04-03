import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/joy';
import image31 from "../../assets/랜딩31.png"
import image32 from "../../assets/랜딩32.png"
import image33 from "../../assets/랜딩33.png"
// import './Main.css';

export default function MainThree() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
            또박또박, 따라하며 배워요
          </Typography>
          <Typography
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: '30px',
              marginBottom: '5px',
            }}
          >
            실생활에 바로 활용 가능한 표현들을 영상으로 보고, 듣고 따라 말해요.
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
          sx={{
            display: "flex",
            justifyContent: 'spaceAround',
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FF6B6B",
              width: "360px",
              height: "360px",
              borderRadius: "20px",
              margin: "50px",
            }}
          >
            <Box
              sx={{
                marginLeft: "40px",
                marginTop: "25px",
                paddingTop: "10px",
                backgroundColor: "#FFDADA",
                width: "280px",
                height: "310px",
                borderRadius: "20px",
              }}
            >
              <img
                src={image31}
                alt="landing1"
                width="240px"
                height="160px"
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "CookieRun-Regular",
                }}
              >
                상황에 맞는 대사를 따라하며 배워요
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
            }}
          >
            <Box
              sx={{
                marginLeft: "40px",
                marginTop: "25px",
                paddingTop: "10px",
                backgroundColor: "#FFF5D7",
                width: "280px",
                height: "310px",
                borderRadius: "20px",
              }}
            >
              <img
                src={image32}
                alt="landing2"
                width="240px"
                height="160px"
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "CookieRun-Regular",
                }}
              >
                따라했던 문장에서 단어를 익혀요
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#6BCB77",
              width: "360px",
              height: "360px",
              borderRadius: "20px",
              margin: "50px",
            }}
          >
            <Box
              sx={{
                marginLeft: "40px",
                marginTop: "25px",
                paddingTop: "10px",
                backgroundColor: "#FFF5D7",
                width: "280px",
                height: "310px",
                borderRadius: "20px",
              }}
            >
              <img
                src={image33}
                alt="landing3"
                width="210px"
                height="210px"
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "CookieRun-Regular",
                }}
              >
                한국의 문화를 영상으로 봐요
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}