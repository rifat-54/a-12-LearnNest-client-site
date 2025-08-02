

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
    <div className='max-h-[450px]'>
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
            <ShareSlider image={img1} title={'Unlock Your Potential with Expert-Led Learning'} text={'Join us today and explore a world of knowledge, skills, and opportunities. Empower your journey with expert-guided classes designed to help you succeed.'} ></ShareSlider>
        </SwiperSlide>
        <SwiperSlide>
            <ShareSlider image={img2} title={'Grow Your Business with Powerful Digital Strategies'} text={'Reach your audience, increase engagement, and boost your revenue with customized marketing solutions tailored for your success.'} ></ShareSlider>
        </SwiperSlide>
        <SwiperSlide>
            <ShareSlider image={img3} title={'Master In-Demand Skills for a Better Future'} text={'From coding to creative design, gain the expertise you need with courses crafted by industry professionals.'} ></ShareSlider>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default BannerSection;
