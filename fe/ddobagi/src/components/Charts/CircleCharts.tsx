import React, { useState } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircleCharts(
  props: CircularProgressProps & { value: number; name: string }
) {
  return (
    <div>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          {...props}
          size="12rem"
          color="info"
          thickness={4}
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
            color="white"
            fontSize="1.5rem"
            align="center"
          >
            {props.name}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color="white"
            fontSize="2rem"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>{" "}
    </div>
  );
}

export default CircleCharts;
