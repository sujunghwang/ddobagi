import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import cultureimg from '../assets/korean_culture.jpg'
import { useNavigate } from "react-router-dom";
import CultureDetail from '../components/Culture/CultureDetail';

function CultureList() {
  const navigate = useNavigate();
  const moveCulture = () => {
    navigate("/cultureitem");
  }
  return(
    <div>
      <Typography>
        CultureList
      </Typography>
      <Box
        sx={{
          width:"100%",
          height:"280px",
          display:"flex",
          justifyContent :"center",
          backgroundColor: "primary.dark",
        }}>
        <Typography sx={{
          display:"flex",
          fontSize: "50px",
          alignItems:"center",
          fontFamily: "CookieRun-Regular",
        }}>
          한국 문화 학습
        </Typography>
      </Box>
      <Box>
        <Typography>
          한국의 예술 문화
        </Typography>
        <Box>
          <Box>

          </Box>
        </Box>
      </Box>
      <Button onClick={moveCulture}>
        하이요
      </Button>
    </div>
  )
}

export default CultureList