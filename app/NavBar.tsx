"use client";
import React, { useContext, useRef, useState } from "react";
import { navLinks } from "./routes/nav-links";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import SideNav from "./SideNav";

const NavBar = () => {
  return (
    <nav className="flex justify-between border-b p-2 items-center shadow-md">
      <SideNav />
      <ul className="flex space-x-5 items-center">
        {navLinks.map((link, index) => (
          <li key={index} className="hidden md:inline md:text-base lg:text-lg">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
