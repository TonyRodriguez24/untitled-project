"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="dark:bg-black bg-white text-gray-800 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 lg:gap-0 xl:grid-cols-4 items-stretch w-full xl:max-w-full mx-auto md:p-10 p-5">
        {/* Contact Info */}
        <div className="flex flex-col gap-3 items-center p-3">
          <h3 className="font-bold text-2xl lg:text-3xl">CONNECT WITH US</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="tel:516-735-0685"
                className="flex items-center gap-2 hover:text-blue-800 no-underline">
                <FaPhone className="text-2xl" />
                <span>516-735-0685</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@jpmandsons.com"
                className="flex items-center gap-2 hover:text-blue-800">
                <IoMdMail className="text-2xl" />
                <span>contact@jpmandsons.com</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationArrow className="text-xl" />
              <span>150 Spring Lane, Levittown</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-1 items-center p-3">
          <h3 className="dark:text-white font-bold text-2xl lg:text-3xl">
            FOLLOW US
          </h3>
          <div className="flex gap-4 p-3 justify-center h-full mb-auto xl:mt-4">
            <a
              href="https://www.facebook.com/JPMSonsCorp/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-5xl lg:text-6xl dark:text-white hover:!text-blue-800 transition" />
            </a>
            <a
              href="https://www.tiktok.com/@jpmandsons"
              target="_blank"
              rel="noopener noreferrer">
              <FaTiktok className="text-5xl lg:text-6xl dark:text-white hover:!text-blue-800 transition" />
            </a>
            <a
              href="https://www.instagram.com/jpmandsonscorp/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-5xl lg:text-6xl hover:text-blue-800 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 items-center p-3">
          <h3 className="text-center font-bold text-2xl lg:text-3xl">
            QUICK LINKS
          </h3>
          <ul className="flex md:flex-col gap-4 text-center md:gap-2 p-0">
            <li className="hover:text-blue-800">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex gap-3 flex-col items-center p-3">
          <h3 className="text-center font-bold lg:text-3xl">READY TO BUILD?</h3>
          <p className="text-center px-2">
            Let’s bring your ideas to life! Contact us for a free consultation
            today and discover how JPM and Sons can help.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-zinc-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; 2025 JPM and Sons. All rights reserved.{" "}
          <Link
            href="/privacy-policy"
            className="ml-1 underline text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

