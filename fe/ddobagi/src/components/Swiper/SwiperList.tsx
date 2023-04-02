// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { RootState } from "../../redux/RootReducer";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import {
  Button,
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
  dataProp: ApiData;
  boxColor: string;
};

function SwiperList({ dataProp, boxColor }: CultureProp) {
  const getColorCode = (color: string): string => {
    if (color === "red") {
      return "#ffcfd8";
    } else if (color === "green") {
      return "#e8f9f6";
    } else if (color === "blue") {
      return "#e0f1ff";
    } else if (color === "yellow") {
      return "#fff9e2";
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
  };

  // const SlidesData = Test230328.data
  const SlidesData = dataProp?.data;
  if (!SlidesData) return null;

  const Slides = SlidesData.cultureList;

  const CategoryNumber = SlidesData.categoryName[0].categoryId;

  const getYouTubeThumbnailUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: colorCode,
        borderRadius: "0px 0px 30px 30px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2) ",
        overflow: "hidden",
        marginBottom: "8rem",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay, Mousewheel]}
        spaceBetween={100}
        mousewheel={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3300, disableOnInteraction: false }}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          760: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1520: {
            slidesPerView: 4,
          }
        }}
        style={{ padding: "3rem" }}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.cultureId}>
            <Card
              sx={{ maxWidth: 345, borderRadius: "10px" }}
              onClick={() => moveCulture(slide.cultureId)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={getYouTubeThumbnailUrl(slide.url)}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontFamily: "MaplestoryOTFLight",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                    gutterBottom
                  >
                    {language === "CN"
                      ? slide.cultureContentQueryDtoList[1].title
                      : language === "VI"
                        ? slide.cultureContentQueryDtoList[2].title
                        : slide.cultureContentQueryDtoList[0].title}
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
