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



import Link from "next/link"
import react from "react"
import Image from "next/image"


const HomeSectionTwo=()=>{

    return(
        <>
            <div>
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
                    
                    {/* table */}
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

                    <div className="mt-20">
                        <h1 className="text-4xl text-purple-900 font-bold text-center">More for you</h1>
                        <div className="flex mt-16 justify-between ">
                            <div>
                                <p>icon</p>
                                <h1 className="text-2xl text-purple-900 font-bold">Kuda Business</h1>
                                <p className="text-sm">Grow your business with our all-in-one <br /> business manager. Get a POS, bulk <br /> transfers, payroll and more.</p>
                                <h1><u>Learn more </u></h1>
                            </div>

                            <div>
                                <p>icon</p>
                                <h1>Kufa Business</h1>
                                <p>Grow your business with our all-in-one <br /> business manager. Get a POS, bulk <br /> transfers, payroll and more.</p>
                                <h1><u>Learn more </u></h1>
                            </div>

                            <div>
                                <p>icon</p>
                                <h1>Kufa Business</h1>
                                <p>Grow your business with our all-in-one <br /> business manager. Get a POS, bulk <br /> transfers, payroll and more.</p>
                                <h1><u>Learn more </u></h1>
                            </div>
                        </div>






                    </div>






                </div>













            </div>
        </>
    )


};

export default HomeSectionTwo;