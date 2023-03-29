import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function Learning() {
  const location = useLocation();
  const progress = location.state?.progress;

  return (
    <div>
      <BorderLinearProgress variant="determinate" value={progress} />
      <Outlet />
    </div>
  );
}

export default Learning;
