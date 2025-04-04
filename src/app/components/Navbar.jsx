import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink';

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#about",
    },
]

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/" className="text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu block md:w-auto" id="navbar">
                <ul>
                    <li><Link href="/" className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-gray-300">Home</Link></li>
                    <li><Link href="#about" className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-gray-300">About</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar