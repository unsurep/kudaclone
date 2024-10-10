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
import { FaLastfmSquare, FaWifi } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaTv } from "react-icons/fa";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { SiTransportforlondon } from "react-icons/si";
import { VscIssueDraft } from "react-icons/vsc";
import { MdMoney } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const NavBar=()=>{

    const [personal, setPersonal]=useState(false);
    const [business, setBusiness]=useState(false);
    const [company, setCompany]=useState(false);
    const [helpp, setHelpp]=useState(false);

    const togglePersonal=()=>{
        setPersonal(!personal)
        setBusiness(false)
        setCompany(false)
        setHelpp(false)
    }

    const toggleBusiness=()=>{
        setBusiness(!business)
        setPersonal(false)
        setCompany(false)
        setHelpp(false)
    }

    const toggleCompany=()=>{
        setCompany(!company)
        setBusiness(false)
        setPersonal(false)
        setHelpp(false)
    }

    const toggleHelp=()=>{
        setHelpp(!helpp)
        setPersonal(false)
        setBusiness(false)
        setCompany(false)
    }

    return(
        <div>
            <nav className="hidden lg:flex items-center px-[5rem]  py-[1rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
                <div>
                    <Image src={logo} width={0} height={0} alt="logo" className=""/>
                </div>


                <ul className="flex items-center gap-8 ml-[10rem] text-purple-900">
                    <li onClick={togglePersonal} className="flex items-center gap-2 cursor-pointer">Personal <MdArrowDropDown /></li>

                    {/* toggle personal */}
                    {personal===true && <div className="absolute top-[4rem]  flex bg-white h-screen ">
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
                            <h1 className="text-neutral-500 text-[12px] pt-2">PAYMENTS</h1>
                            <ul className="text-sm text-black flex flex-col gap-4 cursor-pointer pb-5">
                                <li className="flex items-center gap-2"><span className="bg-red-50 p-2 rounded-full text-red-300"><HiLightBulb /></span>Electricity</li>
                                <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><AiOutlineHeatMap /></span>Airtime</li>
                                <li className="flex items-center gap-2"> <span className="bg-sky-50 p-2 rounded-full text-sky-300"><FaWifi /></span>Internet</li>
                                <li className="flex items-center gap-2"><span className="bg-slate-50 p-2 rounded-full text-slate-300"><BsFillGiftFill /></span>Gift Cards</li>
                                <li className="flex items-center gap-2"><span className="bg-orange-50 p-2 rounded-full text-orange-300"><TfiWorld /></span>Cardless Payment</li>
                                <li className="flex items-center gap-2"><span className="bg-blue-50 p-2 rounded-full text-blue-300"><FaTv /></span>TV</li>
                                <li className="flex items-center gap-2"><span className="bg-red-50 p-2 rounded-full text-red-300"><HiOutlineCubeTransparent /></span>Betting</li>
                                <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><SiTransportforlondon /></span>Transport</li>
                            </ul>
                            <h1 className="text-neutral-500 text-[12px] pt-2">CREDIT</h1>
                            <ul className="text-sm text-black flex flex-col gap-4 cursor-pointer">
                                <li className="flex items-center gap-2"><span className="bg-sky-50 p-2 rounded-full text-sky-300"><VscIssueDraft /></span>Overdrafts</li>
                                <li className="flex items-center gap-2"><span className="bg-yellow-50 p-2 rounded-full text-yellow-300"><MdMoney /></span>Salary Loan</li>
                                <li className="flex items-center gap-2"><span className="bg-purple-50 p-2 rounded-full text-purple-300"><FaShoppingBag /></span>Loan</li>
                            </ul>
                        </div>


                    </div>}
        

                    <li onClick={toggleBusiness} className="flex items-center gap-2 cursor-pointer">Business <MdArrowDropDown /></li>
                        {/* toggle business */}
                        {business===true && <div className="absolute top-[4rem]  flex bg-white h-screen">
                            <div className="bg-white h-screen px-6 py-3 rounded-[5px]">
                                <ul className="text-sm text-black flex flex-col gap-4 cursor-pointer">
                                    <li className="flex items-center gap-2"> <span className="bg-neutral-50 p-2 rounded-full"><RiHome4Fill /></span>Discover Business</li>
                                    <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><AiOutlineHeatMap /></span>Business Registration</li>
                                    <li className="flex items-center gap-2"><span className="bg-red-50 p-2 rounded-full text-red-300"><HiLightBulb /></span>softPOS</li>
                                    <li className="flex items-center gap-2"> <span className="bg-sky-50 p-2 rounded-full text-sky-300"><FaWifi /></span>Kuda Payroll</li>
                                    <li className="flex items-center gap-2"><span className="bg-slate-50 p-2 rounded-full text-slate-300"><BsFillGiftFill /></span>Cashback</li>
                                    <li className="flex items-center gap-2"><span className="bg-orange-50 p-2 rounded-full text-orange-300"><TfiWorld /></span>POS MAchine</li>
                                    <li className="flex items-center gap-2"><span className="bg-blue-50 p-2 rounded-full text-blue-300"><FaTv /></span>Invoicing</li>
                                    <li className="flex items-center gap-2"><span className="bg-red-50 p-2 rounded-full text-red-300"><HiOutlineCubeTransparent /></span>Salary Loan</li>
                                    <li className="flex items-center gap-2"><span className="bg-purple-50 p-2 rounded-full text-purple-300"><FaShoppingBag /></span>Business API</li>
                                    <li className="flex items-center gap-2"><span className="bg-yellow-50 p-2 rounded-full text-yellow-300"><MdMoney /></span>Payroll with Bento</li>
                                    <li className="flex items-center gap-2"><span className="bg-sky-50 p-2 rounded-full text-sky-300"><VscIssueDraft /></span>Sub Accounts</li>
                                    <li className="flex items-center gap-2"><span className="bg-green-50 p-2 rounded-full text-green-300"><AiOutlineHeatMap /></span>Virtual POS</li>
                                </ul>
                            </div>



                            <div className="bg-neutral-100 h-screen px-8 py-3 rounded-[5px]">
                                <h1 className="text-neutral-500 text-[12px] pt-2">PAYMENTS</h1>
                                <ul className="text-sm text-black flex flex-col gap-4 cursor-pointer pb-5">
                                    <li className="flex items-center gap-2"> <span className="bg-green-50 p-2 rounded-full text-green-300"><MdMoney /></span>Send Money</li>
                                    <li className="flex items-center gap-2"> <span className="bg-blue-50 p-2 rounded-full text-blue-300"><FaTv /></span>TV</li>
                                    <li className="flex items-center gap-2"> <span className="bg-pink-50 p-2 rounded-full text-pink-300"><FaWifi /></span>Airtime & Internet Data</li>
                                    <li className="flex items-center gap-2"> <span className="bg-orange-50 p-2 rounded-full text-orange-300"><HiLightBulb /></span>Electricity</li>
                                    <li className="flex items-center gap-2"> <span className="bg-red-50 p-2 rounded-full text-red-300"><FaPiggyBank /></span>Bill Payments</li>
                                </ul>
                            </div>
                        </div> }
                        
                    <li onClick={toggleCompany} className="flex items-center gap-2 cursor-pointer">Company <MdArrowDropDown /></li>
                    {/* company toggle */}
                    {company===true && <ul className="absolute top-[4rem] right-[42rem] bg-zinc-200 py-6 px-3 text-sm flex flex-col gap-4 rounded-[6px] text-black">
                        <li className="cursor-pointer">Blog</li>
                        <li className="cursor-pointer">Press</li>
                        <li className="cursor-pointer">Join Our Team</li>
                        <li className="cursor-pointer">About Us</li>
                    </ul> }
                    
                    
                    <li onClick={toggleHelp} className="flex items-center gap-2 cursor-pointer">Help <MdArrowDropDown /></li>
                    {/* toggle help */}
                    {helpp===true && <ul className="absolute top-[4rem] right-[35rem] bg-zinc-200 py-6 px-3 text-sm flex flex-col gap-4 rounded-[6px] text-black">
                        <li className="cursor-pointer">Get Help</li>
                        <li className="cursor-pointer">Scam Awareness</li>
                        <li className="cursor-pointer">FAQs</li>
                        <li className="cursor-pointer">Contact Us</li>
                        <li className="cursor-pointer">Self Help</li>
                    </ul> }

                </ul>


                <div className="flex items-center ml-[16rem] gap-4 text-purple-900">
                    <button>Sign in</button> 
                    <button className="text-white px-6 py-2 bg-purple-950 rounded-[8px]">Join Kuda</button>
                    <p className="bg-green-100 p-3 rounded-full"><Image src={flag} width={0} height={0} alt="flag_logo" className="w-4   "/></p>
                </div>
            </nav>

            {/* responsive for mobile & tablet */}
            <nav className=" flex p-[1rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div><Image src={logo} width={0} height={0} alt="logo" className=""/></div>

                <div className="flex ml-auto items-center gap-8">
                    <p className="bg-green-100 p-2 rounded-full"><Image src={flag} width={0} height={0} alt="image_flag" className="w-4"/></p>

                    <div className="flex items-center">
                        <p className="text-2xl"><IoMdMenu /></p>
                        <p className="text-2xl"><IoMdClose /></p>
                    </div>
                </div>
            </nav>

            <div className="px-[1rem] mt-2">

                <div className=" flex gap-8">
                    <button className="text-white px-6 py-2 bg-purple-950 rounded-[8px]">Join Kuda</button>
                    <button className="text-black px-6 py-2 bg-slate-200 rounded-[8px]">Sign In</button>
                </div>

                <div className="my-8 leading-[20px]">
                    <p>Personal</p>
                    <hr />

                    <p>Business</p>
                    <hr />

                    <p>Company</p>
                    <hr />

                    <p>Developers</p>
                    <hr />

                    <p>Contact Us</p>
                    <hr />

                    <p>Help</p>





                        
                </div>


            </div>





        </div>
    )



};

export default NavBar;