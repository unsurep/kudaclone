'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import kuda1 from '../images/kuda1.png'
import cbn from '../images/cbn.png'
import ndic from '../images/ndic.png'

const HomeSectionOne=()=>{

    return(
        <>
            <section className="mt-40">
                {/* div 1a */}
               <div className="flex   px-[10rem]">
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
                <div>
                    
                </div>



            </section>
        </>
    )



};

export default HomeSectionOne;