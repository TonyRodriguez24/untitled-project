"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white font-bold px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl">
          JPM and Sons
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center ml-10 w-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/financing">Financing</Link>
          </li>
          <li>
            <Link href="/estimate">Estimate Tool</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          {/* Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}>
            <button>Services ▾</button>
            {isServicesOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded w-48 p-2">
                <li>
                  <Link href="/services/asphalt">Asphalt</Link>
                </li>
                <li>
                  <Link href="/services/concrete">Concrete</Link>
                </li>
                <li>
                  <Link href="/services/home-improvement">
                    Home Improvement
                  </Link>
                </li>
                <li>
                  <Link href="/services/masonry">Masonry</Link>
                </li>
                <li>
                  <Link href="/services/paver-sealing">Paver Sealing</Link>
                </li>
                <li>
                  <Link href="/services/pressure-washing">
                    Pressure Washing
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li className="ml-auto">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/financing">Financing</Link>
          </li>
          <li>
            <Link href="/estimate">Estimate Tool</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <details>
              <summary className="cursor-pointer">Services</summary>
              <ul className="ml-4 mt-2 space-y-1">
                <li>
                  <Link href="/services/asphalt">Asphalt</Link>
                </li>
                <li>
                  <Link href="/services/concrete">Concrete</Link>
                </li>
                <li>
                  <Link href="/services/home-improvement">
                    Home Improvement
                  </Link>
                </li>
                <li>
                  <Link href="/services/masonry">Masonry</Link>
                </li>
                <li>
                  <Link href="/services/paver-sealing">Paver Sealing</Link>
                </li>
                <li>
                  <Link href="/services/pressure-washing">
                    Pressure Washing
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
