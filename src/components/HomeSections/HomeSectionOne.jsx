'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const HomeSectionOne=()=>{

    return(
        <>
            <section>
               <div className="flex   px-[10rem]">
                    <div>
                        <h1>The money app for <br /> Africans.</h1>
                        <p>Make free transfers, enjoy cashless payment <br /> options and earn interest on your savings with <br /> Kuda.</p>

                        <div>
                            <button>App Store</button>
                            <button>Google Play</button>
                        </div>
                    </div>




                    <div className="ml-[38rem]">image</div>
                </div>



            </section>
        </>
    )



};

export default HomeSectionOne;