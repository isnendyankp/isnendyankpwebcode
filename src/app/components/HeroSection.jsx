"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <section id="home">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            {/* Section Left */}
            <div className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-600 to-red-500'>Hello, I'm{" "}</span>
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
                            className="text-white"
                    />  
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I'm a software engineer based in Indonesia specializing in
                    <span className="text-white"> Software Engineer | Frontend Web Developer | QA Automation</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                        onClick={() => window.open('https://www.linkedin.com/in/isnendyan', '_blank')}
                        className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300">
                        Hire Me
                    </button>
                    <button 
                        onClick={() => window.open('https://drive.google.com/file/d/1Ap1elAquFcqAP5_If_r_NOZTD7wlXCHq/view?usp=drive_link', '_blank')}
                        className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white transition-all duration-300">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white transition-colors duration-300">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>

            {/* image section */}
            <div className="col-span-12 sm:col-span-5 place-self-center mt-8 sm:mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/nendy.jpeg"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover w-full h-full"
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