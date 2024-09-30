"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white text-[#1B232E] py-4">
        <div className="sm:container w-[93%] mx-auto flex justify-between items-center">
          <Link href="/">
            <img
              src="/icons/navLogo.svg"
              alt="logo"
              // className="sm:w-auto sm:h-auto h-[24px] w-[26px]"
            />
          </Link>
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <a href="#" className="hover:text-[#0755E9]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0755E9]">
                Technologies
              </a>
            </li>
            <li>
              <a href="/case-studies" className="hover:text-[#0755E9]">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-[#0755E9]">
                Team
              </a>
            </li>
            <li className="rounded-lg p-2 bg-[#0755E9] flex justify-center text-white">
              <a href="#" className="hover:text-[#1B232E]">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <img src="/icons/hamburgerIcon.svg" alt="menu" />
            </button>
          </div>
        </div>
        <hr className="bg-[#EEEEEE] h-[2px] mt-2" />
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Logo on sidebar */}
          <img src="/icons/navLogo.svg" alt="logo" />

          {/* Close icon */}
          <button onClick={toggleSidebar}>
            <img src="/icons/closeIcon.svg" alt="Close" />
          </button>
        </div>
        {/* Sidebar Links */}
        <ul className="flex flex-col space-y-6 pl-6 pt-6">
          <li>
            <a href="#" className="text-[#1B232E] text-xl hover:text-[#0755E9]">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1B232E] text-xl hover:text-[#0755E9]">
              Technologies
            </a>
          </li>
          <li>
            <a
              href="/case-studies"
              className="text-[#1B232E] text-xl hover:text-[#0755E9]"
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="/team"
              className="text-[#1B232E] text-xl hover:text-[#0755E9]"
            >
              Team
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1B232E] text-xl hover:text-[#0755E9]">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
