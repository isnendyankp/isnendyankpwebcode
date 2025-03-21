import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            {/* Section Left */}
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-6xl font-extrabold">Hello, I'm Nendy</h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">I'm a software engineer based in Indonesia</p>
            </div>

            {/* image section */}
            <div className="col-span-5 place-self-center">
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