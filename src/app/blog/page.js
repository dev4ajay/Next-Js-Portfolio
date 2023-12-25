"use client"
import { useState ,useEffect } from "react";
import Footer from "../Footer/page";
import Image from "next/image";
import Nav  from "../Nav/nav"
import Img from "../../../public/download (1).jpg"
import Img2 from "../../../public/download (2).jpg"
import Img3 from "../../../public/download.jpg"
import Img4 from "../../../public/images1.jpg"
export default function blog() {
    const [post ,setPost] =useState([]);
  const [data, setData] = useState([]);

useEffect(()=>{
const getData  = async () => {
    try{
        const data2 =await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await data2.json();
        console.log(response ,"");
        setPost(response)
    } catch (error) {
        console.error('Error fetching data:', error);
      }
}

getData();
}, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    return(

<>

<div className="container mx-auto ">
<Nav/>

<div className="flex justify-center items-center mt-4 mb-2">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-20 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div className="flex flex-col items-center justify-center" data-aos="fade-up">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">This Week Blogs</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
                </div>
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            <div className="sm:w-1/2 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6"  data-aos="fade-up">
                                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="chair" data-aos="fade-up" />
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-4 relative" data-aos="fade-up">
                                <div  >
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6" data-aos="fade-up">
                                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design"   />
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-up">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                            <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between" data-aos="fade-up">
                        <div className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
                            <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                        </div>
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4" data-aos="fade-up">
                            <div className="relative w-full">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
                            </div>
                            <div className="relative w-full sm:mt-0 mt-4" data-aos="fade-up">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-white py-6 sm:py-8 lg:py-12">

  <div className="mx-auto max-w-screen-xl px-4 md:px-8">

    <div className="mb-10 md:mb-16" data-aos="fade-up">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
  
    
    <div className="grid gap-8 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">


{data.map((item)=>(

    <>
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6" data-aos="fade-up">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>


        <div className="flex flex-col gap-2" data-aos="fade-up">
          <span className="text-sm text-gray-400">July 19, 2021</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{item.name}</a>
          </h2>

          <p className="text-gray-500">{item.body}</p>

          <div data-aos="fade-up">
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
          </div>
        </div>
      </div>
    
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6" data-aos="fade-up">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2" data-aos="fade-up">
          <span className="text-sm text-gray-400">April 07, 2021</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{item.name}</a>
          </h2>

          <p className="text-gray-500">{item.body}</p>

          <div data-aos="fade-up">
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6" data-aos="fade-up">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2" data-aos="fade-up">
          <span className="text-sm text-gray-400">March 15, 2021</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{item.name}</a>
          </h2>

          <p className="text-gray-500">{item.body}</p>

          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700" data-aos="fade-up">Read more</a>
          </div>
        </div>
      </div>
    
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6" data-aos="fade-up">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2" data-aos="fade-up">
          <span className="text-sm text-gray-400">January 27, 2021</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{item.name}</a>
          </h2>

          <p className="text-gray-500">{item.body}</p>

          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700" data-aos="fade-up">Read more</a>
          </div>
        </div>
      </div>
      </>
      ))}
     
    </div>

  </div>
</div>

<section className="text-gray-600 body-font">

  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap w-full mb-20" data-aos="fade-up">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0" >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
           className="h-40 rounded w-full object-cover object-center mb-6" src={Img} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg" data-aos="fade-up">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Img2} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg" data-aos="fade-up">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src={Img4} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg" data-aos="fade-up">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={Img3} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</div>
</>
    )
}