import React from "react";
import { Typography, Box } from "@mui/material";
import BackBtn from "./BackButton";
// import Grid from '@mui/joy/Grid';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import CultureBox from "./CultureDetailBox";
// import cultureTest2 from "./cultureTest2.json"
import axios from "axios";

interface ApiData {
  categoryName: Category[];
  cultureList: Culture[];
}

interface CultureContent {
  cultureId: number;
  lang: string;
  title: string;
  description: string;
}

interface Culture {
  cultureId: number;
  url: string;
  cultureContentQueryDtoList: CultureContent[];
  completed: boolean;
}

interface Category {
  categoryId: number;
  lang: string;
  categoryName: string;
}

interface Params {
  id: string;
}

// type DetailProp = {
//   categoryId : number;
//   cultureId : number;
// }

function CultureDetail() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  const { id } = useParams();
  // @ts-ignore
  const [CategoryNumber, cultureNumber] = id.split("_");
  // console.log(CategoryNumber);
  // console.log(cultureNumber);

  function getCategoryName(categoryNumber: string): string {
    switch (categoryNumber) {
      case "1":
        return "ANNIVERSARY";
      case "2":
        return "TRADITION";
      case "3":
        return "ART";
      case "4":
        return "FOOD";
      default:
        throw new Error(`Invalid category number: ${categoryNumber}`);
    }
  }

  const [apiData, setApiData] = useState<ApiData | null>(null);
  const NewCategoryName = getCategoryName(CategoryNumber);
  // console.log(NewCategoryName)

  useEffect(() => {
    // API 호출
    axios
      .get(
        `http://j8a608.p.ssafy.io:8080/api/cultures/1?common=${NewCategoryName}`
      )
      .then((res) => {
        setApiData(res.data);
        console.log(apiData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // @ts-ignore
  const CultureInfo = apiData?.data;
  if (!apiData) return null;
  // console.log(CultureInfo)

  const categoryN = CultureInfo.categoryName;
  const categoryID = categoryN[0].categoryId;
  // console.log(categoryID)

  const culCategory = () => {
    if (language === "CN") {
      return categoryN[1].categoryName;
    } else if (language === "VI") {
      return categoryN[2].categoryName;
    } else {
      return categoryN[0].categoryName;
    }
  };

  const DetailInfo = CultureInfo.cultureList;
  // console.log(DetailInfo)

  const getColorCode = () => {
    if (categoryID === 1) {
      return "#FF6B6B";
    } else if (categoryID === 2) {
      return "#4D96FF";
    } else if (categoryID === 3) {
      return "#6BCB77";
    } else if (categoryID === 4) {
      return "#FFD93D";
    }
    // 다른 색상에 대한 처리
    return "#FFE69A";
  };

  const targetCulture = DetailInfo.find(
    // @ts-ignore
    (culture) => culture.cultureId.toString() === cultureNumber
  );
  console.log(targetCulture);

  const getTitle = (id: string): string => {
    if (language === "CN") {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[1].title;
    } else if (language === "VI") {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[2].title;
    } else {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[0].title;
    }
  };

  const getDiscription = (id: string): string => {
    if (language === "CN") {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[1].description;
    } else if (language === "VI") {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[2].description;
    } else {
      // @ts-ignore
      return targetCulture.cultureContentQueryDtoList[0].description;
    }
  };
  // @ts-ignore
  const getURL = (id: string): string => {
    // @ts-ignore
    return targetCulture.url;
  };
  console.log(getURL(cultureNumber));

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "280px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.dark",
          marginBottom: "50px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: "50px",
            alignItems: "center",
            fontFamily: "MaplestoryOTFBold",
          }}
        >
          한국 문화 학습
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          // float: "right",
          marginBottom: "50px",
          alignSelf: "center",
          // justifyContent: "flex-end",
        }}
      >
        <BackBtn width="280px" />
      </Box>
      <CultureBox
        contentType={culCategory()}
        backColor={getColorCode()}
        title={getTitle(cultureNumber)}
        content={getDiscription(cultureNumber)}
        videoURL={getURL(cultureNumber)}
        others={[1, 2, 3, 4]}
      />
    </div>
  );
}

export default CultureDetail;
