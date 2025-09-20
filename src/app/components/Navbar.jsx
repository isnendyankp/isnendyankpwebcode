"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Home",
        href: "#home",
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
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                        <Image src="/images/projects/Logo.png" alt="Logo" width={50} height={50} />
                    </Link>
                {/* Mobile Menu Button */}
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors duration-300" 
                                onClick={() => setNavbarOpen(false)}
                            ><XMarkIcon className="h-5 w-5"/></button>
                        ) : (
                            <button 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors duration-300" 
                                onClick={() => setNavbarOpen(true)}
                            ><Bars3Icon className="h-5 w-5" /></button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
  
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default Navbar