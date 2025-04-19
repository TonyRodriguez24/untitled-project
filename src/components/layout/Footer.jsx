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
    <footer>
      <div className="grid grid-cols-4 max-w-3/4 mx-auto p-10 ">
        {/* Contact Info */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <ul className="flex flex-col gap-2">
            {/* Phone */}
            <li>
              <a
                href="tel:516-735-0685"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 no-underline">
                <FaPhone className="text-2xl" />
                <span>516-735-0685</span>
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:contact@jpmandsons.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <IoMdMail className="text-2xl" />
                <span>contact@jpmandsons.com</span>
              </a>
            </li>

            {/* Address (non-link, styled similarly) */}
            <li className="flex items-center gap-2 text-blue-600">
              <FaLocationArrow className="text-xl" />
              <span>150 Spring Lane, Levittown</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-center">Follow Us</h3>
          <div className="flex gap-2 justify-center h-fit my-3">
            <a
              href="https://www.facebook.com/JPMSonsCorp/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-5xl" />
            </a>
            <a
              href="https://www.tiktok.com/@jpmandsons"
              target="_blank"
              rel="noopener noreferrer">
              <FaTiktok className="text-5xl" />
            </a>
            <a
              href="https://www.instagram.com/jpmandsonscorp/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-5xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-center">Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-center">Ready to Build?</h3>
          <p className="px-4">
            Let’s bring your ideas to life! Contact us for a free consultation
            today and discover how JPM and Sons can help.
          </p>
        </div>
      </div>
    </footer>
  );
}
