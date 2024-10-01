'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import logo from '../components/images/logo.png'
import { MdArrowDropDown } from "react-icons/md";
import flag from '../components/images/flag.png'

const NavBar=()=>{

    return(
        <>
            <nav className="flex items-center px-[5rem] py-[2rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div>
                    <Image src={logo} width={0} height={0} alt="logo" className=""/>
                </div>


                <ul className="flex items-center gap-10 ml-[16rem]">
                    <li className="flex items-center gap-2">Personal <MdArrowDropDown /></li>
                    <li className="flex items-center gap-2">Business <MdArrowDropDown /></li>
                    <li className="flex items-center gap-2">Company <MdArrowDropDown /></li>
                    <li className="flex items-center gap-2">Help <MdArrowDropDown /></li>
                </ul>


                <div className="flex items-center ml-auto gap-10">
                    <button>Sign in</button> 
                    <button className="text-white px-8 py-3 bg-purple-950 rounded-[8px]">Join Kuda</button>
                    <p className="bg-green-100 p-3 rounded-full"><Image src={flag} width={0} height={0} alt="flag_logo" className="w-6   "/></p>
                </div>


            </nav>
        </>
    )



};

export default NavBar;