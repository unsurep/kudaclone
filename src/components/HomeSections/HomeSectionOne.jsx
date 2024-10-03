'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaCreditCard } from "react-icons/fa6";
import { BiSolidPieChart } from "react-icons/bi";
import { PiNetworkFill } from "react-icons/pi";
import { BsSendCheckFill } from "react-icons/bs";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import kuda1 from '../images/kuda1.png'
import cbn from '../images/cbn.png'
import ndic from '../images/ndic.png'
import { FaPiggyBank } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const HomeSectionOne=()=>{

    return(
        <>
            <section className="my-36 px-[10rem]">
                {/* div 1a */}
               <div className="flex   ">
                    {/* left div */}
                    <div data-aos="fade-up"
                        data-aos-duration="3000" >
                        <h1 className="text-purple-900 font-extrabold text-4xl">The money app for <br /> Africans.</h1>
                        <p className="my-5">Make free transfers, enjoy cashless payment <br /> options and earn interest on your savings with <br /> Kuda.</p>

                        <div className="flex items-center gap-5">
                            {/* apple store button */}
                            <button className="bg-black text-white px-3 py-1 rounded-[8px] flex items-center gap-1">
                                <p className="text-2xl"><FaApple /></p>
                                <div>
                                    <p className="text-[10px]">Download on the</p>
                                    <p className="text-[14px]">App Store</p>
                                </div>
                            </button>

                            {/* google store button */}
                            <button className="bg-black text-white px-3 py-1 rounded-[8px] flex items-center gap-1">
                                <p className="text-2xl"><FcGoogle /></p>
                                <div>
                                    <p className="text-[10px]">GET IT ON</p>
                                    <p className="text-[14px]">Google Play</p>
                                </div>
                            </button>
                        </div>

                        <div className="mt-5 flex items-center gap-4">
                            <div className="flex items-center justify-center gap-1">
                                <p className="text-[12px] text-neutral-500">Fully Licensed by the CBN</p>
                                <p><Image src={cbn} width={0} height={0} alt="logo" className="w-3"/></p>
                            </div>

                            <div className="flex items-center justify-center gap-1">
                                <p className="text-[12px] text-neutral-500">Deposits Insured by</p>
                                <p><Image src={ndic} width={0} height={0} alt="logo" className="w-10"/></p>
                            </div>
                        </div>


                    </div>



                    {/* right div */}
                    <div data-aos="flip-right"
                        data-aos-duration="3000" className="ml-[20rem]  ">
                        <Image src={kuda1} width={0} height={0} alt="image" className="w-[20rem] "/>
                    </div>
                </div>

                {/* div 1b */}
                <div className='mt-20'>
                    <div>
                        <div className='flex gap-5 justify-between'>
                            <div className='bg-white px-8 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-fit rounded-[8px]'>
                                <h1 className='bg-zinc-200 p-2 rounded-full w-fit'><FaCreditCard /></h1>
                                <p className='mt-3 font-bold text-purple-900 text-sm'>Order a Kuda card on the app with pickup  and delivery options.</p>
                            </div>

                            <div className='bg-white px-8 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-fit rounded-[8px]'>
                                <h1 className='bg-zinc-200 p-2 rounded-full w-fit'><BiSolidPieChart /></h1>
                                <p className='mt-3 font-bold text-purple-900 text-sm'>Enjoy cashless payment options online and  offline.</p>
                            </div>

                            <div className='bg-white px-8 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-fit rounded-[8px]'>
                                <h1 className='bg-zinc-200 p-2 rounded-full w-fit'><PiNetworkFill /></h1>
                                <p className='mt-3 font-bold text-purple-900 text-sm'>Pay your essential bills and buy gift cards  easily.</p>
                            </div>
                        </div>


                        <div className='mt-5  flex justify-center gap-5 '>
                            <div className='bg-white px-8 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-fit rounded-[8px]'>
                                <h1 className='bg-zinc-200 p-2 rounded-full w-fit'><BsSendCheckFill /></h1>
                                <p className='mt-3 font-bold text-purple-900 text-sm'>Get 25 free transfers to Nigerian <br /> banks every month.</p>
                            </div>

                            <div className='bg-white px-8 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-fit rounded-[8px]'>
                                <h1 className='bg-zinc-200 p-2 rounded-full w-fit'><FaPiggyBank /></h1>
                                <p className='mt-3 font-bold text-purple-900 text-sm'>Save money automatically any time <br /> you spend.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* div c */}
                <div className='mt-48'>
                    <div>
                        <h1 className='text-purple-900 font-bold text-4xl leading-[3rem]'>Your phone + <br />
                        our app + <br />
                        a debit card= <br />
                        a simpler life.</h1>

                        <p className='mt-5'>We designed a money app for your lifestyle, and you <br /> can get a debit card to go with it. That's all you need <br /> to make the right money moves.</p>

                        <div className='flex items-center cursor-pointer gap-3 font-bold mt-5 text-sm'>
                            <h1><u className='text-purple-900'>Open An Account in Minutes</u></h1>
                            <p><IoIosArrowForward /></p>
                        </div>

                    </div>

                    <div>
                        
                    </div>
                </div>



            </section>
        </>
    )



};

export default HomeSectionOne;