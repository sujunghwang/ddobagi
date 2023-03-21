import React from "react";
import styles from "./ColorBtn.module.scss";
import { Button } from "@mui/material";


type BtnProp = {
  content: string;
  color: string;
  width: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ColorBtn({ content, color, width, onClick }: BtnProp) : JSX.Element {

  return (
    <div className={styles.Container}>
      <Button
        variant="contained"
        sx={{
          width: width,
          color: "#000000",
          backgroundColor: color,
          borderRadius: 50,
          fontFamily: "CookieRun-Regular",
          fontSize: 20,
          transition: "top .1s ",
          "&:hover": {
            backgroundColor: color,
          },
        }}
        disableElevation
        onClick={onClick}
      >
        {content}
      </Button>
      {/* <div className={styles.Btn}></div> */}
    </div>
  );
}

export default ColorBtn;
