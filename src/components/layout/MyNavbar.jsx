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

  return (
    <nav className="bg-gray-900 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <Link href="/" className="text-white font-bold text-xl">
            JPM and Sons
          </Link>{" "}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-amber-400">
            Home
          </Link>
          <Link href="/financing" className="text-white hover:text-amber-400">
            Financing
          </Link>
          {/* <Link href="/estimate" className="text-white hover:text-amber-400">
            Estimate Tool
          </Link> */}
          <Link href="/gallery" className="text-white hover:text-amber-400">
            Gallery
          </Link>

          {/* Services Dropdown (hover to open and stay open) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div>
              <button className="text-white hover:text-amber-400 focus:outline-none">
                Services ▾
              </button>
              {isServicesOpen && (
                <div className="absolute z-10 bg-gray-900 shadow-lg rounded mt-2 w-48">
                  <Link
                    href="/services/asphalt"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Asphalt
                  </Link>
                  <Link
                    href="/services/concrete"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Concrete
                  </Link>
                  <Link
                    href="/services/exterior-renovations"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Exterior Renovations
                  </Link>
                  <Link
                    href="/services/home-improvement"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Home Improvement
                  </Link>
                  <Link
                    href="/services/masonry"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Masonry
                  </Link>
                  <Link
                    href="/services/paver-sealing"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Paver Sealing
                  </Link>
                  <Link
                    href="/services/pressure-washing"
                    className="block px-4 py-2 text-white hover:text-amber-400">
                    Pressure Washing
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link href="/about-us" className="text-white hover:text-amber-400">
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="bg-blue-800 hover:bg-blue-600 p-2 px-4 rounded-2xl transition">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 p-4 gap-5 flex flex-col justify-center items-center">
          <Link
            href="/"
            className="block text-white hover:text-amber-400 bg-gray-500 w-full p-3">
            Home
          </Link>
          <Link
            href="/financing"
            className="block text-white bg-gray-500 w-full p-3 hover:text-amber-400">
            Financing Options
          </Link>
          {/* <Link
            href="/estimate"
            className="block text-white hover:text-amber-400">
            Estimate Tool
          </Link> */}
          <Link
            href="/gallery"
            className="block text-white bg-gray-500 w-full p-3 hover:text-amber-400">
            Gallery
          </Link>
          <div className="w-full text-center">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-white text-start hover:text-amber-400 bg-gray-500 w-full p-3">
              Services ▾
            </button>
            {isMobileServicesOpen && (
              <div className="ml-4 flex flex-wrap space-y-1 mt-2">
                <Link
                  href="/services/asphalt"
                  className="block bg-gray-500 border-3 w-1/2 p-3 text-white hover:text-amber-400">
                  Asphalt
                </Link>
                <Link
                  href="/services/concrete"
                  className="block text-white bg-gray-500 border-3 w-1/2 p-3 hover:text-amber-400">
                  Concrete
                </Link>
                <Link
                  href="/services/exterior-renovations"
                  className="block bg-gray-500 border-3 w-1/2 p-3 text-white hover:text-amber-400">
                  Exterior Renovations
                </Link>
                <Link
                  href="/services/home-improvement"
                  className="block bg-gray-500 border-3 w-1/2 p-3 text-white hover:text-amber-400">
                  Home Improvement
                </Link>
                <Link
                  href="/services/masonry"
                  className="block bg-gray-500 border-3 w-1/2 p-3 text-white hover:text-amber-400">
                  Masonry
                </Link>
                <Link
                  href="/services/paver-sealing"
                  className="block bg-gray-500 border-3 w-1/2 p-3 text-white hover:text-amber-400">
                  Paver Sealing
                </Link>
                <Link
                  href="/services/pressure-washing"
                  className="block bg-gray-500 border-3 w-1/2 p-3 text-white hover:text-amber-400">
                  Pressure Washing
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className="block bg-gray-500 w-full p-3 text-white hover:text-amber-400">
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="block bg-blue-800 hover:bg-blue-600 p-2 px-4 rounded-2xl transition">
            Contact Us!
          </Link>
        </div>
      )}
    </nav>
  );
}
