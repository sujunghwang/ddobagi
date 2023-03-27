import React from 'react';
import { Typography, Box } from '@mui/material';
import BackBtn from './BackButton';
// import Grid from '@mui/joy/Grid';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import CultureBox from './CultureDetailBox';
import cultureTest2 from "./cultureTest2.json"

interface Culture {
  cultureId: number;
  thumbnail: string;
  cultureContentQueryDtoList: CultureContent[];
  completed: boolean;
}

interface CultureContent {
  cultureId: number;
  lang: string;
  title: string;
  description: string;
}

interface Category {
  categoryId: number;
  lang: string;
  categoryName: string;
}

interface Data {
  categoryName: Category[];
  cultureList: Culture[];
}

interface MyJson {
  data: Data;
}

interface Params {
  id: string
}

function CultureDetail() {
  // @ts-ignore
  const { id } : Params = useParams();
  console.log(id)

  const CultureData = cultureTest2

  const cultureInfo = CultureData.data
  console.log(cultureInfo)

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
    );
  //
  const categoryN = cultureInfo.categoryName
  const categoryID = categoryN[0].categoryId

  const culCategory = () => {
    if (language === "CN") {
      return categoryN[1].categoryName
    } else if (language === 'VI') {
      return categoryN[2].categoryName
    } else {
      return categoryN[0].categoryName
    }
  }

  const DetailInfo = cultureInfo.cultureList

  const getColorCode = () => {
    if (categoryID === 1) {
      return "#FF6B6B";
    }
    else if (categoryID === 2) {
      return "#6BCB77"
    }
    else if (categoryID === 3) {
      return "#4D96FF"
    }
    else if (categoryID === 4) {
      return "#FFD93D"
    }
    // 다른 색상에 대한 처리
    return "#FFE69A";
  };

  // @ts-ignore
  const targetCulture = DetailInfo.find((culture) => culture.cultureId.toString() === id );

  const getTitle = (id : string) : string => {
    if (language === "CN") {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[1].title
    } else if (language === 'VI') {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[2].title
    } else {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[0].title
    }
  }

  const getDiscription = (id : string) : string => {
    if (language === "CN") {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[1].description
    } else if (language === 'VI') {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[2].description
    } else {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[0].description
    }
  }
  // @ts-ignore
  const getURL = (id : string) : string => {
    // @ts-ignore
    return targetCulture.thumbnail
  }


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
        alignSelf : "center",
        // justifyContent: "flex-end",
      }}>
        <BackBtn width='280px'/>
      </Box>
      <CultureBox
        contentType={culCategory()}
        backColor={getColorCode()}
        title={getTitle(id)}
        content={getDiscription(id)}
        videoURL={getURL(id)}
        others={[1,2,3,4]}
      />
    </div>
  )
}

export default CultureDetail;