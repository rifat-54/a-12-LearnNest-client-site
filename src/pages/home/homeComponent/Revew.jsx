import React from "react";
import UseAxiosPublic from "../../../hook/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from "../../../components/ShareComponets/LoadingSpiner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Revew = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: revew = [], isLoading } = useQuery({
    queryKey: ["revew"],
    queryFn: async () => {
      const { data } = await axiosPublic("/revew");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  

  return (
    <div>
        <h2 className="text-3xl font-semibold text-center my-11">Student Feedback</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        
        {
            revew.map(item=><SwiperSlide key={item._id}>
                
                <div className="flex flex-col justify-center text-center md:w-9/12 mx-auto items-center">
                <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                <p className="mt-3">Class Title: <span className="font-semibold">{item?.title}</span></p>
                <p className="mt-3 md:w-11/12 mx-auto text-center text-gray-500">{item?.feedback}</p>
                <div className="mt-3">
                    <img className="w-16 h-16 rounded-full" src={item?.userPhoto} alt="" />
                </div>
                <h3 className="text-xl font-semibold mt-3">{item?.userName}</h3>
              </div>
                
                
                </SwiperSlide>)
        }
        
      </Swiper>
    </div>
  );
};

export default Revew;
