import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-purple-500">{children}</button>
  )
}

export default TabButton