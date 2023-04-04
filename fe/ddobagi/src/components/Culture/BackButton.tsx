import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

type BtnProp = {
  width: string;
};

function BackBtn({ width }: BtnProp) {
  const navigate = useNavigate();
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );

  // const handleClick = () => {
  //   navigate(-1);
  // }
  const handleClick = () => {
    navigate("/CultureList");
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: width,
        color: "#000000",
        backgroundColor: "#6BCB77",
        borderRadius: 50,
        fontFamily:
          language === "CN"
            ? "JingNanMaiYuanTi"
            : language === "VI"
            ? "UVNHaiBaTrung"
            : "MaplestoryOTFLight",
        fontSize: "1.2rem",
        transition: "top .1s ",
        boxShadow: "inset 0 -1px 5px rgba(0, 0, 0, 0.15)",

        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#6BCB77",
          boxShadow: "inset 0 -4px 5px rgba(0, 0, 0, 0.15)",
        },
      }}
      startIcon={
        <ArrowBackIosNewIcon sx={{ height: "35px", color: "black" }} />
      }
      disableElevation
      onClick={handleClick}
    >
      {language === "CN" ? "回去" : language === "VI" ? "lối ra" : "나가기"}
    </Button>
  );
}

export default BackBtn;
