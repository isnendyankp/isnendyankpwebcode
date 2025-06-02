"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            {/* Section Left */}
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text  bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-300'>Hello, I'm{" "}</span>
                    <br></br>
                    <TypeAnimation
                            sequence={[
                                "Nendy",
                                1000,
                                "Software Engineer",
                                1000,
                                "Frontend Developer",
                                1000,
                                "QA Automation",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                    />  
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I'm a software engineer based in Indonesia
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-300 text-white hover:bg-slate-200">
                        Hire Me
                    </button>
                    <button 
                        onClick={() => window.open('https://drive.google.com/file/d/1Ap1elAquFcqAP5_If_r_NOZTD7wlXCHq/view?usp=drive_link', '_blank')}
                        className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-300 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            My CV
                        </span>
                    </button>
                </div>
            </div>

            {/* image section */}
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/nendy.jpeg"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Herosection 