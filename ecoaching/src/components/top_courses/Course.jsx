import React from 'react'
import {MdOutlineFavoriteBorder, MdStarBorder} from "react-icons/md"
const Course = () => {
  return (
    <div className='course'>
      <div className='course-container'>
        <div className='p-1 bg-white rounded-full text-amber-500'>
          <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
        </div>
        <img src="" alt="" />
        <div  className='p-1 bg-white rounded-full text-amber-500'>
          <p>30% off</p>
        </div>
        <div>
         <div className="name">
         <img src="" alt="" />
         <p className="name">Adam jon</p>
         </div>
         <div className="rating">
          <MdStarBorder className='text-amber-500'></MdStarBorder>
          <span>(4.5)</span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Course