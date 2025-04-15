import React from 'react'

const MenuOverlay = ({ links}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
            <li key={index}>
                
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay