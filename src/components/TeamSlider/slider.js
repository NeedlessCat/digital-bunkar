import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./SliderStyle.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Card from "./card";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -150,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card id="team-box1" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box2" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box3" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box4" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box5" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box6" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box7" />
        </SwiperSlide>
        <SwiperSlide>
          <Card id="team-box8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
