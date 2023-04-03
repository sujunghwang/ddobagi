import React, { useEffect, useState } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircleCharts(
  props: CircularProgressProps & {
    value: number;
    name: string;
    ChartColor: string;
  }
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(props.value);
    }, 1000);
  });

  return (
    <div style={{ color: props.ChartColor }}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size="13rem"
          color="inherit"
          thickness={6}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 2,
          }}
        />
        <CircularProgress
          variant="determinate"
          value={100}
          size="13rem"
          sx={{ color: "white" }}
          thickness={6}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            color="black"
            fontSize="1.5rem"
            fontFamily={"MaplestoryOTFLight"}
            zIndex={2}
            align="center"
          >
            {props.name}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color="black"
            fontSize="2rem"
            fontFamily={"MaplestoryOTFLight"}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>{" "}
    </div>
  );
}

export default CircleCharts;
