'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import me from '../images/meee.jpg'
import s1 from '../images/1.svg'
import s2 from '../images/2.svg'
import s3 from '../images/3.svg'
import s4 from '../images/4.svg'
import s5 from '../images/5.svg'
import s6 from '../images/6.svg'
import v11 from '../images/v1.svg'
import v2 from '../images/v2.svg'
import v3 from '../images/v3.svg'
import v4 from '../images/v4.svg'
import v5 from '../images/v5.svg'
import logo from '../images/logo.png'
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { GrStatusGood } from "react-icons/gr";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import kuda1 from '../images/kuda1.png'
import { FcGoogle } from "react-icons/fc";
import { TbWorld } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link"
import react from "react"
import Image from "next/image"
import { FaApple } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { TbLetterMSmall } from "react-icons/tb";
import { ImLinkedin2 } from "react-icons/im";


const HomeSectionTwo=()=>{

    return(
        <>
            <div className="mb-12">
                {/* 1 */}
                <div>
                    <h1 className="text-4xl text-purple-900 font-bold text-center">Do not just take our word for it</h1>
                </div>

                {/* swiper 2 */}

                <div className="mt-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{clickable: true,}}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}

                        className="mySwiper">

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-green-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-sky-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-purple-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-orange-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-pink-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-sky-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-purple-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-red-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-yellow-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white hover:bg-green-50 px-4 py-3 rounded-[10px]">
                                <div>
                                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam totam minima praesentium sed quos fuga recusandae, deleniti ullam asperiores omnis molestias eligendi.</p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 mb-20 ">
                                    <p className="h-16 w-16 overflow-hidden"><Image src={me} width={0} height={0} alt="image" className=" rounded-full h-full w-full object-cover "/></p>
                                    <p className="font-bold text-[12px] ml-[1rem]">Louis Umukoro</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                    
                {/* 3 */}
                <div className="px-[5rem] flex items-center justify-between  ">
                    <p><Image src={s1} width={0} height={0} alt="logo" className=""/></p>
                    <p><Image src={s2} width={0} height={0} alt="logo" className=""/></p>
                    <p><Image src={s3} width={0} height={0} alt="logo" className=""/></p>
                    <p><Image src={s4} width={0} height={0} alt="logo" className="w-20"/></p>
                    <p><Image src={s5} width={0} height={0} alt="logo" className=""/></p>
                    <p><Image src={s6} width={0} height={0} alt="logo" className=""/></p>
                </div>

                {/* 4 */}
                <div className="px-[10rem] mt-20 bg-sky-50">
                    <h1 className="text-4xl text-purple-900 font-bold text-center py-16">Our Partners</h1>
                    <div className="flex items-center justify-between pb-20">
                    <p><Image src={v5} width={0} height={0} alt="logo" className=""/></p>
                        <p><Image src={v2} width={0} height={0} alt="logo" className=""/></p>
                        <p><Image src={v3} width={0} height={0} alt="logo" className=""/></p>
                        <p><Image src={v4} width={0} height={0} alt="logo" className=""/></p>
                        <p><Image src={v11} width={0} height={0} alt="logo" className=""/></p>
                    </div>
                </div>

                    {/* 5 */}
                <div className="mt-20 px-[10rem]">
                    <div>
                        <h1 className="text-4xl text-purple-900 font-bold text-center">Choose the freedom you need.</h1>
                    </div>
                    
                    {/* 5   table */}
                    <table className=" w-full mt-10 border border-neutral-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <tr className="flex items-center gap-40 justify-center py-5 ">
                            <th className="text-white">others</th>
                            <th>Other Banks</th>
                            <th><Image src={logo} width={0} height={0} alt="logo" className=""/></th>
                        </tr>
                        <hr />

                        <tr  className="flex items-center justify-between  py-5 px-20  ">
                            <td className="font-bold">Transfer Fee</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full"> <HiOutlineMinusCircle /></span>Up to N50 plus V.A.T</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>25 free transfers every month</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Card Delivery</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>Nil</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>Yes</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Card Maintenance Fee</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>Up to N50 per quater</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>No</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Alert</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>Charge for SMS alerts</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>Free instant notification</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Annual Interest</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>4%</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>Up to 15%</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Bill Payment Fee</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>Up to N100 per bill</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>No</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Instant Reversals</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>Nil</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>Yes</td>
                        </tr>

                        <hr />

                        <tr  className="flex items-center justify-between text-left py-5 px-20  ">
                            <td className="font-bold">Maintenance</td>
                            <td className="flex items-center gap-2"><span className="bg-neutral-200 rounded-full text-justify"> <HiOutlineMinusCircle /></span>Yes</td>
                            <td className="flex items-center gap-2"> <span className="bg-neutral-200 rounded-full"><GrStatusGood /></span>No</td>
                        </tr>
                    </table>
                </div>

                {/* 6 */}
                    <div className="mt-20 px-[10rem]">
                        <h1 className="text-4xl text-purple-900 font-bold text-center">More for you</h1>
                        <div className="flex mt-16 justify-between gap-5  ">
                            <div className="py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8">
                                <p className="bg-neutral-200 p-2 rounded-full w-fit"><FaPersonWalkingLuggage /></p>
                                <h1 className="text-2xl text-purple-900 font-bold py-4">Kuda Business</h1>
                                <p className="text-sm">Grow your business with our all-in-one <br /> business manager. Get a POS, bulk <br /> transfers, payroll and more.</p>
                                <h1 className="pt-8 text-sm flex items-center gap-2"><u>Learn more </u><IoIosArrowForward /></h1>
                            </div>

                            <div className="pt-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8">
                                <p className="bg-neutral-200 p-2 rounded-full w-fit"><IoIosSend /></p>
                                <h1 className="text-2xl text-purple-900 font-bold py-4">Transfer & Spend</h1>
                                <p className="text-sm">Send money for free to any Nigerian account <br /> with 25 free transfers every month.</p>
                                <h1 className="pt-12 text-sm flex items-center gap-2"><u>Learn more </u><IoIosArrowForward /></h1>
                            </div>

                            <div className="py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8">
                                <p className="bg-neutral-200 p-2 rounded-full w-fit"><PiShoppingBagOpenFill /></p>
                                <h1 className="text-2xl text-purple-900 font-bold py-4">Loans</h1>
                                <p className="text-sm">Get up to ₦150,000 in your Kuda account <br /> easily and repay in convenient <br /> instalments.</p>
                                <h1 className="pt-8 text-sm flex items-center gap-2"><u>Learn more </u><IoIosArrowForward /></h1>
                            </div>
                        </div>


                    </div>
                
                {/* 7 */}
                <div className="mx-[10rem] mt-20 bg-cyan-50 flex rounded-[10px] border border-cyan-100 mb-20">
                    <div className="py-12 px-20">
                        <h1 className="font-bold text-purple-900 text-4xl">The money app for <br /> Africans.</h1>
                        <p className="text-sm py-8">Save, spend, send and invest money across borders.</p>

                        <button className="text-white px-6 py-2 bg-purple-950 rounded-[8px]">Join Kuda</button>
                    </div>



                    <div className="ml-[16rem] pt-12 ">
                        <Image src={kuda1} width={0} height={0} alt="image" className="blink-1 cursor-pointer"/>
                    </div>
                </div>

                <hr />


                {/* 8 */}
                <div className="flex  gap-12 px-[10rem] mt-10">
                    <div>
                        <Image src={logo} width={0} height={0} alt="" className=""/>
                    </div>



                    <div className="flex gap-20 ">
                        {/* a */}
                        <ul className="text-sm leading-[25px] ">
                            <li className="text-purple-900"><b>Personal</b></li>
                            <li>Discover Personal</li>
                            <li>Transfer & Spend </li>
                            <li>Save</li>
                            <li>Investment</li>
                            <li>Kuda Card</li>
                        </ul>

                        <ul className="text-sm leading-[25px] ">
                            <li className="text-purple-900"><b>Business</b></li>
                            <li>Discover Business</li>
                            <li>softPOS</li>
                            <li>Business Registration</li>
                            <li>Invoicing</li>
                            <li>Salary Loan</li>
                            <li>Business API</li>
                            <li>Join Kuda Business</li>
                        </ul>

                        <ul className="text-sm leading-[25px] ">
                            <li className="text-purple-900"><b>Company</b></li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Join Our Team</li>
                            <li>About Us</li>
                        </ul>

                        <ul className="text-sm leading-[25px] ">
                            <li className="text-purple-900"><b>Help</b></li>
                            <li>Get Help</li>
                            <li>Scam Awareness</li>
                            <li>FAQs</li>
                            <li>Security</li>
                            <li>Contact Us</li>
                            <li>Self Help</li>
                        </ul>

                        <ul className="text-sm leading-[25px] ">
                            <li className="text-purple-900"><b>Transparency</b></li>
                            <li>Tems & Condition</li>
                            <li>Privacy Policy</li>
                            <li>Information Security Policy</li>
                            <li>Cookie Policy</li>
                            <li>Whistleblowing Policy</li>
                        </ul>
                    </div>
                </div>

                {/* 9 */}
                <div className="flex gap-5 px-[10rem] mt-10">
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


                    <button className="bg-purple-900 text-white px-3 py-1 rounded-[8px] flex items-center gap-1">
                    <p className="text-sm bg-neutral-200 rounded-full p-1 text-black"><TbWorld /></p>
                        <div>
                            <p className="text-[10px]">Sign into Kuda</p>
                            <p className="text-[14px]">On The Web</p>
                        </div>
                    </button>
                </div>

                {/* 10 */}
                <h1 className="text-center mt-20 text-sm text-purple-900">Products may vary by country or market.</h1>
                <div className="flex px-[10rem] mt-12 justify-between">
                    

                    <div className="text-purple-900 ">
                        <p className="text-sm"><b>Contact</b></p>
                        <p className="my-3 text-sm"><u><b>help@kuda.com</b></u></p>

                        <ul className="flex gap-8">
                            <li><RiTwitterXFill /></li>
                            <li><LuInstagram /></li>
                            <li><RiFacebookFill /></li>
                            <li><FaYoutube /></li>
                            <li><TbLetterMSmall /></li>
                            <li><ImLinkedin2 /></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm"><b>Lagos</b></p>
                        <p className="mt-3 text-sm">1-11 Commercial Avenue, <br /> Yaba, Lagos, <br />
                        Nigeria</p>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm"><b>London</b></p>
                        <p className="mt-3 text-sm">5 New Street Square, <br />
                            London, EC4A 3TW, <br />
                            United Kingdom
                        </p>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm"><b>Cape Town</b></p>
                        <p className="mt-3 text-sm">146 Campground Road, <br />
                        Snakepit Building, Level 4, <br /> Newlands, Cape Town
                        </p>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm"><b>Canada</b></p>
                        <p className="mt-3 text-sm">3080 Yonge Street, <br />
                            Suite 6060, Toronto, <br />
                            Ontario M4N 3N1
                        </p>
                    </div>
                </div>


                {/* 11 */}
                <div className="mt-20  text-sm text-neutral-500 px-[10rem]">
                    <h1>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</h1>

                    <p className="my-5">If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>

                    <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>

                    <p className="my-5">Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.</p>
                </div>
                













            </div>
        </>
    )


};

export default HomeSectionTwo;