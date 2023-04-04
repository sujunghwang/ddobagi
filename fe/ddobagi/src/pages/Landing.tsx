import React, { useEffect } from "react";
import styles from "./CategoryList.module.scss";
import MainOne from "../components/FullPage/MainOne";
import MainTwo from "../components/FullPage/MainTwo";
import MainThree from "../components/FullPage/MainThree";
import MainFour from "../components/FullPage/MainFour";
import MainFive from "../components/FullPage/MainFive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";

function Landing() {

  useEffect(() => {
    document.body.classList.add(styles.Noscroll);
    return () => {
      document.body.classList.remove(styles.Noscroll);
    };
  }, []);



  return (
    <>
      <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className={styles.parallax}>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(147, 181, 236, 0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(147, 181, 236, 0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(147, 181, 236, 0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#92B4EC" />
        </g>
      </svg>
      <div className={styles.AnimeBack}></div>
      <div className={styles.BlueBottom}></div>
      <div className={styles.StartLogo}>또바기</div>
      <Swiper
        modules={[Mousewheel, Pagination]}
        mousewheel={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        direction="horizontal"
      >
        <SwiperSlide>
          <MainOne />
        </SwiperSlide>
        <SwiperSlide>
          <MainTwo />
        </SwiperSlide>
        <SwiperSlide>
          <MainThree />
        </SwiperSlide>
        <SwiperSlide>
          <MainFour />
        </SwiperSlide>
        <SwiperSlide>
          <MainFive />
        </SwiperSlide>
      </Swiper>
    </>

  );
}

export default Landing;
