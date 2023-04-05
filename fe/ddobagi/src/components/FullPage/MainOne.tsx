import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";
import "./Mouse.css";
import styles from "./Two.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

export default function MainOne() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <>     <svg
      className={styles.waves}
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className={styles.parallax}>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(147, 181, 236, 0.7"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(147, 181, 236, 0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(147, 181, 236, 0.3)"
        />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#92B4EC" />
      </g>
    </svg>
      <div className={styles.AnimeBack}>
      </div>
      <img src={"./img/whale.png"} alt="whale" className={styles.whale} />
      <div className={styles.StartLogo}>또바기</div>
      <img src={"./img/ship.png"} alt="ship" className={styles.ship} />
      <img src={"./img/fishes.png"} alt="fish" className={styles.fish} />
      <img src={"./img/seaweed.png"} alt="seaweed" className={styles.seaweed} />
      <img src={"./img/submarine.png"} alt="submarine" className={styles.submarine} />
      <img src={"./img/reef.png"} alt="reef" className={styles.reef} />
      <div className={styles.BlueBottom}></div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#92B4EC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "115px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "80px",
                fontFamily:
                  language === "CN"
                    ? "JingNanMaiYuanTi"
                    : language === "VI"
                      ? "UVNHaiBaTrung"
                      : "ONE-Mobile-POP",
                color: "#ffffff",
                marginBottom: "5px",
                whiteSpace: "pre-line",
              }}
            >
              {language === "CN"
                ? "一字一句的熟悉起来"
                : language === "VI"
                  ? "vừa nói rõ ràng vừa nấu chín"
                  : "또박또박 말하면서 익혀요"}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem",
          }}
        >
          <Box className="mouse" sx={{ marginBottom: "10px" }}>
            <div className="scroll-icon ex-1">
              <span className="wheel"></span>
            </div>
          </Box>
          <Typography
            sx={{
              fontSize: "35px",
              fontFamily:
                language === "CN"
                  ? "JingNanMaiYuanTi"
                  : language === "VI"
                    ? "UVNHaiBaTrung"
                    : "MaplestoryOTFLight",
              color: "#ffffff",
            }}
          >
            {language === "CN"
              ? "把滚动条放下来"
              : language === "VI"
                ? "Các bạn kéo xuống thử đi"
                : "스크롤을 내려보세요"}
          </Typography>
        </Box>
        <div className={styles.bubblesContainer}>
          <svg
            className={styles.bubbles}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 701 1024"
            style={{ overflow: "visible" }}
          >
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
      </div>
    </>
  );
}
