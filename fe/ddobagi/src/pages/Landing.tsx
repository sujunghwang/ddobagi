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
      <div className={styles.StartAnime}></div>
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
