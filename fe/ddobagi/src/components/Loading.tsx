import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <div style={{ margin: "5rem" }}>
      <CircularProgress
        color="inherit"
        sx={{ color: "#ee9ca7" }}
        size={100}
        thickness={5}
      />
      <div style={{ fontSize: "2rem" }}>Loading...</div>
    </div>
  );
}

export default Loading;
