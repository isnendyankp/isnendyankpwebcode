import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-black/90 dark:bg-[#121212]/90 backdrop-blur-md transition-all duration-300">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
      {/* Theme Toggle for Mobile */}
      <li className="mt-4">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default MenuOverlay;
