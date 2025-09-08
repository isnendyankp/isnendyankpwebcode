import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
          href={href}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] dark:text-gray-600 sm:text-xl rounded md:p-0 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
        >
          {title}
        </Link>
      );
}

export default NavLink;
