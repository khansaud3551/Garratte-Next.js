"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
  { name: "Home", path: "/" },
  // {
  //   name: "Our Story",
  //   path: "/ourstory",
  // },
  {
    name: "YouTube",
    path: "https://www.youtube.com/channel/UCnTYT3xg7C1iUmTGRufmi4g",
  },
  {
    name: "Free Training",
    path: "/training",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container px-5 mx-auto">
      <nav className="pt-8 pb-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/logo.gif"
                className="ml-[-27px] w-[150px] md:w-[200px]"
                alt="Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {NavLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  target={link.name === "YouTube" ? "_blank" : "_self"}
                  className="px-3 py-2 rounded-md text-secondary-light hover:text-white "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/training">
              <button className="rounded-2xl text-white font-semibold text-2xl px-14 py-3 bg-[#424242]">
                Join Now
              </button>
            </Link>
          </div>

          <div className="flex -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden fixed top-0 left-0 h-full w-full bg-black z-50 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {NavLinks.map((link) => (
              <Link
                href={link.path}
                key={link.name}
                onClick={toggleMenu}
                className="px-3 py-2 mb-4 text-2xl font-medium text-gray-300 rounded-md hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
