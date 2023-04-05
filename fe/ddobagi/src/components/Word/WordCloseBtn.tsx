import React from "react";
import { Button } from "@mui/material";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

type BtnProp = {
  width: string;
};

function WordCloseBtn({ width }: BtnProp) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CategoryList");
  }
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <Button
      variant="contained"
      sx={{
        width: width,
        color: "#ffffff",
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
          backgroundColor: "#6BCB77",
          boxShadow: "inset 0 -4px 5px rgba(0, 0, 0, 0.15)",
        },
      }}
      startIcon={<CloseIcon sx={{ width: "38px", height: "35px", color: "white" }} />}
      disableElevation
      onClick={handleClick}
    >
      {language === "CN"
        ? "回去"
        : language === "VI"
          ? "lối ra"
          : "나가기"}
    </Button>
  );
}

export default WordCloseBtn;
