import React from "react";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

type BtnProp = {
  width: string;
};

function SearchBtn({ width }: BtnProp) {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(-1);
  // }

  return (
    <Button
      variant="contained"
      sx={{
        width: width,
        color: "#ffffff",
        backgroundColor: "#4D96FF",
        borderRadius: 10,
        fontFamily: "CookieRun-Regular",
        fontSize: 30,
        borderColor: "rgba(0, 0, 0, .25)",
        borderWidth: "0px 4px 4px 0px",
        borderStyle: "solid",
        transition: "border-width .1s ",
        "&:hover": {
          backgroundColor: "#4D96FF",
          borderWidth: "0px",
        },
        marginX: "15px",
      }}
      endIcon={<SearchIcon sx={{ width: "38px", height: "35px", color:"white" }} />}
      disableElevation
      // onClick={handleClick}
    >
        검색
    </Button>
  );
}

export default SearchBtn;
