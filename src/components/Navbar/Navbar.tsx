"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (path: string, sectionId: string) => {
    setIsSidebarOpen(false);
    if (sectionId === "contact-us") {
      handleScrollToSection(sectionId);
    } else if (pathname === "/") {
      handleScrollToSection(sectionId);
    } else {
      router.push(`/?section=${sectionId}`);
    }
  };

  useEffect(() => {
    const scrollTo = searchParams.get("section");
    if (scrollTo) {
      handleScrollToSection(scrollTo);
    }
  }, [searchParams]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white text-[#1B232E] py-4">
        <div className="sm:container w-[93%] mx-auto flex justify-between items-center">
          <Link href="/">
            <img
              src="/icons/navLogo.svg"
              alt="logo"
              className="w-auto h-auto"
            />
          </Link>
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <a
                onClick={() => handleNavClick("/", "services")}
                className="hover:text-[#0755E9] cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavClick("/", "technologies")}
                className="hover:text-[#0755E9] cursor-pointer"
              >
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
            <li
              onClick={() => handleNavClick("/", "contact-us")}
              className="rounded-lg p-2 bg-[#0755E9] flex justify-center text-white cursor-pointer"
            >
              <a className="hover:text-[#1B232E]">Contact Us</a>
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
            <a
              onClick={() => handleNavClick("/", "services")}
              className="text-[#1B232E] text-xl hover:text-[#0755E9]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => handleNavClick("/", "technologies")}
              className="text-[#1B232E] text-xl hover:text-[#0755E9]"
            >
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
            <a
              onClick={() => handleNavClick("/", "contact-us")}
              className="text-[#1B232E] text-xl hover:text-[#0755E9]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
