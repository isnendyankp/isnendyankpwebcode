import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href="/" className="text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu hidden md:block md:w-auto">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar