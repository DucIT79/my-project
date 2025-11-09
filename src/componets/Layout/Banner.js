import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Banner.module.css";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

export const Banner = () => {
  return (
    <div className={styles.bannerSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className={styles.slider}
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" className={styles.bannerImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" className={styles.bannerImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" className={styles.bannerImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
