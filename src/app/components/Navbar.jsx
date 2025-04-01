import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap item-center">
            <Link href="/" className="text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu"></div>
        </div>
    </nav>
  )
}

export default Navbar