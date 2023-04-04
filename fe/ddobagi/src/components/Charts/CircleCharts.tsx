import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';

function CircleCharts(
  props: LinearProgressProps & {
    value: number;
    name: string;
    ChartColor: string;
  }
) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(props.value);
    }, 1000);
  }, []);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white"
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: props.ChartColor
    },
  }));

  return (
    <div style={{ color: props.ChartColor, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem" }}>
      <Typography
        component="div"
        color="black"
        fontSize="2rem"
        fontFamily={"MaplestoryOTFLight"}
        zIndex={2}
        align="center"
      >
        {props.name}
      </Typography>
      <div style={{ width: "40vw", position: "relative" }}>
        <BorderLinearProgress variant="determinate" value={progress} />
        <Typography
          sx={{
            position: "absolute",
            zIndex: 3,
            top: -3,
            left: 10
          }}
          variant="caption"
          component="div"
          color="black"
          fontSize="1.5rem"
          fontFamily={"MaplestoryOTFLight"}
        >{`${Math.round(props.value)}%`}</Typography>
      </div>
    </div >
  );
}

export default CircleCharts;
