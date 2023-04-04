// import './Main.css';
import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/joy';
import talk from "../../assets/4인대화.png"
import styles from "./Two.module.scss"

export default function MainTwo() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFE69A',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
      >
        <Box className={styles.Fadeleft}>
          <Typography
            sx={{
              fontSize: '80px',
              fontFamily: "MaplestoryOTFLight",
              color: "#000000",
              marginBottom: '5px',
              whiteSpace: "pre-line"
            }}
          >
            또바기는 어떤 서비스인가요?
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <img
            src={talk}
            alt="talk4"
            width="700px"
            height="350px"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '35px',
              fontFamily: "MaplestoryOTFLight",
              color: "#000000",
            }}>
            또바기는 다문화 가정 아이들의 한국어 학습을 도와줄 수 있는 서비스입니다.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}