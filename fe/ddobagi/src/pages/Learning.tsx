import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import styles from "./CategoryList.module.scss";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e1e1e1"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage:
      "linear-gradient(to right, #74ebd5, #acb6e5)"
  },
}));

function Learning() {
  const location = useLocation();
  const progress = location.state?.progress;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
    document.body.classList.add(styles.NoOverFlow);
    return () => {
      document.body.classList.remove(styles.NoOverFlow);
    };
  }, []);

  return (
    <Container maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}>
      <div className={styles.loadAnime}>
        <div
          style={{
            width: "fit-content",
            marginLeft: `${progress}%`,
            transform: "translate(-50%,0)",
          }}
        >
          <TwoWheelerIcon color="success" fontSize="large" />
        </div>
        <BorderLinearProgress variant="determinate" value={progress} sx={{
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
        }} />
      </div>
      <Outlet />
    </Container >
  );
}

export default Learning;
