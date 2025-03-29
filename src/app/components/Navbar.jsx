import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div classname="flex flex-wrap">
            <Link href="/" className="text-5xl text-white font-semibold">LOGO</Link>
            <div classname="menu"></div>
        </div>
    </nav>
  )
}

export default Navbar