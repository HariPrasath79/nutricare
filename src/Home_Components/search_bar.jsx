import React from 'react'

import { BsSearch } from "react-icons/bs"
import share from '../assets/share.png'

export default function SearchBar() {
    return (
        <div className="h-20 w-full flex flex-col justify-center items-center my-20">
            <form className="relative">
                <BsSearch className='absolute left-5 top-[40%] ' />
                <input type="text" placeholder="Search your condition" className="rounded-full h-16 w-[630px] pl-16 outline-none border border-gray-600 focus:border-blue-400" />
                <button type="submit" className=" absolute right-3 top-[20%] h-10 w-14  rounded-full bg-sky-100 hover:bg-gray-900 hover:text-white">Go</button>
            </form>

            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5 w-[500px] my-6">
                <button className='flex flex-row items-center gap-2 justify-center bg-red-100 rounded-full h-9 hover:opacity-75'>
                    GERD
                    <img className='h-4 w-4' src={share} />
                </button>
                <button className='flex flex-row items-center gap-2 justify-center bg-red-100 rounded-full h-9 hover:opacity-75'>
                    Asthma
                    <img className='h-4 w-4' src={share} />
                </button>
                <button className='flex flex-row items-center gap-2 justify-center bg-red-100 rounded-full col-span-2 hover:opacity-75'>
                    Diabetics
                    <img className='h-4 w-4' src={share} />
                </button>
                <button className='flex flex-row items-center gap-2 justify-center bg-red-100 rounded-full col-span-2 hover:opacity-75'>
                    Heart Diseases
                    <img className='h-4 w-4' src={share} />
                </button>
                <button className='flex flex-row items-center gap-2 justify-center bg-red-100 rounded-full h-9 hover:opacity-75'>
                    Malaria
                    <img className='h-4 w-4' src={share} />
                </button>
                <button className='flex flex-row items-center gap-2 justify-center rounded-full h-9 hover:opacity-75'>
                    more..
                    <img className='h-4 w-4' src={share} />
                </button>
            </div>
        </div>
    )
}