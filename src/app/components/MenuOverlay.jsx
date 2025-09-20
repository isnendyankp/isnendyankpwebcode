import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-black/90 backdrop-blur-md transition-all duration-300">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
