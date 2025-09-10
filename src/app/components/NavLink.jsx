import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
          href={href}
          className="block py-2 pl-3 pr-4 text-black dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          {title}
        </Link>
      );
}

export default NavLink;
