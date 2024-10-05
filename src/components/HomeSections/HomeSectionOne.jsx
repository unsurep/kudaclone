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

import hand from '../images/hand.png'
import cc from '../images/cc.png'
import cw from '../images/cw.png'
import kcard from '../images/kcard.png'
import kw from '../images/kw.png'
import bc from '../images/bc.png'
import k1 from '../images/k1.png'
import k2 from '../images/k2.png'
import k3 from '../images/k3.png'
import k4 from '../images/k4.png'
import k5 from '../images/k5.png'
import k6 from '../images/k6.png'
import k7 from '../images/k7.png'
import k8 from '../images/k8.png'
import k9 from '../images/k9.png'
import k10 from '../images/k10.png'
import kudalogo from '../images/kudalogo.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { RiBillFill } from "react-icons/ri";
import { GrAtm } from "react-icons/gr";
import { IoGiftSharp } from "react-icons/io5";
import { PiWebcam } from "react-icons/pi";
import hc from '../images/hc.jpeg'
import circle from '../images/bigpinkc.png'
import bkc from '../images/bkc.png'
import blockc from '../images/blockc.png'
import stop from '../images/stop.png'
import hello from '../images/hello.png'
import svg1 from '../images/svg1.svg'
import ccoin from '../images/ccoin.png'




