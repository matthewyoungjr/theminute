"use client";
import React from "react";
import { navLinks } from "./routes/nav-links";
import { Link } from "next-view-transitions";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="flex justify-between border-b p-2 items-center shadow-md">
      <ul className="flex space-x-5 items-center">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="hidden md:inline md:text-base lg:text-base"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {/* <SideNav /> */}
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
