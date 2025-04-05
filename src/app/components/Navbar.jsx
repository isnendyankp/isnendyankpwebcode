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
    {
        title: "Projects",
        href: "#projects",
    },
]

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/" className="text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu block md:w-auto" id="navbar">
                <ul className="flex flex-col md:flex-row space-y-8 md:space-y-0">
                    {navLinks.map((link) => (
                        <NavLink key={link.title} href={link.href} title={link.title} />
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar