"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLoadGoogleMaps from "../hooks/useLoadGoogleMaps";

export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
    address: "",
  };

  const [formErrors, setFormErrors] = useState({});
  

  const router = useRouter();

  const mapsLoaded = useLoadGoogleMaps(
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  );

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitted(true);
      await axios.post("/api/send-email", formData);
      setFormErrors({});
      router.push("/thank-you");
    } catch (error) {
      console.log("Form Errors:", error.response.data.details);
      if (error.response?.data?.details) {
        setFormErrors(error.response.data.details);
      }
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const styles =
    "p-2 border-1 border-black rounded-sm bg-stone-200 md:bg-white  dark:bg-zinc-700";

  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit}
        autoComplete="on"
        className="flex w-11/12 flex-col lg:bg-zinc-300 dark:lg:bg-slate-900 gap-2 my-2 lg:mx-0 p-3 lg:p-8 lg:pb-0 rounded-2xl justify-center items-start">
        <div className="flex items-center justify-between w-full">
          <header>
            <h3 className="font-bold text-xl mb-1">
              Ready when you are, let’s bring your ideas to life with ease.
            </h3>
            <small className="text-gray-800 dark:text-gray-300">
              No spam or junk emails, just timely updates and professional
              communication. If you want to leave a message, view our full
              contact form{" "}
              <Link href={"/contact-us"} className="text-blue-500">
                here
              </Link>{" "}
              .
            </small>
          </header>

          <div className="hidden lg:flex">
            <button className="bg-blue-800 w-fit p-4 px-4 rounded-full text-sm text-white hover:bg-blue-700 transition cursor-pointer">
              Get started today
            </button>
          </div>
        </div>

        <hr className="my-2 border-black w-full border-1"></hr>

        <div className="flex flex-col lg:flex-row w-full h-fit gap-4 items-center lg:items-end">
          <div className="flex flex-col min-h-[100px] w-full lg:w-1/6">
            <label htmlFor="name">Name</label>
            <input
              className={`${styles} ${formErrors.name ? "border-red-500" : ""}`}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
            />
            {formErrors.name && (
              <p className="text-sm mt-1 h-5 text-red-600">
                {formErrors.name || "\u00A0"}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full min-h-[100px] lg:w-1/7">
            <label htmlFor="number">Number</label>
            <input
              className={`${styles} ${
                formErrors.number ? "border-red-500" : ""
              }`}
              type="text"
              name="number"
              id="number"
              placeholder="Phone number"
              onChange={(e) => {
                let raw = e.target.value.replace(/\D/g, ""); // remove all non-digits

                // If number starts with 1 and is 11 digits, strip the leading 1
                if (raw.length === 11 && raw.startsWith("1")) {
                  raw = raw.slice(1);
                }

                // Cap it at 10 digits
                raw = raw.slice(0, 10);

                // Format: 123-456-7890
                let formatted = raw
                  .replace(/^(\d{3})(\d)/, "$1-$2")
                  .replace(/^(\d{3})-(\d{3})(\d)/, "$1-$2-$3");

                setFormData({ ...formData, number: formatted });
              }}
              value={formData.number}
              autoComplete="tel"
              inputMode="numeric"
            />
            <p className="text-sm mt-1 h-5 text-red-600">
              {formErrors.number || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col w-full min-h-[100px] lg:w-1/4">
            <label htmlFor="address">Address</label>
            <input
              className={`${styles} ${
                formErrors.address ? "border-red-500" : ""
              }`}
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              onChange={handleChange}
              value={formData.address}
            />
            {formErrors.address && (
              <p className="text-sm mt-1 h-5 text-red-600">
                {formErrors.address || "\u00A0"}
              </p>
            )}
          </div>

          <div className="flex flex-col min-h-[100px] w-full lg:w-1/4">
            <label htmlFor="email">Email</label>
            <input
              className={`${styles} ${
                formErrors.service ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
            />
            {formErrors.email && (
              <p className="text-sm mt-1 h-5 text-red-600">
                {formErrors.email || "\u00A0"}
              </p>
            )}
          </div>

          <div className="flex flex-col min-h-[100px] w-full lg:w-fit">
            <label htmlFor="service">Service type</label>

            {/* relative wrapper just for select + arrow */}
            <div className="relative w-full">
              <select
                className={`${styles} appearance-none pr-10 w-full ${
                  formErrors.service ? "border-red-500" : ""
                }`}
                name="service"
                id="service"
                onChange={handleChange}
                value={formData.service}>
                <option value={""}>Select one</option>
                <option value="asphalt">Asphalt</option>
                <option value="concrete">Concrete</option>
                <option value="exterior_renovations">
                  Exterior Renovations
                </option>
                <option value="home_improvement">Home Improvement</option>
                <option value="masonry">Masonry</option>
                <option value="pressure_washing">Pressure Washing</option>
                <option value="paver_sealing">Paver Sealing</option>
              </select>

              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black">
                ▼
              </div>
            </div>

            {formErrors.service && (
              <p className="text-sm mt-1 h-5 text-red-600">
                {formErrors.service || "\u00A0"}
              </p>
            )}
          </div>
        </div>

        <button className="bg-blue-800 mt-3 flex md:hidden justify-center w-full p-3 rounded-full text-white hover:bg-blue-700 transition cursor-pointer">
          Get started today
        </button>
      </form>
    </>
  );
}
