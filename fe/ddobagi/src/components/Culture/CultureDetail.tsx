import React from "react";
import { Typography, Box } from "@mui/material";
// import Grid from '@mui/joy/Grid';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import CultureBox from "./CultureDetailBox";
// import cultureTest2 from "./cultureTest2.json"
import axios from "axios";
import styles from "./Culture.module.scss";

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

  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

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

  // const [apiData, setApiData] = useState<ApiData | null>(null);
  const [apiData, setApiData] = useState<ApiData>();
  const NewCategoryName = getCategoryName(CategoryNumber);
  // console.log(NewCategoryName)

  useEffect(() => {
    // API 호출
    axios
      .get(
        `https://j8a608.p.ssafy.io/api/cultures/${userId}?common=${NewCategoryName}`
      )
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
        console.log(apiData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // }, [NewCategoryName, setApiData]);

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
      // return "#FF6B6B";
      return "#FFCFD8";
    } else if (categoryID === 2) {
      // return "#4D96FF"
      return "#FFF9E2";
    } else if (categoryID === 3) {
      // return "#6BCB77"
      return "#E8F9F6";
    } else if (categoryID === 4) {
      // return "#FFD93D"
      return "#e0f1ff";
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

  // @ts-ignore
  const OtherCulture = DetailInfo.filter((cultureOther) => {
    return cultureOther.cultureId !== parseInt(cultureNumber);
  });

  console.log(cultureNumber);
  console.log(OtherCulture);
  console.log(targetCulture);

  return (
    <div>
      {/* <div className={styles.Banner}>
        <div
          className={styles.Header}
          style={{
            fontFamily:
              language === "CN"
                ? "JingNanMaiYuanTi"
                : language === "VI"
                ? "UVNHaiBaTrung"
                : "MaplestoryOTFLight",
          }}
        >
          {language === "CN"
            ? "学习韩国文化"
            : language === "VI"
            ? "tìm hiểu văn hóa hàn quốc"
            : "한국 문화 학습"}
        </div>
      </div> */}
      <CultureBox
        contentType={culCategory()}
        backColor={getColorCode()}
        title={getTitle(cultureNumber)}
        content={getDiscription(cultureNumber)}
        videoURL={getURL(cultureNumber)}
        others={OtherCulture}
      />
    </div>
  );
}

export default CultureDetail;
