import React from "react";
import styles from "./ColorBtn.module.scss";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";

type BtnProp = {
  content: string;
  color: string;
  width: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ColorBtn({ content, color, width, onClick }: BtnProp): JSX.Element {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  return (
    <div className={styles.Container}>
      <Button
        variant="contained"
        sx={{
          width: width,
          color: "#000000",
          backgroundColor: color,
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
            backgroundColor: color,
            boxShadow: "inset 0 -4px 5px rgba(0, 0, 0, 0.15)",
          },
        }}
        disableElevation
        onClick={onClick}
      >
        {content}
      </Button>
    </div>
  );
}

export default ColorBtn;
