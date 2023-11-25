import React from 'react'
import hari from '../assets/hari_prasath.jpg'


export default function Slogan() {
    return (
        <div className='lg:w-full lg:px-[20.85%] md:mx-5 flex flex-col justify-center items-center'>
            <h1 className='text-center font-bold text-3xl mt-10'>“Where Food Meets Medicine, Wellness Begins.”</h1>
            <p className='text-center text-lg py-4'>At NUTRICARE we recognize that true well-being begins with personalized nutrition. Our platform leverages cutting-edge technology,
                combining nutritional science with data-driven insights, to provide best food recommendations and disease-related information. </p>
            <div className='flex flex-row items-center justify-center gap-5'>
                <div className='flex flex-row'>
                    <img className='h-20 w-20 rounded-full object-cover' src={hari} />
                    <div className='flex flex-col justify-center ml-3'>
                        <h3 className='font-bold block'>Hari Prasath</h3>
                        <p>Founder of NUTRICARE</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <img className='h-20 w-20 rounded-full object-cover' alt="Dharun Raj"/>
                    <div className='flex flex-col justify-center ml-3'>
                        <h3 className='font-bold block'>Dharun Raj</h3>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}