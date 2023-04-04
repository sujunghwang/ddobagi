import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/joy';
import image51 from "../../assets/랜딩51.png"
import image52 from "../../assets/랜딩52.png"
import image53 from "../../assets/랜딩53.png"
// import './Main.css';

export default function MainFive() {
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
              fontFamily: "MaplestoryOTFLight",
              fontWeight: "bold",
              fontSize: '45px',
              marginBottom: '5px',
            }}
          >
            부모님도 함께 해요
          </Typography>
          <Typography
            style={{
              fontFamily: "MaplestoryOTFLight",
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
              padding: "2rem"
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFDADA",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={image51}
                alt="landing4"
                width="300px"
                height="300px"
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "MaplestoryOTFLight",
                  marginBottom: "1rem"
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
              borderRadius: "20px",
              margin: "50px",
              padding: "2rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF5D7",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={image52}
                alt="landing5"
                width="240px"
                height="160px"
                style={{ marginTop: "4rem" }}
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "MaplestoryOTFLight",
                }}
              >
                다문화 센터의 <div>위치 정보를 제공해요</div>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#6BCB77",
              width: "360px",
              height: "360px",
              padding: "2rem",
              borderRadius: "20px",
              margin: "50px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF5D7",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={image53}
                alt="landing6"
                width="210px"
                height="210px"
                style={{ marginTop: "3rem" }}

              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "MaplestoryOTFLight",
                }}
              >
                다문화 가정 관련 <div>기사와 정책을 전달해요</div>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}