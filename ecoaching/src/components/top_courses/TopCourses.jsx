import React from 'react'
import Course from './Course'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const TopCourses = () => {
    const courses = [

    ]
  return (
    <div>
     <div className='flex flex-col'>
     <h1>Our Top Selling Courses</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illo.</p>
       <Course></Course>
       <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        
      </Swiper>
     </div>
    </div>
  )
}

export default TopCourses