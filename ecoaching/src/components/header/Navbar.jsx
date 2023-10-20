import React from 'react'
import {RiShoppingCart2Line} from "react-icons/ri"
import {GoPerson} from "react-icons/go"
import {FaTelegramPlane} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mx-auto my-10 max-w-[1200px] grid md:flex justify-center md:justify-between items-center'>
       <div className='flex gap-2 items-baseline'>
        <FaTelegramPlane className='text-green-600 font-extrabold text-4xl'></FaTelegramPlane>
        <h1  className=' font-extrabold text-4xl'>E-Coaching</h1>
       </div>
       <ul className='grid md:flex justify-center py-3 md:justify-between text-sm items-center gap-5 font-semibold text-slate-600'>
        <li>Home</li>
        <li>Services</li>
        <li>Popular Courses</li>
        <li>Top Selling Courses</li>
        <li>All Courses</li>
       </ul>
       <div className='grid justify-center py-3 md:justify-between font-semibold md:flex gap-5 text-xl items-center'>
         <RiShoppingCart2Line></RiShoppingCart2Line>
        <button className='bg-green-600 flex items-center gap-1 px-4 py-2 rounded-md text-white'> <GoPerson></GoPerson> Sign/ Register</button>
       </div>
    </nav>
  )
}

export default Navbar