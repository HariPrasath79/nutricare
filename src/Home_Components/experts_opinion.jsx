import React from 'react'
import faras from '../assets/faras.jpg'
import harish from '../assets/harish_kumar.jpg'

export default function ExpertsOpinion(){
    return(
        <div className='bg-orange-200 my-10 h-[486px] py-5'>
        <h1 className='text-center font-bold text-3xl '>EXPERTS OPINION</h1>
        <div className='flex justify-center  mt-6 gap-6'>
          <div className='h-96 w-80 bg-slate-100 mb-6'>
            <div className='flex flex-row items-center ml-3 my-3'>
              <img className='h-28 w-28 rounded-full object-cover' src={faras} />
              <div className='ml-2'>
                <p className='font-semibold text-xl'>Faras</p>
                <p>Food Technologist</p>
              </div>
            </div>
            <p className='pl-2 max-w-[300px]]'>
              I believe that good health is within reach for everyone, and it begins with the food 
              choices we make. We are committed to making personalized nutrition and disease information accessible to all, 
              helping individuals make informed choices for a healthier, happier life.
            </p>
          </div>
          <div className='h-96 w-80 bg-slate-100 mb-6'>
            <div className='flex flex-row items-center ml-3 my-3'>
              <img className='h-28 w-28 rounded-full object-cover' src={harish} />
              <div className='ml-2'>
                <p className='font-semibold text-xl'>Harish Kumar</p>
                <p>District Collector</p>
              </div>
            </div>
            <p className='pl-2 max-w-[300px]'>No two individuals are the same, and neither are their nutritional requirements. What works
              for one person may not work for another, especially when it comes to managing conditions such as diabetes, heart disease,
              or food allergies. Generic dietary advice often falls short in addressing the unique needs of individuals.
            </p>
          </div>

        </div>
      </div>
    )
}