import React from "react";
import { Button } from "@mui/material";

type BtnProp = {
  content: string;
  color: string;
  width: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ColorBtn({ content, color, width, onClick }: BtnProp) {
  return (
    <Button
      variant="contained"
      sx={{
        width: width,
        color: "#000000",
        backgroundColor: color,
        borderRadius: 50,
        fontFamily: "CookieRun-Regular",
        fontSize: 20,
        borderColor: "rgba(0, 0, 0, .25)",
        borderWidth: "0px 4px 4px 0px",
        borderStyle: "solid",
        transition: "border-width .1s ",
        "&:hover": {
          backgroundColor: color,
          borderWidth: "0px",
        },
        marginX: "15px",
      }}
      disableElevation
      onClick={onClick}
    >
      {content}
    </Button>
  );
}

export default ColorBtn;
