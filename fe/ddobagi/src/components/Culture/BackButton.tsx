import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

type BtnProp = {
  width: string;
};

function BackBtn({ width }: BtnProp) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: width,
        color: "#ffffff",
        backgroundColor: "#6BCB77",
        borderRadius: 10,
        fontFamily: "MaplestoryOTFBold",
        fontSize: 30,
        borderColor: "rgba(0, 0, 0, .25)",
        borderWidth: "0px 4px 4px 0px",
        borderStyle: "solid",
        transition: "border-width .1s ",
        "&:hover": {
          backgroundColor: "#6BCB77",
          borderWidth: "0px",
        },
        marginX: "15px",
      }}
      startIcon={
        <ArrowBackIosNewIcon
          sx={{ width: "38px", height: "35px", color: "white" }}
        />
      }
      disableElevation
      onClick={handleClick}
    >
      뒤로 가기
    </Button>
  );
}

export default BackBtn;
