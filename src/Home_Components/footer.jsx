import React from 'react'

export default function Footer(){
    return(
        <div className='bg-[#fbf5ed] pt-10 mt-12 flex flex-row lg:px-[10%] md:px-7 items-center'>
        <div className=' flex flex-col gap-5 w-6/12'>
        <h1 className='font-title text-2xl font-semibold text-cyan-700'>NUTRICARE</h1>
        <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-semibold'>Get connected with us</h2>
        <p>Fill your inbox with wellness and health tips form our experts and our team</p>
        <form className="relative">
          <input type="text" placeholder="Enter your email" className="outline-none border border-gray-950 w-64 h-14 pl-2" />
          <button type="submit" className=" h-14 bg-teal-700 px-5 text-white font-semibold hover:bg-rose-500">Submit</button>
        </form>
        </div>

        <p>&#169; 2023 NutriCare Health. All rights reserved. Our website services, content 
          and products are for informational purposes only. </p>
        </div>

        <div className='flex flex-row w-6/12 pl-44'>
          <div className='flex flex-col gap-5'>
          <p className='hover:text-rose-500 cursor-pointer'>About us</p>
          <p className='hover:text-rose-500 cursor-pointer'>Contact Us</p>
          <p className='hover:text-rose-500 cursor-pointer'>Careers</p>
          <p className='hover:text-rose-500 cursor-pointer'>Privacy Policy</p>
          <p className='hover:text-rose-500 cursor-pointer' >Health Topics</p>
          </div>
          
        </div>
      </div>
    )
}