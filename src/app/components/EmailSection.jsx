import React from 'react'
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md"> Let's connect and let's build something great together</p>
            <button className="text-[#ADB7BE] hover:text-white">Contact Me</button>

            {/* icon social contact */}
            <div className="socials flex flex-row">
            <Link href="github.com"></Link>

            </div>
        </div>
    </section>
  )
}

export default EmailSection