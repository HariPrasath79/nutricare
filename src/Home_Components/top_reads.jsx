import React from 'react'


import { LiaArrowCircleRightSolid } from "react-icons/lia"

import dog from '../assets/dog_img.jpg'
import alkaline from '../assets/alkaline.jpg'
import workstress from '../assets/workstress.jpg'
import soda from '../assets/soda.jpeg'


export default function TopReads() {
    return (
        <div className='mb-10 lg:px-[10%] md:px-3 pt-32'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className=' font-bold text-3xl  '>TOP READS</h1>
                <button className='flex flex-row justify-center items-center gap-3 hover:text-rose-600'>
                    VIEW ALL
                    <LiaArrowCircleRightSolid className='' />
                </button>
            </div>
            <hr className='mb-8 mt-3'></hr>
            <div className='grid grid-cols-4 gap-5'>
                <div className=' hover:text-rose-700 cursor-pointer'>
                    <img className='object-cover h-60 rounded-md hover:opacity-80' src={dog} />
                    <p className='font-semibold my-4'>Dog owners have low blood pressure and a lower risk of heart disease</p>
                </div>
                <div className=' hover:text-rose-700 cursor-pointer'>
                    <img className='object-cover h-60 rounded-md transition hover:opacity-80' src={soda} />
                    <p className='font-semibold my-4'>Diet Soda and Ultra-Processed Food May Increase Your Depression Risk</p>
                </div>
                <div className=' hover:text-rose-700 cursor-pointer'>
                    <img className='object-cover h-60 rounded-md transition hover:opacity-80' src={workstress} />
                    <p className='font-semibold my-4'>Work Stress Could Nearly Double Heart Disease Risk for Men, Study Shows</p>
                </div>
                <div className=' hover:text-rose-700 cursor-pointer'>
                    <img className='object-cover h-60 rounded-md transition hover:opacity-80' src={alkaline} />
                    <p className='font-semibold my-4'>The alkaline diet: What you need to know</p>
                </div>

            </div>
        </div>
    )
}