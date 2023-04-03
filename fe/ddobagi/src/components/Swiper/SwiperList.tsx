// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { RootState } from "../../redux/RootReducer";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { Button, Box, Typography, CardActionArea, CardMedia, CardContent, Grid } from "@mui/material";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

interface Data {
  categoryName: Category[];
  cultureList: Culture[];
}

interface ApiData {
  data: Data;
}

// type CultureProp = {
//   dataProp : ApiData;
//   boxColor: string;
// }

type CultureProp = {
  dataProp : ApiData;
  boxColor: string;
}

function SwiperList({
  dataProp,
  boxColor,
 } : CultureProp) {

  const getColorCode = (color: string): string => {
    if (color === "red") {
      return "#FF6B6B";
    }
    else if (color === "green") {
      return "#6BCB77"
    }
    else if (color === "blue") {
      return "#4D96FF"
    }
    else if (color === "yellow") {
      return "#FFD93D"
    }
    // 다른 색상에 대한 처리
    return "#FFE69A";
  };
  
  const colorCode = getColorCode(boxColor);

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  const navigate = useNavigate();
  // const moveCulture = () => {
  //   navigate("/cultureitem");
  // }
  const moveCulture = (cultureId: number) => {
    navigate(`/cultureitem/${CategoryNumber}_${cultureId}`);
  }

  // const SlidesData = Test230328.data
  const SlidesData = dataProp?.data
  if (!SlidesData) return null;
  console.log(SlidesData)

  const Slides = SlidesData.cultureList

  const CategoryNumber = SlidesData.categoryName[0].categoryId

  const getYouTubeThumbnailUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.split('v=')[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  return (
    <Box 
      sx= {{
        width:"80%",
        height:"470px",
        marginLeft:"10%",
        backgroundColor: colorCode, 
        borderRadius: "30px",
        boxShadow: "inset 0px 10px 0px rgba(0, 0, 0, 0.25) ",
        // overflow : "auto",
        overflow : "hidden",
        // margin : "1rem 5rem 5rem 5rem",

      }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{
          marginTop: "30px",
          marginLeft: "10px",
          padding: "30px"
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={(slide.cultureId)}>
            <Card
              sx={{ maxWidth: 345, borderRadius:"20px" }}
              onClick={() => moveCulture(slide.cultureId)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={getYouTubeThumbnailUrl(slide.url)} 
                />
                <CardContent
                  sx={{
                    height: "80px"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:"20px",
                      fontFamily: "CookieRun-Regular",
                      textOverflow: "ellipsis",
                    }}
                    gutterBottom
                  >
                    {language === "CN" ?
                      slide.cultureContentQueryDtoList[1].title
                    : language === "VI" ?
                      slide.cultureContentQueryDtoList[2].title
                    : slide.cultureContentQueryDtoList[0].title
                    }
                  </Typography>
                </CardContent>
              </CardActionArea> 
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SwiperList;