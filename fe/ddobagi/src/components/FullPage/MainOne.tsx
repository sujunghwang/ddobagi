import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/joy';
import './Mouse.css';
import styles from "./Two.module.scss"

export default function MainOne() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#92B4EC',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '115px'
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '80px',
              fontFamily: "ONE-Mobile-POP",
              color: "#ffffff",
              marginBottom: '5px',
              whiteSpace: "pre-line"
            }}
          >
            또박또박
            말하면서 익혀요
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '6rem'
        }}
      >
        <Box className="mouse" sx={{ marginBottom: '10px' }}>
          <div className="scroll-icon ex-1">
            <span className="wheel"></span>
          </div>
        </Box>
        <Typography
          sx={{
            fontSize: '35px',
            fontFamily: "MaplestoryOTFLight",
            color: "#ffffff",
          }}>
          스크롤을 내려보세요
        </Typography>
      </Box>
      <div className={styles.bubblesContainer}>
        <svg className={styles.bubbles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 701 1024" style={{ overflow: "visible" }}>

          <g className={styles.bubblesLarge} stroke-width="7">
            <g>
              <g transform="translate(10 940)">
                <circle cx="35" cy="35" r="35" />
              </g>
            </g>
            <g>
              <g transform="translate(373 940)">
                <circle cx="35" cy="35" r="35" />
              </g>
            </g>
            <g>
              <g transform="translate(408 940)">
                <circle cx="35" cy="35" r="35" />
              </g>
            </g>
            <g>
              <g transform="translate(621 940)">
                <circle cx="35" cy="35" r="35" />
              </g>
            </g>
            <g>
              <g transform="translate(179 940)">
                <circle cx="35" cy="35" r="35" />
              </g>
            </g>
          </g>

          <g className={styles.bubblesSmall} stroke-width="4">
            <g>
              <g transform="translate(147 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(255 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(573 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(429 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(91 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(640 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(321 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(376 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(376 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
            <g>
              <g transform="translate(497 984)">
                <circle cx="15" cy="15" r="15" />
              </g>
            </g>
          </g>

        </svg>
      </div>
    </div >
  );
}