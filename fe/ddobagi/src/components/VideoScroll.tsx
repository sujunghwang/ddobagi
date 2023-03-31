import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import styles from "./VideoScroll.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";

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
        modules={[Pagination, Autoplay, Mousewheel]}
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
      </Swiper>
    </div >
  );
}

export default VideoScroll;
