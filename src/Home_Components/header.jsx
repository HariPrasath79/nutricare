import React from 'react'

import logo from '../assets/logo_svg.png'
import { CgProfile } from "react-icons/cg";

export default function Header(){
    return(
        <div className='bg-slate-100'>
        <div className="flex justify-between  w-full">
          <div className='flex flex-row pt-2 justify-center items-center'>
            <img className="h-9 w-9 ml-10 mr-3 my-3 font object-fill bg-no-repeat" src={logo} alt="logo" />
            <h2 className='font-title text-2xl font-semibold text-cyan-600'>NUTRICARE</h2>
          </div>
          <div className='bg-white w-4/12 flex flex-row-reverse items-center'>
            <CgProfile className='h-7 w-7 mt-3 mr-7 cursor-pointer hover:text-rose-500' />
            <p className='px-3 pt-3 mx-5 my-3 hover:text-rose-500 cursor-pointer'>Sign in</p>
          </div>
        </div>

        <div className='flex'>
          <div className='flex flex-col justify-center w-8/12 h-80'>
            <h2 className='font-slogan ml-10 font-bold text-5xl'>Personalized Food and Disease Guidance</h2>
            <p className=' ml-10 pt-3 font-quicksand text-slo text-2xl'>Health on your plate, wellness begins with right
              eating habit,<br></br> your path to healthier tommorow</p>
            <button className='px-2 py-2 w-20 my-3 ml-10 rounded-3xl bg-orange-300 hover:bg-orange-400'>Explore</button>
          </div>
          <div className='w-4/12 h-96 bg-cover-img bg-cover'>
          </div>
        </div>
      </div>
    )
}
