'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import logo from '../components/images/logo.png'
import { MdArrowDropDown } from "react-icons/md";
import flag from '../components/images/flag.png'
import { RiHome4Fill } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa6";
import { PiNetworkBold } from "react-icons/pi";
import { RiBankCard2Fill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { AiOutlineHeatMap } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaTv } from "react-icons/fa";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { SiTransportforlondon } from "react-icons/si";

const NavBar=()=>{

    return(
        <>
            <nav className="flex items-center px-[5rem] py-[1rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
                <div>
                    <Image src={logo} width={0} height={0} alt="logo" className=""/>
                </div>


                <ul className="flex items-center gap-10 ml-[16rem] text-purple-900">
                    <li className="flex items-center gap-2 cursor-pointer">Personal <MdArrowDropDown /></li>

                    <div className="absolute top-[4rem]  flex bg-white h-screen">
                        <div className="bg-red-100 h-screen px-6 py-3 rounded-[5px]">
                            <ul className="text-sm text-black flex flex-col gap-4 cursor-pointer">
                                <li className="flex items-center gap-2"> <span className="bg-neutral-50 p-2 rounded-full"><RiHome4Fill /></span>Discover Personal</li>
                                <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><BsFillSendFill /></span>Transfer & Spend</li>
                                <li className="flex items-center gap-2"><span className="bg-orange-50 p-2 rounded-full text-orange-300"><FaPiggyBank /></span>Save</li>
                                <li className="flex items-center gap-2"><span className="bg-blue-50 p-2 rounded-full text-blue-300"><PiNetworkBold /></span>Investments</li>
                                <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><RiBankCard2Fill /></span>Kuda Card</li>
                            </ul>
                        </div>



                        <div className="bg-neutral-100 h-screen px-8 py-3 rounded-[5px]">
                            <h1 className="text-neutral-500 text-[12px]">Payment</h1>
                            <ul className="text-sm text-black flex flex-col gap-4 cursor-pointer">
                                <li className="flex items-center gap-2"><span className="bg-red-50 p-2 rounded-full text-red-300"><HiLightBulb /></span>Electricity</li>
                                <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><AiOutlineHeatMap /></span>Airtime</li>
                                <li className="flex items-center gap-2"> <span className="bg-sky-50 p-2 rounded-full text-sky-300"><FaWifi /></span>Internet</li>
                                <li className="flex items-center gap-2"><span className="bg-slate-50 p-2 rounded-full text-slate-300"><BsFillGiftFill /></span>Gift Cards</li>
                                <li className="flex items-center gap-2"><span className="bg-orange-50 p-2 rounded-full text-orange-300"><TfiWorld /></span>Cardless Payment</li>
                                <li className="flex items-center gap-2"><span className="bg-blue-50 p-2 rounded-full text-blue-300"><FaTv /></span>TV</li>
                                <li className="flex items-center gap-2"><span className="bg-red-50 p-2 rounded-full text-red-300"><HiOutlineCubeTransparent /></span>Betting</li>
                                <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><SiTransportforlondon /></span>Transport</li>
                            </ul>
                            <h1 className="text-neutral-500 text-[12px]">CREDIT</h1>
                            <ul className="text-sm text-black">
                                <li>Overdrafts</li>
                                <li>Salary Loan</li>
                                <li>Loan</li>
                            </ul>
                        </div>


                    </div>
        





                    <li className="flex items-center gap-2">Business <MdArrowDropDown /></li>
                    <li className="flex items-center gap-2">Company <MdArrowDropDown /></li>
                    <li className="flex items-center gap-2">Help <MdArrowDropDown /></li>
                </ul>


                <div className="flex items-center ml-auto gap-8 text-purple-900">
                    <button>Sign in</button> 
                    <button className="text-white px-6 py-2 bg-purple-950 rounded-[8px]">Join Kuda</button>
                    <p className="bg-green-100 p-3 rounded-full"><Image src={flag} width={0} height={0} alt="flag_logo" className="w-4   "/></p>
                </div>


            </nav>
        </>
    )



};

export default NavBar;