import React from 'react'
import Course from './Course'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdBook, MdBookOnline, MdBookmarkBorder, MdOutlineBook, MdOutlineFavoriteBorder, MdOutlineWatchLater, MdStarBorder, MdWatch } from "react-icons/md"
import { BsBook } from "react-icons/bs"
import { GoPerson } from "react-icons/go"
import { AiOutlineVideoCamera } from "react-icons/ai"
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const TopCourses = () => {
  const courses = [
    {
      id: 1,
      name: "Adam John",
      image: "https://i.ibb.co/3CWh65K/image.png",
      title: "Applied Data Science Specialization",
      rating: 4.5,
      lesson: 10,
      period: "1 hr 50 min ",
      students: 125,
      lectures: 12
    },
    {
      id: 2,
      name: "Adam John",
      image: "https://i.ibb.co/dGXkNBy/image.png",
      title: "Web Development Bootcamp",
      rating: 4.5,
      lesson: 10,
      period: "2 hr 10 min ",
      students: 125,
      lectures: 12
    },
    {
      id: 3,
      name: "Adam John",
      image: "https://i.ibb.co/PMKXVg1/image.png",
      title: "Digital Marketing Masterclass",
      rating: 4,
      lesson: 5,
      period: "1 hr 50 min ",
      students: 200,
      lectures: 10
    },
    {
      id: 4,
      name: "Adam John",
      image: "https://i.ibb.co/GdrkFzr/image.png",
      title: "Machine Learning Fundamentals",
      rating: 4.8,
      lesson: 20,
      period: "2 hr 50 min ",
      students: 320,
      lectures: 20
    },
    {
      id: 5,
      name: "Adam John",
      image: "https://i.ibb.co/XbDdx5C/image.png",
      title: "Graphic Design Essentials",
      rating: 4.5,
      lesson: 10,
      period: "1 hr 30 min ",
      students: 105,
      lectures: 10
    },
    {
      id: 6,
      name: "Adam John",
      image: "https://i.ibb.co/qWWzNpH/image.png",
      title: "Business Finance Strategies",
      rating: 4.5,
      lesson: 10,
      period: "1 hr 50 min ",
      students: 125,
      lectures: 12
    }
  ]
  return (
    <div>
      <div className="flex flex-col  md:mx-[200px]  ">
        <div className="t-title flex flex-col justify-center items-center mb-10">
          <h1 className='text-4xl w-[80%] md:w-[500px] font-semibold mb-5 text-center'>Our Top Selling Courses</h1>
          <p className='text-slate-600 w-[80%] md:w-[500px] font-semibold  text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi velit quidem necessitatibus delectus suscipit aliquid, at a rem, possimus laudantium saepe vero fugiat?</p>
        </div>
        <div className="hidden md:flex">
          <Swiper
            slidesPerView={4}
            spaceBetween={15}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mb-24 ml-10 max-w-[1500px]"
          >
            {/* Create a container for the slides */}
            {courses.map((course) => (
              <SwiperSlide >
                <Course course={course}></Course>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
        <div className="flex md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}

            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mb-24 ml-10 max-w-[1500px]"
          >
            {/* Create a container for the slides */}
            {courses.map((course) => (
              <SwiperSlide >
                <Course course={course}
                key={course.id}
                ></Course>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TopCourses