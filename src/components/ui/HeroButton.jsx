import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const HeroButton = () => {
  return (
    <div>
        <button className="mt-2 flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg shadow-black/22 hover:scale-105 transition">
          Get Started - it's free
          <span className="bg-white text-black w-7 h-7 flex items-center justify-center rounded-full">
          <IoMdArrowForward className='text-[20px]'/>
          </span>
        </button>
    </div>
  )
}

export default HeroButton