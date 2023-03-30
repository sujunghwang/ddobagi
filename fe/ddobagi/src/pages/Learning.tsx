import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#30b341" : "#308fe8",
  },
}));

function Learning() {
  const location = useLocation();
  const progress = location.state?.progress;

  return (
    <Container maxWidth="xl">
      <div
        style={{
          width: "fit-content",
          marginLeft: `${progress}%`,
        }}
      >
        여기에요
      </div>
      <BorderLinearProgress variant="determinate" value={progress} />
      <Outlet />
    </Container>
  );
}

export default Learning;
