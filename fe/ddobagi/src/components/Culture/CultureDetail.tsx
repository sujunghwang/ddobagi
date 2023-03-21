import React from 'react';
import { Typography, Box } from '@mui/material';
import BackBtn from './BackButton';
// import Grid from '@mui/joy/Grid';
import CultureBox from './CultureDetailBox';

function CultureDetail() {
  return(
    <div>
      <Box
        sx={{
          width:"100%",
          height:"280px",
          display:"flex",
          justifyContent :"center",
          backgroundColor: "primary.dark",
          marginBottom: "50px",
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
      <Box sx={{
        marginTop:"30px",
        // float: "right",
        marginBottom : "50px",
        justifyContent: "flex-end",
      }}>
        <BackBtn width='280px'/>
      </Box>
      <CultureBox
        contentType='한국의 예술문화'
        backColor='#FF9595'
        title='K-POP 문화 알아보기'
        content='K-POP은 대한민국의 대중가요입니다. 싸이와 BTS, 블랙핑크 등 다양한 K-POP 가수들과 한국의 K-POP문화에 대해 알아보아요.'
        videoURL='https://www.youtube.com/watch?v=3rJ76glwP1E'
        others={[1,2,3,4]}
      />
    </div>
  )
}

export default CultureDetail;