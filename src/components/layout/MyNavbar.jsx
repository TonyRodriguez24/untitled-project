"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-gray-900 w-full">
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
          {/* <Link href="/estimate" className="text-white hover:text-amber-400">
            Estimate Tool
          </Link> */}
          <Link href="/gallery" className="text-white hover:text-amber-400">
            Gallery
          </Link>

          {/* Services Dropdown (click-to-open) */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}>
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

          <Link href="/about-us" className="text-white hover:text-amber-400">
            About Us
          </Link>
          <Link href="/contact-us" className=" bg-blue-800 hover:bg-blue-600 p-2 px-4 rounded-2xl transition">
            Contact Us!
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 p-4 gap-5 flex flex-col justify-center items-center">
          <Link href="/" className="block text-white hover:text-amber-400">
            Home
          </Link>
          <Link
            href="/financing"
            className="block text-white hover:text-amber-400">
            Financing Options
          </Link>
          {/* <Link
            href="/estimate"
            className="block text-white hover:text-amber-400">
            Estimate Tool
          </Link> */}
          <Link
            href="/gallery"
            className="block text-white hover:text-amber-400">
            Gallery
          </Link>
          <div>
            <span className="text-white">Services</span>
            <div className="ml-4 space-y-1">
              <Link
                href="/services/asphalt"
                className="block text-white hover:text-amber-400">
                Asphalt
              </Link>
              <Link
                href="/services/concrete"
                className="block text-white hover:text-amber-400">
                Concrete
              </Link>
              <Link
                href="/services/home-improvement"
                className="block text-white hover:text-amber-400">
                Home Improvement
              </Link>
              <Link
                href="/services/masonry"
                className="block text-white hover:text-amber-400">
                Masonry
              </Link>
              <Link
                href="/services/paver-sealing"
                className="block text-white hover:text-amber-400">
                Paver Sealing
              </Link>
              <Link
                href="/services/pressure-washing"
                className="block text-white hover:text-amber-400">
                Pressure Washing
              </Link>
            </div>
          </div>
          <Link
            href="/about-us"
            className="block text-white hover:text-amber-400">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}
