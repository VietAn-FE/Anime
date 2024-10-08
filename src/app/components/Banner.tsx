"use client";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Banner = () => {
  const dataRender = [
    { url: "/images/phim1.webp", title: "Film" },
    { url: "/images/phim2.webp", title: "Film" },
    { url: "/images/phim3.webp", title: "Film" },
    { url: "/images/phim4.webp", title: "Film" },
    { url: "/images/phim5.webp", title: "Film" },
  ];

  return (
    <section className="home__banner">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade]}
        className="mySwiper"
      >
        {dataRender && dataRender.length
          ? dataRender.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={item.url || "null"}
                    alt={item.title}
                    className="w-full aspect-video object-cover"
                  />
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </section>
  );
};

export default Banner;
