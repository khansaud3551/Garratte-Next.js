"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
  { name: "Home", path: "/" },
  {
    name: "Our Story",
    path: "/ourstory",
  },
  {
    name: "Pillars",
    path: "/pillars",
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
            <div className="ml-10 flex items-baseline space-x-4">
              {NavLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className="text-secondary-light hover:text-white px-3 py-2 rounded-md  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="rounded-2xl text-white font-semibold text-2xl px-14 py-3 bg-[#424242]">
              Join Now
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          } md:hidden fixed top-0 left-0 h-full w-full bg-gray-800 z-50 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {NavLinks.map((link) => (
              <Link
                href={link.path}
                key={link.name}
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md
                text-2xl font-medium mb-4"
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
                className="h-8 w-8"
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
