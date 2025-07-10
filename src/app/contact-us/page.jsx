"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
    address: "",
    referral: "",
    message: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/send-email", formData);
      console.log(response);
      console.log(formData);
      setFormData(INITIAL_STATE);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="ContactForm"
      className="w-full lg:max-w-7xl mx-auto my-4 lg:px-30 py-10 rounded-lg">
      <h1 className="px-6 text-3xl lg:text-3xl text-black dark:text-white font-bold text-gray-900">
        How Can We Help?
      </h1>
      <p className="px-6 text-gray-500 text-sm mt-1 mb-8">
        Reach out to us with any questions or concerns—your satisfaction is our
        priority.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <div className="w-full lg:w-2/3 rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="flex-1 space-y-4">
                <div>
                  <label htmlFor="name" className="text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-stone-100 rounded-lg border-2 text-black border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                  />
                  {errors.name && (
                    <small className="text-red-500">{errors.name}</small>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="text-black dark:text-white">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="516-123-4567"
                    className="w-full bg-stone-100 text-black rounded-lg border-2 border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                  />
                  {errors.number && (
                    <small className="text-red-500">{errors.number}</small>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full text-black bg-stone-100 rounded-lg border-2 border-gray-600 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                  />
                  {errors.email && (
                    <small className="text-red-500">{errors.email}</small>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-4">
                <div>
                  <label
                    htmlFor="service"
                    className="text-black dark:text-white">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-stone-100 rounded-lg border-2 border-gray-600 px-3 py-2 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200
    ${formData.service ? "text-black" : "text-gray-500"}`}>
                    <option value="" disabled hidden>
                      Select a service
                    </option>
                    <option value="Concrete">Concrete</option>
                    <option value="Asphalt">Asphalt</option>
                    <option value="Masonry">Masonry</option>
                  </select>

                  {errors.service && (
                    <small className="text-red-500">{errors.service}</small>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="text-black dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="239 Cherry Lane, Levittown"
                    className="w-full bg-stone-100 rounded-lg border-2 border-gray-600 placeholder-gray-500 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
                  />
                  {errors.address && (
                    <small className="text-red-500">{errors.address}</small>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="referral"
                    className="text-black dark:text-white">
                    How did you hear about us?
                  </label>
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    className={`w-full bg-stone-100 rounded-lg border-2 border-gray-600 px-3 py-2
    focus:border-blue-500 focus:ring focus:ring-blue-200
    ${formData.referral ? "text-black" : "text-gray-500"}`}>
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="Google">Google</option>
                    <option value="Friend">Friend</option>
                    <option value="Social Media">Social Media</option>
                  </select>

                  {errors.referral && (
                    <small className="text-red-500">{errors.referral}</small>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-black dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                className="w-full bg-stone-100 rounded border-2 border-gray-600 placeholder-gray-500 text-black focus:border-blue-500 focus:ring focus:ring-blue-200 px-3 py-2"
              />
              {errors.message && (
                <small className="text-red-500">{errors.message}</small>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
                Get started today
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center gap-6">
          <Link
            href="/"
            className="text-gray-900 hover:text-blue-500 transition">
            <i className="bi bi-building dark:text-gray-400 text-3xl lg:text-2xl"></i>
            <h4 className="font-bold text-lg dark:text-white text-black">
              JPM and Sons
            </h4>
            <p className="dark:text-blue-300 text-gray-900 text-sm">
              150 Spring Lane, Levittown, NY
            </p>
          </Link>

          <a
            href="mailto:contact@jpmandsons.com"
            className="text-gray-900 hover:text-blue-500 transition">
            <i className="bi bi-envelope dark:text-gray-400 text-3xl lg:text-2xl"></i>
            <h4 className="font-bold text-lg dark:text-white text-black">
              Email
            </h4>
            <p className="dark:text-blue-300 text-gray-900 text-sm">
              contact@jpmandsons.com
            </p>
          </a>

          <a
            href="tel:516-735-0685"
            className="text-gray-900 hover:text-blue-500 transition">
            <i className="bi bi-telephone dark:text-gray-400 text-3xl lg:text-2xl"></i>
            <h4 className="font-bold text-lg dark:text-white text-black">
              Phone
            </h4>
            <p className="dark:text-blue-300 text-gray-900 text-sm">
              516-735-0685
            </p>
          </a>

          <div className="flex gap-2 lg:gap-3 justify-center">
            <a
              href="https://www.facebook.com/JPMSonsCorp/"
              target="_blank"
              className="text-black dark:text-white hover:text-blue-500 transition">
              <i className="bi bi-facebook text-4xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@jpmandsons"
              target="_blank"
              className="text-black dark:text-white hover:text-blue-500 transition">
              <i className="bi bi-tiktok text-4xl"></i>
            </a>
            <a
              href="https://www.instagram.com/jpmandsonscorp/"
              target="_blank"
              className="text-black dark:text-white hover:text-blue-500 transition">
              <i className="bi bi-instagram text-4xl"></i>
            </a>
          </div>

          <div className="mt-10">
            <h6 className="font-semibold">
              Questions or concerns about the website?
            </h6>
            <small className="text-gray-400">
              Reach out to the developer{" "}
              <a
                href="mailto:tonyrodriguez26@outlook.com"
                className="text-blue-600 font-semibold hover:underline">
                here
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
