'use client'
import Image from "next/image"
import logo from '../components/images/logo.png'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbWorld } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { TbLetterMSmall } from "react-icons/tb";
import { ImLinkedin2 } from "react-icons/im";


const Footer=()=>{

    return (
        <>
            {/* 8 */}
            <div className="lg:flex  gap-12 px-[1rem] md:px-[3rem]  lg:px-[5rem] mt-10">

                <div>
                    <Image src={logo} width={0} height={0} alt="image" className=""/>
                </div>

                <div className="grid grid-cols-2 lg:flex gap-20 pt-10">
                        {/* a */}
                        <ul className="text-sm md:leading-[25px] leading-[2rem] ">
                            <li className="text-purple-900"><b>Personal</b></li>
                            <li>Discover Personal</li>
                            <li>Transfer & Spend </li>
                            <li>Save</li>
                            <li>Investment</li>
                            <li>Kuda Card</li>
                        </ul>

                        <ul className="text-sm md:leading-[25px] leading-[2rem] ">
                            <li className="text-purple-900"><b>Business</b></li>
                            <li>Discover Business</li>
                            <li>softPOS</li>
                            <li>Business Registration</li>
                            <li>Invoicing</li>
                            <li>Salary Loan</li>
                            <li>Business API</li>
                            <li>Join Kuda Business</li>
                        </ul>

                        <ul className="text-sm md:leading-[25px] leading-[2rem] ">
                            <li className="text-purple-900"><b>Company</b></li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Join Our Team</li>
                            <li>About Us</li>
                        </ul>

                        <ul className="text-sm md:leading-[25px] leading-[2rem] ">
                            <li className="text-purple-900"><b>Help</b></li>
                            <li>Get Help</li>
                            <li>Scam Awareness</li>
                            <li>FAQs</li>
                            <li>Security</li>
                            <li>Contact Us</li>
                            <li>Self Help</li>
                        </ul>

                        <ul className="text-sm md:leading-[25px] leading-[2rem] ">
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
            <div className="md:flex gap-5 px-[1rem] md:px-[3rem] lg:px-[15rem] mt-10">
                {/* apple store button */}
                    <button className="bg-black text-white px-3 py-1 rounded-[8px] w-fit flex items-center mt-5 gap-1">
                        <p className="text-2xl"><FaApple /></p>
                        <div>
                            <p className="text-[10px]">Download on the</p>
                            <p className="text-[14px]">App Store</p>
                        </div>
                    </button>


                {/* google store button */}
                    <button className="bg-black text-white w-fit px-3 py-1 rounded-[8px] flex items-center mt-5 gap-1">
                        <p className="text-2xl"><FcGoogle /></p>
                        <div>
                            <p className="text-[10px]">GET IT ON</p>
                            <p className="text-[14px]">Google Play</p>
                        </div>
                    </button>

                    <button className="bg-purple-900 text-white w-fit px-3 py-1 rounded-[8px] flex items-center mt-5 gap-1">
                        <p className="text-sm bg-neutral-200 rounded-full p-1 text-black"><TbWorld /></p>
                        <div>
                            <p className="text-[10px]">Sign into Kuda</p>
                            <p className="text-[14px]">On The Web</p>
                        </div>
                    </button>
            </div>

            {/* 10 */}
            <h1 className="text-center mt-20 text-sm text-purple-900">Products may vary by country or market.</h1>
            <div className="md:flex px-[1rem] md:px-[3rem] lg:px-[5rem] mt-12 justify-between">
                    

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
                        <p className="text-purple-900 text-sm mt-5"><b>Lagos</b></p>
                        <p className="mt-1 text-sm">1-11 Commercial Avenue, <br /> Yaba, Lagos, <br />
                        Nigeria</p>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm mt-5"><b>London</b></p>
                        <p className="mt-1 text-sm">5 New Street Square, <br />
                            London, EC4A 3TW, <br />
                            United Kingdom
                        </p>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm mt-5"><b>Cape Town</b></p>
                        <p className="mt-1 text-sm">146 Campground Road, <br />
                        Snakepit Building, Level 4, <br /> Newlands, Cape Town
                        </p>
                    </div>

                    <div>
                        <p className="text-purple-900 text-sm mt-5"><b>Canada</b></p>
                        <p className="mt-1 text-sm">3080 Yonge Street, <br />
                            Suite 6060, Toronto, <br />
                            Ontario M4N 3N1
                        </p>
                    </div>
            </div>

            {/* 11 */}
            <div className="mt-20  text-sm text-neutral-500 px-[1rem] md:px-[3rem] lg:px-[5rem]">
                    <h1>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</h1>

                    <p className="my-5">If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>

                    <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>

                    <p className="my-5">Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.</p>
            </div>
                







        
        </>
    )


};

export default Footer;