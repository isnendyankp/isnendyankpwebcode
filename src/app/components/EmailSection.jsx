import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
 
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        {/* Animate from left */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute animate-pulse top-3/4 -left-4 transform">

        </div>

        {/* Contact section */}
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I&apos;m currently seeking roles as a Front-end Developer and QA Automation Engineer. Feel free to connect with me!
            </p>
            
            {/* icon social contact */}
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              Check out my work on GitHub and connect with me on LinkedIn below:
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/isnendyankp" target="_blank" rel="noopener noreferrer">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/isnendyan" target="_blank" rel="noopener noreferrer">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default EmailSection