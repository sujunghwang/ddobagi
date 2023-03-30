import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import styles from "./VideoScroll.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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

  return (
    <div
      ref={componentRef}
      style={{ backgroundColor: color }}
      className={styles.FContainer}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        scrollbar={{ draggable: true }}
        style={{
          padding: "3rem",
        }}
        keyboard={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 4,
          }
        }}
      >        {videolist.situationList.map((item, index) => (
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
      </Swiper>
    </div>
  );
}

export default VideoScroll;
