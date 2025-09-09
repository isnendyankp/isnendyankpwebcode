"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
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
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-100 dark:bg-opacity-100 transition-colors duration-300">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="text-2xl md:text-5xl text-gray-900 dark:text-white font-semibold">
                        <Image src="/images/projects/Logo.png" alt="Logo" width={50} height={50} />
                    </Link>
                {/* Mobile Menu Button */}
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button 
                                className="flex items-center px-3 py-2 border rounded border-gray-600 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors duration-300" 
                                onClick={() => setNavbarOpen(false)}
                            ><XMarkIcon className="h-5 w-5"/></button>
                        ) : (
                            <button 
                                className="flex items-center px-3 py-2 border rounded border-gray-600 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-colors duration-300" 
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
                        {/* Theme Toggle for Desktop */}
                        <li>
                            <ThemeToggle />
                        </li>  
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default Navbar