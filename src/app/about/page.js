import Footer from "../Footer/page";
import Nav from "../Nav/nav";
import Image  from "next/image";
import Section2 from "../Section2/page";
import img from "../../../public/careers.png";
import pic1 from "../../../public/service.png";
import pic2 from "../../../public/user.png";
import pic3 from "../../../public/wallet.png";


export default function about() {
   

   
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <div className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14">
      <div className=" w-full lg:w-2/4">
        <div className=" space-y-4">
          <h1 className=" text-4xl font-medium text-center md:text-start leading-tight" data-aos="fade-up">
            Get Ready to Explore, Get Ready to Experience!
          </h1>
          <p data-aos="fade-up">
            Discover the Best Holiday Experiences with TripPixie! We're
            dedicated to curating the latest and greatest destinations from
            around the world, ensuring you always get the ultimate travel
            experience.
          </p>
        </div>

        <div className="w-full lg:w-3/5 mt-10 lg:ml-14" data-aos="fade-up">
          <Image

            className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={img}
            alt="img"
          />
        </div>
      </div>
      <div className=" w-full lg:w-2/4 space-y-10">
        <div className=" flex flex-row gap-5">
          <div className=" flex flex-row items-center w-24" data-aos="fade-up">
            <Image src={pic1} alt="img" />
          </div>
          <div className=" space-y-3" data-aos="fade-up">
            <h1 className=" font-semibold text-xl">Friendly Service</h1>
            <p className=" text-[#898888]">
              We will provide excellent and friendly service for the sake of our
              customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5" data-aos="fade-up">
          <div className=" flex flex-row items-center w-28">
            <Image src={pic2} alt="img" />
          </div>
          <div className=" space-y-3" data-aos="fade-up">
            <h1 className=" font-semibold text-xl">Unforgettable experience</h1>
            <p className=" text-[#898888]">
              We will provide excellent and Unforgettable experience for the
              sake of our customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5" data-aos="fade-up">
          <div className="flex flex-row items-center w-24">
            <Image src={pic3} alt="img" />
          </div>
          <div className=" space-y-3" data-aos="fade-up">
            <h1 className=" font-semibold text-xl">Affordable prices</h1>
            <p className=" text-[#898888]">
              We will provide excellent and Affordable prices for the sake of
              our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
        <Section2    About="About Us" Title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from" ImagePath="https://i.ibb.co/FhgPJt8/Rectangle-116.png"/> 
    

        <div className="md:mx-auto md:container px-4">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color" data-aos="fade-up">
                                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Boost adoption of product and services</h1>
                                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</p>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-sm font-semibold underline text-indigo-700">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center" data-aos="fade-up">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png" alt />
                                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                            <div className="p-4 bg-yellow-200 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={9} y1={15} x2={15} y2={9} />
                                                    <circle cx="9.5" cy="9.5" r=".5" />
                                                    <circle cx="14.5" cy="14.5" r=".5" />
                                                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                                                </svg>
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pl-3 text-green-400" data-aos="fade-up">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="3 17 9 11 13 15 21 7" />
                                                    <polyline points="14 7 21 7 21 14" />
                                                </svg>
                                                <p className="text-green-400 text-base tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                            </div>
                                            <p className="font-normal text-base text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-3">
                                        <hr className="h-1 rounded-sm bg-gray-200" />
                                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                                    </div>
                                    <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color" data-aos="fade-up">
                                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Easily manage sales through our invoicing system</h1>
                                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</p>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-sm font-semibold underline text-indigo-700">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center" data-aos="fade-up">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png" alt />
                                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                                    <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">Invoice # 35RD87</h4>
                                    <p className="text-gray-600 text-base leading-3 font-normal">Assigned to: Josh Rollins</p>
                                    <div className="mt-4 flex items-center">
                                        <span className="text-gray-600">
                                            <svg className="feather feather-user" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </span>
                                        <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">Specter Consultancy</p>
                                    </div>
                                    <div className="mt-3 flex items-center">
                                        <span className="text-gray-600">
                                            <svg className="feather feather-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1={12} y1={1} x2={12} y2={23} />
                                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </span>
                                        <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">2,354 USD</p>
                                    </div>
                                    <button className="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-base pl-3 cursor-pointer hover:opacity-90" data-aos="fade-up">
                                        View Invoice
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                            <line x1={13} y1={18} x2={19} y2={12} />
                                            <line x1={13} y1={6} x2={19} y2={12} />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
    
          </div>
    
     
    
      <Footer />
    </>
  );
}
