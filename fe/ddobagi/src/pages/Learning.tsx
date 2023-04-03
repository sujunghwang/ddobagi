import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import styles from "./CategoryList.module.scss";


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
      <Outlet />
    </Container >
  );
}

export default Learning;
