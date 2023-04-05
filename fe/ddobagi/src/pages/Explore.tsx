import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import styles from "./Explore.module.scss";

function Explore() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setIsScrolling(e.deltaY < 0);
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <NavBar />
        {pathname !== "/" && <div style={{ height: "115px" }}></div>}
        {pathname !== "/" &&
          pathname !== "/CategoryList" &&
          pathname !== "/CultureList" && <Outlet />}
      </Container>
      {(pathname === "/" ||
        pathname === "/CategoryList" ||
        pathname === "/CultureList") && <Outlet />}
      {pathname !== "/" && <Footer />}
      {pathname !== "/" && (
        <div>
          <svg
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
          <img src={"/img/seaweed.png"} className={styles.seaweed} alt="seaweed" />
          <img src={"/img/seagull.png"} className={styles.seagull} alt="seagull" />
          <img src={"/img/ship.png"} className={styles.ship} alt="ship" />
          <img src={"/img/cloud.png"} className={styles.cloud} alt="cloud" />
        </div>
      )}
      {pathname !== "/" &&
        <img className={`${styles.GotoTop} ${isScrolling ? styles.appear : styles.hidden}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          alt="fishing"
          src={"/img/fishing-tool.png"} />
      }
    </div>
  );
}

export default Explore;
