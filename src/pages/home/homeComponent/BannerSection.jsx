import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ShareSlider from "./ShareSlider";

import img1 from '../../../assets/degital.webp'
import img2 from '../../../assets/graphics.jpg'
import img3 from '../../../assets/online.jpg'

const BannerSection = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ShareSlider image={img1} title={'new'} text={'rifat'} ></ShareSlider>
        </SwiperSlide>
        <SwiperSlide>
            <ShareSlider image={img2} title={'new'} text={'rifat'} ></ShareSlider>
        </SwiperSlide>
        <SwiperSlide>
            <ShareSlider image={img3} title={'new'} text={'rifat'} ></ShareSlider>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default BannerSection;
