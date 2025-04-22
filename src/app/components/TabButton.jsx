import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button className={`mr-3 font-semibold hover:text-white ${buttonClasses} border-purple-500`}>
        {children}
    </button>
  )
}

export default TabButton