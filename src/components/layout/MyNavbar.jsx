"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav className="bg-blue-800 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <Link href="/" className="text-white font-bold text-xl">
            JPM and Sons
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-amber-400">
            Home
          </Link>
          <Link href="/financing" className="text-white hover:text-amber-400">
            Financing
          </Link>
          <Link href="/gallery" className="text-white hover:text-amber-400">
            Gallery
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button className="text-white hover:text-amber-400 focus:outline-none">
              Services ▾
            </button>
            {isServicesOpen && (
              <div className="absolute z-10 bg-gray-900 shadow-lg rounded mt-2 w-48">
                {[
                  "asphalt",
                  "concrete",
                  "exterior-renovations",
                  "home-improvement",
                  "masonry",
                  "paver-sealing",
                  "pressure-washing",
                ].map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    {slug
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about-us" className="text-white hover:text-amber-400">
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="bg-blue-500 hover:bg-blue-600 p-2 px-4 rounded-2xl transition">
            Contact Us!
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white cursor-pointer text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[999px] py-4 opacity-100" : "max-h-0 opacity-0"
        } `}>
        <div className="flex flex-col text-center bg-blue-800 justify-center items-center transition-opacity duration-300">
          {[
            { href: "/financing", text: "Financing Options" },
            { href: "/gallery", text: "Gallery" },
            { href: "/about-us", text: "About Us" },
          ].map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMobileMenu}
              className="block text-white font-semibold text-lg bg-blue-800 border-b-3 w-full p-4 hover:text-amber-400">
              {text.toUpperCase()}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="w-full text-center border-b-4 border-white">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-white text-center font-semibold text-lg text-center cursor-pointer hover:text-amber-400 bg-blue-800 w-full p-5">
              SERVICES ▾
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isMobileServicesOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}>
              <div className="flex gap-2 justify-center flex-wrap space-y-1 mt-2 p-2">
                {[
                  "asphalt",
                  "concrete",
                  "exterior-renovations",
                  "home-improvement",
                  "masonry",
                  "paver-sealing",
                  "pressure-washing",
                ].map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    onClick={closeMobileMenu}
                    className="block bg-blue-800 border-b text-start w-2/5 p-3 text-white hover:text-amber-400">
                    {slug
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us Last */}
          <Link
            href="/contact-us"
            onClick={closeMobileMenu}
            className="block bg-white mx-auto flex my-2 mx-4 hover:bg-blue-600 p-3 px-6 rounded-2xl transition">
            Contact Us!
          </Link>
        </div>
      </div>
    </nav>
  );
}
