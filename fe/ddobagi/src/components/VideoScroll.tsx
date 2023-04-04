import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import styles from "./VideoScroll.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Container from "@mui/material/Container";

interface SituationTrans {
  lang: string;
  title: string;
}

interface Situation {
  situationId: number;
  thumbnail: string;
  progress: number;
  situationTransList: SituationTrans[];
  isCompleted: boolean;
}

interface Videolist {
  situationList: Situation[];
}

type VidProp = {
  color: string;
  videolist: Videolist;
  categoryName: string;
};

function VideoScroll({ color, videolist, categoryName }: VidProp) {
  const componentRef = useRef<HTMLDivElement>(null);
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );

  const lang = language === "CN" ? 0 : language === "VI" ? 2 : 1;
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={componentRef}
      className={styles.FContainer}
    >
      <Container maxWidth="xl">
        <div className={styles.CategoryName}>{categoryName}</div>
      </Container>
      <Container maxWidth="xl">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
            disabledClass: `${styles.disable}`,
          }}
          spaceBetween={100}
          grabCursor={true}
          pagination={{
            // el: `${styles.Pagenation}`,
            clickable: true,
          }}
          autoplay={{ delay: 3300, disableOnInteraction: true }}
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
              slidesPerView: 3,
            }
          }}
          style={{ padding: "3rem" }}

        >

          {videolist.situationList.map((item, index) => (
            <SwiperSlide key={index}
            >
              <VideoCard
                situationThumbnail={item.thumbnail}
                progress={item.progress}
                situationTitle={item.situationTransList[lang].title}
                situationId={item.situationId}
                isCompleted={item.isCompleted}
                color={color}
                categoryName={categoryName}
              />
            </SwiperSlide>
          ))}
          <div className={styles.NavGroup} >
            <div ref={prevRef} className={styles.NavBtn1}><NavigateBeforeIcon sx={{ fontSize: "2.5rem" }} /></div>
          </div>
          <div ref={nextRef} className={styles.NavBtn2}><NavigateNextIcon sx={{ fontSize: "2.5rem" }} /></div>
        </Swiper>
      </Container>
    </div >
  );
}

export default VideoScroll;
