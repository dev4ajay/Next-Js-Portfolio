import React from 'react'
// import Home2 from "../Home2/page"
import Image from 'next/image'
function Section2( {Title  , About ,ImagePath}) {
  return (
    <div  className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="w-full lg:w-5/12 flex flex-col justify-center"  >
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4" data-aos="fade-up">{About}</h1>
            <p className="font-normal text-base  leading-6 text-gray-600 dark:text-white text-justify" data-aos="fade-up">{Title}</p>
        </div>
        <div className="w-full lg:w-8/12" data-aos="fade-up">
            <Image   className="w-full h-full" src={ImagePath} alt="A group of People" />
        </div>
        
    </div>

 
</div>

  )
}

export default Section2