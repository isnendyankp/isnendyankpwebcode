import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
 
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md"> Let's connect and let's build something great together</p>
            <button className="text-[#ADB7BE] hover:text-white">Contact Me</button>

            {/* icon social contact */}
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