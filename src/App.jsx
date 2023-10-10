
import logo from './assets/logo_svg.png'
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs"
import { LiaArrowCircleRightSolid } from "react-icons/lia"
import hari from './assets/hari_prasath.jpg'
import faras from './assets/faras.jpg'
import harish from './assets/harish_kumar.jpg'
import working from './assets/working.png'
import share from './assets/share.png'

import dog from './assets/dog_img.jpg'
import alkaline from './assets/alkaline.jpg'
import workstress from './assets/workstress.jpg'
import soda from './assets/soda.jpeg'

import lavleen from './assets/experts/Lavlee.jpg'
import pooja from './assets/experts/PoojaMakhija.jpg'
import ryan from './assets/experts/Ryan.jpg'
import shikha from './assets/experts/Shikha.jpg'

function App() {
  return (
    <>
      <div className='bg-slate-100'>
        <div className="flex justify-between  w-full">
          <div className='flex flex-row pt-2 justify-center items-center'>
            <img className="h-9 w-9 ml-10 mr-3 my-3 font object-fill bg-no-repeat" src={logo} alt="logo" />
            <h2 className='font-title text-2xl font-semibold text-cyan-600'>NUTRICARE</h2>
          </div>
          <div className='bg-white w-4/12 flex flex-row-reverse items-center'>
            <CgProfile className='h-7 w-7 mt-3 mr-7 cursor-pointer' />
            <p className='px-3 pt-3 mx-5 my-3 hover:underline cursor-pointer'>Sign in</p>
          </div>
        </div>

        <div className='flex'>
          <div className='flex flex-col justify-center w-8/12 h-80'>
            <h2 className='font-slogan ml-10 font-bold text-5xl'>Personalized Food and Disease Guidance</h2>
            <p className=' ml-10 pt-3 font-quicksand text-2xl'>Health on your plate, wellness begins with right
              eating habit,<br></br> your path to healthier tommorow</p>
            <button className='px-2 py-2 w-20 my-3 ml-10 rounded-3xl bg-orange-300 hover:bg-orange-400'>Explore</button>
          </div>
          <div className='w-4/12 h-96 bg-cover-img bg-cover'>
          </div>
        </div>
      </div>

      <div className='lg:w-full lg:px-[20.85%] md:mx-5 flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-3xl mt-10'>“Where Food Meets Medicine, Wellness Begins.”</h1>
        <p className='text-center text-lg py-4'>At NUTRICARE we recognize that true well-being begins with personalized nutrition. Our platform leverages cutting-edge technology,
          combining nutritional science with data-driven insights, to provide best food recommendations and disease-related information. </p>
        <div className='flex flex-row items-center justify-center'>
          <img className='h-20 w-20 rounded-full object-cover' src={hari} />
          <div className='flex flex-col justify-center ml-3'>
            <h3 className='font-bold block'>Hari Prasath</h3>
            <p>Founder of NUTRICARE</p>
          </div>
        </div>
      </div>

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
            <img className='h-24 w-24 rounded-full object-cover' src={lavleen}/>
            <div className='flex flex-col justify-center ml-3'>
            <h1 className='text-xl font-semibold'>Lavleen Kaur</h1>
            <p className='w-6/6'>Lavleen Kaur is a clinical nutritionist and  lifestyle coach from Chandigarh. She is a life member of Indian Dietetic Association</p>
            </div>
          </div>

          <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
            <img className='h-24 w-24 rounded-full object-cover' src={pooja}/>
            <div className='flex flex-col justify-center ml-3'>
            <h1 className='text-xl font-semibold'>Pooja Makhija</h1>
            <p>A true and hard-bred nutritionist from Mumbai, Pooja Makhija holds an MSc in Food Science and Nutrition. </p>
            </div>
          </div>
          <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
            <img className='h-24 w-24 rounded-full object-cover' src={ryan}/>
            <div className='flex flex-col justify-center ml-3'>
            <h1 className='text-xl font-semibold'>Ryan Fernando</h1>
            <p className='w-'>Ryan Fernando is India's most famous Nutritionist. Celebrity Nutritionist to Virat Kohli and Anushka Sharma</p>
            </div>
          </div>
          <div className="flex flex-row hover:cursor-pointer hover:opacity-80">
            <img className='h-24 w-24 rounded-full object-cover' src={shikha}/>
            <div className='flex flex-col justify-center ml-3'>
            <h1 className='text-xl font-semibold'>Dr Shikha Sharma</h1>
            <p>Dr Shikha Sharma is the founder of Dr Shikha’s Nutri Health, which is a platform offering comprehensive health and diet management</p>
            </div>
          </div>
        </div>
      </div>

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

    </>
  )
}

export default App
