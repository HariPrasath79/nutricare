import React from 'react'

import { LiaArrowCircleRightSolid } from "react-icons/lia"

import lavleen from '../assets/experts/Lavlee.jpg'
import pooja from '../assets/experts/PoojaMakhija.jpg'
import ryan from '../assets/experts/Ryan.jpg'
import shikha from '../assets/experts/Shikha.jpg'

export default function ExpertsNews() {

    return (
        <div className='mb-4 lg:mx-[10%] md:mx-3'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className=' font-bold text-3xl  '>HIGH RATED EXPERTS</h1>
                <button className='flex flex-row justify-center items-center gap-3 hover:text-rose-600'>
                    VIEW ALL
                    <LiaArrowCircleRightSolid className='' />
                </button>
            </div>
            <hr className='mb-8 mt-3'></hr>

            <div className="grid gap-10 grid-cols-2 grid-rows-2">

                <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
                    <img className='h-24 w-24 rounded-full object-cover' src={lavleen} />
                    <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-xl font-semibold'>Lavleen Kaur</h1>
                        <p className='w-6/6'>Lavleen Kaur is a clinical nutritionist and  lifestyle coach from Chandigarh. She is a life member of Indian Dietetic Association</p>
                    </div>
                </div>

                <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
                    <img className='h-24 w-24 rounded-full object-cover' src={pooja} />
                    <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-xl font-semibold'>Pooja Makhija</h1>
                        <p>A true and hard-bred nutritionist from Mumbai, Pooja Makhija holds an MSc in Food Science and Nutrition. </p>
                    </div>
                </div>
                <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
                    <img className='h-24 w-24 rounded-full object-cover' src={ryan} />
                    <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-xl font-semibold'>Ryan Fernando</h1>
                        <p className='w-'>Ryan Fernando is India's most famous Nutritionist. Celebrity Nutritionist to Virat Kohli and Anushka Sharma</p>
                    </div>
                </div>
                <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
                    <img className='h-24 w-24 rounded-full object-cover' src={shikha} />
                    <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-xl font-semibold'>Dr Shikha Sharma</h1>
                        <p>Dr Shikha Sharma is the founder of Dr Shikha’s Nutri Health, which is a platform offering comprehensive health and diet management</p>
                    </div>
                </div>
            </div>
        </div>
    )
}