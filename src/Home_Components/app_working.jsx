import React from 'react'

import working from '../assets/working.png'

export default function AppWorking() {
  return (
    <div className='flex flex-col justify-center px-[10%]'>
      <h1 className=' font-bold text-3xl '>HOW THE APP WORKS</h1>
      <p className=' text-lg py-4 max-w-4xl'>NUTRICARE provides you the informatio which is related to
        the different type of disease such as diagnosis and treatment and also it gives the list of foods to eat and not to eat.
        On top of that our app provides the feedback for every disease from the experts and peoples who had
        suffered from disease</p>
      <div className='flex justify-center items-center'>
        <img className='h-[670px] w-[670px] z-40' src={working} />
      </div>
    </div>
  )

}