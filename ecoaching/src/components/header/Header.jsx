import React from 'react'
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa'
import girlwithlaptop from "../../assets/girlwithlaptop.webp"
import graph from "../../assets/graph.png"
import {HiStar} from "react-icons/hi"
const Header = () => {
  return (
    <div className='header mx-auto my-10 max-w-[1200px]'>
<Navbar></Navbar>
<div>
  <div className='grid md:flex '>
    <div className='flex flex-col justify-end gap-8'>
      <div className=' grid font-bold text-6xl gap-5 items-baseline'> 
        <span>Take Your </span>
        <span> <span className='text-green-600'>Dreams</span> To The</span>
        <span>Next Level!</span>
      </div>
      <div>
        <p className='text-slate-600 w-[500px] font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam delectus excepturi ullam consectetur deserunt nulla sequi, a architecto, sunt quasi ut sit eaque.</p>
      </div>
      <div className='flex'>
        <input className='border w-[300px] h-10 px-4  border-green-600' type="text" placeholder='Search for a course' />
        <button className='text-white bg-green-600 font-bold px-4 h-10  rounded-r-md' ><FaSearch></FaSearch> </button>
      </div>
    </div>
    <div>
      <div className='flex'>
      <img src={graph} alt="" />
     <img className='w-[100%] md:h-[500px] relative -left-[500px]' src={girlwithlaptop} alt="" />
      </div>
      <div className='flex items-center'>
        <div className='text-white bg-green-600 p-2'>
        <HiStar></HiStar>
        </div>
        <div>
          <p className='font-semibold text-xl'>Web development</p>
          <p>4520reviews (5.0)</p>
        </div>
      </div>
    </div>
    
    <div className='flex flex-col justify-end items-end font-semibold gap-5 '>
      <div>
        <p className='text-green-600 text-4xl'>100</p>
        <p>Subject to choose from</p>
      </div>
      <div>
        <p  className='text-green-600 text-4xl'>120+</p>
        <p>Awesome Courses</p>
      </div>
      <div>
        <p  className='text-green-600 text-4xl'>120</p>
        <p>Professional Teacher</p>
      </div>
     </div>
    
  </div>
</div>
    </div>
  )
}

export default Header