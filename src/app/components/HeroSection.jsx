"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <section id="home">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            {/* Section Left */}
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white dark:text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold transition-colors duration-300">
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-300 dark:from-purple-600 dark:via-pink-600 dark:to-red-500'>Hello, I'm{" "}</span>
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
                            className="text-white dark:text-gray-900 transition-colors duration-300"
                    />  
                </h1>
                <p className="text-[#ADB7BE] dark:text-gray-600 text-base sm:text-lg mb-6 lg:text-xl transition-colors duration-300">
                    I'm a software engineer based in Indonesia specializing in
                    <span className="text-white dark:text-gray-900 transition-colors duration-300"> Software Engineer | Frontend Web Developer | QA Automation</span>
                </p>
                <div>
                    <button 
                        onClick={() => window.open('https://www.linkedin.com/in/isnendyan', '_blank')}
                        className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-300 dark:from-purple-600 dark:via-pink-600 dark:to-red-500 text-white hover:from-blue-600 hover:via-blue-800 hover:to-indigo-400 dark:hover:from-purple-700 dark:hover:via-pink-700 dark:hover:to-red-600 transition-all duration-300">
                        Hire Me
                    </button>
                    <button 
                        onClick={() => window.open('https://drive.google.com/file/d/1Ap1elAquFcqAP5_If_r_NOZTD7wlXCHq/view?usp=drive_link', '_blank')}
                        className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-300 dark:from-purple-600 dark:via-pink-600 dark:to-red-500 text-white mt-3 transition-all duration-300">
                        <span className="block bg-[#121212] dark:bg-gray-50 hover:bg-slate-800 dark:hover:bg-gray-100 rounded-full px-5 py-2 text-white dark:text-gray-900 transition-colors duration-300">
                            Download CV
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