const HomeSectionOne=()=>{

    return(
        <>
            <section className="my-36 px-[10rem] relative">
                {/* div 1a */}
               <div className="flex   ">
                    {/* left div */}
                    <div data-aos="fade-up"
                        data-aos-duration="3000" >
                        <h1 className="text-purple-900 font-extrabold text-4xl">The money app for <br /> Africans.</h1>
                        <p className="my-5">Make free transfers, enjoy cashless payment <br /> options and earn interest on your savings with <br /> Kuda.</p>

                        <div className="flex items-center gap-5 mt-[2rem]">
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
                <div className='mt-48 flex items-center relative'>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-purple-900 font-bold text-4xl leading-[3rem]'>Your phone + <br />
                        our app + <br />
                        a debit card= <br />
                        a simpler life.</h1>

                        <p className='mt-5'>We designed a money app for your lifestyle, and you <br /> can get a debit card to go with it. That's all you need <br /> to make the right money moves.</p>

                        <div className='flex items-center cursor-pointer gap-3 font-bold text-sm'>
                            <h1><u className='text-purple-900'>Open An Account in Minutes</u></h1>
                            <p><IoIosArrowForward /></p>
                        </div>

                    </div>

                    {/* for mobile screen only */}
                    <div className=' '>
                        <p className='absolute top-0 left-[37rem] blink-1 cursor-pointer '><Image src={hand} width={0} height={0} alt='image' className='w-48'/></p>
                        <p className='absolute bottom-5 right-1 overflow-hidden'><Image src={cw} width={0} height={0} alt='image' className='w-80 '/></p>
                        <p className='absolute   right-[1rem] bottom-[2.5rem] vibrate-1 cursor-pointer '><Image src={kw} width={0} height={0} alt='image' className='w-72 '/></p>
                        <p className=''><Image src={cc} width={0} height={0} alt='image' className='absolute w-32 bottom-0 right-5 bounce-in-top'/></p>
                        <p className=''><Image src={kcard} width={0} height={0} alt='image' className='absolute w-20 bottom-0 right-[3rem] bounce-in-top blink-1 cursor-pointer'/></p>
                        
                    </div>
                </div>

                {/* div d */}

                <div className='mt-40 relative flex'>
                    <div className=' '>
                        <p><Image src={bc} width={0} height={0} alt='image' className='w-96 absolute  top-0 left-[4rem]'/></p>

                        <div className='flex gap-4'>
                            {/* <div className='leading-[1rem]'>
                                <p><Image src={k1} width={0} height={0} alt='image' className='w-80'/></p>
                                <p><Image src={k2} width={0} height={0} alt='image' className='w-80'/></p>
                                <p><Image src={k3} width={0} height={0} alt='image' className='w-80'/></p>
                                <p><Image src={k4} width={0} height={0} alt='image' className='w-80'/></p>
                                <p><Image src={k5} width={0} height={0} alt='image' className='w-80'/></p>
                                <p><Image src={k6} width={0} height={0} alt='image' className='w-80'/></p>
                            </div> */}

                            <div className="flex gap-12">
                                <div className='flex'>
                                    <div className='flex flex-col gap-3 absolute mt-[1.5rem]'>
                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-purple-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-sky-500"><IoGiftSharp /></p>
                                            <p className='font-bold text-purple-900 text-[12px] hover:text-orange-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-purple-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-green-500"><IoIosSend /></p>
                                            <p className='font-bold text-purple-900 text-[12px] hover:text-orange-600'>Send to Bank Account</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-purple-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-orange-500"><RiBillFill /></p>
                                            <p className='font-bold text-purple-900 text-[12px] hover:text-orange-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-purple-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-green-500"><GrAtm /></p>
                                            <p className='font-bold text-purple-900 text-[12px] hover:text-orange-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-purple-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-sky-500"><IoGiftSharp /></p>
                                            <p className='font-bold text-purple-900 text-[12px] hover:text-orange-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-purple-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-red-500"><PiWebcam /></p>
                                            <p className='font-bold text-purple-900 text-[12px] hover:text-orange-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                    </div>


                                        

                                        
                                    <div className='flex flex-col gap-4 absolute mt-[4rem] ml-[16rem]'>
                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-orange-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-sky-500"><IoGiftSharp /></p>
                                            <p className='font-bold text-orange-900 text-[12px] hover:text-purple-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-orange-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-red-500"><PiWebcam /></p>
                                            <p className='font-bold text-orange-900 text-[12px] hover:text-purple-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-orange-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-green-500"><GrAtm /></p>
                                            <p className='font-bold text-orange-900 text-[12px] hover:text-purple-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                        <div className='flex w-fit bg-white gap-4 py-4 ring hover:bg-orange-300  rotate-in-2-fwd-cw cursor-pointer ring-green-300 px-5 rounded-[8px] '>
                                            <p className="text-green-500"><IoIosSend /></p>
                                            <p className='font-bold text-orange-900 text-[12px] hover:text-purple-600'>Send to @username</p>
                                            <p className=' text-neutral-600'><IoIosArrowForward /></p>
                                        </div>

                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>


                    <div className='ml-auto mt-[8rem]'>
                        <h1 className="text-4xl text-purple-900 font-bold">It is your money, we just <br /> help you manage it</h1>

                        <p className=" text-sm mt-5">Save it, spend it, It is up you. Whatever you <br /> choose to do with your money, we will make sure it <br /> is done better and free of charg. We take responsibility <br /> for that.</p>
                    </div>
                </div>



                {/* div e */}

                <div className="mt-40 flex items-center ">

                    <div className="flex flex-col gap-5 ">
                        <h1 className="text-4xl text-purple-900 font-bold">Save money as you spend <br /> it, seriously.</h1>
                        <p className="text-sm">You can not avoid spending. That is how you pay for your <br /> needs. But we can help you put money away every <br /> time you pay for something. Just set a percentage to <br /> save and watch your money grow.</p>

                        <div className='flex items-center cursor-pointer gap-3 font-bold  text-sm'>
                            <h1><u className='text-purple-900'>Open An Account in Minutes</u></h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>

                    <div className="ml-auto "><Image src={hc} width={0} height={0} alt="image" className="w-[25rem]"/></div>
                </div>

                {/* div f */}
                <div className="mt-40 flex items-center ">

                    <div className="relative roll-in-left cursor-pointer">
                        <p><Image src={circle} width={0} height={0} alt="image" className="w-96"/></p>
                        <p className="absolute top-[6.5rem] left-[5rem] vibrate-1"><Image src={bkc} width={0} height={0} alt="image" className="w-56"/></p>
                        <p className="absolute top-[3rem] left-0"><Image src={blockc} width={0} height={0} alt="image" className=""/></p>
                        <input type="checkbox" className="toggle toggle-error absolute top-[4.5rem] right-[4rem] " defaultChecked />
                        <p className="blink-1"><Image src={stop} width={0} height={0} alt="image" className="absolute bottom-0 right-[4rem] w-20"/></p>
                    </div>


                    <div className="flex flex-col gap-5 ml-auto ">
                        <h1 className="text-4xl text-purple-900 font-bold">Turn off access, turn on <br /> safety.</h1>
                        <p className="text-sm">Life happens. Milk spills. Debit cards go missing. <br /> If that ever happens, you can block your missing card <br /> on the app so no one can use it. We had like to see them try.</p>

                        <div className='flex items-center cursor-pointer gap-3 font-bold  text-sm'>
                            <h1><u className='text-purple-900'>Open An Account in Minutes</u></h1>
                            <p><IoIosArrowForward /></p>
                        </div>

                    </div>
                </div>

                {/* div g */}
                <div className="mt-40 flex items-center relative ">

                    <div className="flex flex-col gap-5  ">
                        <h1 className="text-4xl text-purple-900 font-bold">We are always happy to <br /> help you.</h1>
                        <p className="text-sm">You can chat with us on the app, slide into our DMs, <br /> tweet, leave an Instagram comment, send an email <br /> or call. However you choose to reach out, there will always <br /> be a friendly person there to make your life easy.</p>

                        <div className='flex items-center cursor-pointer gap-3 font-bold  text-sm'>
                            <h1><u className='text-purple-900'>Get Help</u></h1>
                            <p><IoIosArrowForward /></p>
                        </div>

                    </div>

                    
                    <div className="ml-auto   ">
                        <Image src={svg1} width={0} height={0} alt="image" className="w-[33rem] roll-in-left"/>
                        <p className=""><Image src={hello} width={0} height={0} alt="image" className="absolute top-0 right-0 w-60 blink-1 bounce-in-top cursor-pointer"/></p>
                    </div>
                </div>

                {/* div h */}
                <div className="mt-40 flex items-center">

                    <div className="  ">
                        <Image src={ccoin} width={0} height={0} alt="image" className=""/>
                    </div>

                    <div className="flex flex-col gap-5 ml-auto ">
                        <h1 className="text-4xl text-purple-900 font-bold">Fees as clear as glass.</h1>
                        <p className="text-sm">We are serious about free banking, and we will never,<br /> ever charge you for anything without your consent.</p>

                        <div className='flex items-center cursor-pointer gap-3 font-bold  text-sm'>
                            <h1><u className='text-purple-900'>See all our fees</u></h1>
                            <p><IoIosArrowForward /></p>
                        </div>

                    </div>
                </div>






            </section>
        </>
    )



};

export default HomeSectionOne;