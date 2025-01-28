import React from "react";
import UseAxiosPublic from "./../../../hook/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';


// import required modules
import { Pagination } from "swiper/modules";
import TopClassCard from "./TopClassCard";

const TopClasses = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: topClass = [], isLoading } = useQuery({
    queryKey: ["top-class"],
    queryFn: async () => {
      const { data } = await axiosPublic("/most-enroll");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  console.log(topClass);
  return (
    <div className="my-20 md:w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1, // Phones (small screens)
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.5, // Slightly larger phones
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2, // Small tablets
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5, // Large tablets
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3, // Small desktops
              spaceBetween: 30,
            },
            
          }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
            topClass.map((item,index)=><SwiperSlide key={index}>
            <TopClassCard item={item}></TopClassCard>
          </SwiperSlide>)
        }

        
        
      </Swiper>
    </div>
  );
};

export default TopClasses;
