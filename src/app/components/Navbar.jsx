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
    {
        title: "Contact",
        href: "#contact",
    }
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0">
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.href} title={link.title} />
                        </li>
                    ))}  
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar