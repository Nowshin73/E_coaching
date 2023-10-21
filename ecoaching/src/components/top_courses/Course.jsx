import React from 'react'
import {MdBook, MdBookOnline, MdBookmarkBorder, MdOutlineBook, MdOutlineFavoriteBorder, MdOutlineWatchLater, MdStarBorder, MdWatch} from "react-icons/md"
import {BsBook} from "react-icons/bs"
import {GoPerson} from "react-icons/go"
import {AiOutlineVideoCamera} from "react-icons/ai"
const Course = ({course}) => {
  const { id, name, image, title, rating, lesson, period, students, lectures} = course;
  
  return (
    <div className='course border rounded-md w-[90%]  h-fit md:w-[350px] md:h-[530px] shadow-lg bg-white' id={id}>
        <img className='w-full h-[200px] md:h-[300px] rounded-md' src={image} alt="banner"/>
        <div className='fav-icon p-1 relative -top-72 font-semibold left-2 text-xl w-fit bg-white rounded-full text-amber-500'>
          <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
        </div>
        <div  className='offer p-2 bg-white relative -top-20 left-40 md:left-60 font-semibold  text-right w-fit rounded-full text-amber-500'>
          <p>30% off</p>
        </div>
        <div className='c-info relative  -top-16 p-2 flex flex-col'> 
       <div className='flex justify-between'>
       <div className="name flex gap-3 items-center">
         <img className='rounded-[50%] w-11 h-10 border border-green-600' src="https://i.ibb.co/ySCbKmm/image.png" alt="" />
         <p className="name text-lg font-semibold">{name}</p>
         </div>
         <div className="rating flex items-center gap-1 text-slate-500 font-semibold">
          <MdStarBorder className='text-amber-500'></MdStarBorder>
          <span>({rating})</span>
         </div>
       </div>
         <div className="title mt-3 text-lg font-semibold">
          <h3>{title}</h3>
         </div>
         <div className="course-info my-5 grid grid-cols-2">
           <div className="lessons">
            <div className='flex gap-2 items-center font-semibold text-slate-500'>
            <BsBook className='font-semibold text-slate-500'></BsBook>
            <p>{lesson} Lessons</p>
            </div>
            <div className='flex gap-2 items-center font-semibold text-slate-500'>
              <MdOutlineWatchLater className='font-semibold text-slate-500'></MdOutlineWatchLater>
              <p>{period}</p>
            </div>
           </div>
           <div className="students">
            <div className='flex gap-2 items-center font-semibold text-slate-500'>
            <GoPerson className='font-semibold text-slate-500'></GoPerson>
            <p>{students} students</p>
            </div>
            <div className='flex gap-2 items-center font-semibold text-slate-500'>
              <AiOutlineVideoCamera className='font-semibold text-slate-600'></AiOutlineVideoCamera>
              <p>{lectures} Lectures</p>
            </div>
           </div>
         </div>
          <button className='px-4 py-2 bg-green-600 text-white rounded-md font-semibold'>Add To Cart</button>
        </div>
      </div>

  )
}

export default Course