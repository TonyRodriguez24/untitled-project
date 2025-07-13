"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./layout/Button";
import axios from 'axios'
import AddressInput from "../components/AddressInput";
import useLoadGoogleMaps from "../hooks/useLoadGoogleMaps"

export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
    address: "",
  };

  const mapsLoaded = useLoadGoogleMaps(
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  );


  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsSubmitted(true);
      const response = await axios.post("/api/send-email", formData);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
    
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const styles = "p-2 border-1 border-black rounded-sm bg-stone-200 md:bg-white  dark:bg-zinc-700";

  return (
    <>
      <div className="w-full flex justify-center">
        {isSubmitted ? (
          <div className="bg-green-800 p-10 rounded-2xl">
            Thank you, your form has successfully been submitted
          </div>
        ) : (
          <form
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="on"
            className="flex w-11/12 flex-col lg:bg-zinc-300 dark:lg:bg-slate-900 gap-2 my-2 lg:mx-0 p-3 lg:p-8 rounded-2xl justify-center items-start">
            <div className="flex items-center justify-between w-full">
              <header >
                <h3 className="font-bold text-xl mb-1">
                  Ready when you are, let’s bring your ideas to life with ease.
                </h3>
                <small className="text-gray-800 dark:text-gray-300">
                  No spam or junk emails, just timely updates and professional
                  communication. If you want to leave a message, view our full
                  contact form{" "}
                  <Link href={"/contact-us"} className="text-blue-500">
                    here
                  </Link> .
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
              <div className="flex flex-col w-full lg:w-1/6">
                <label htmlFor="name">Name</label>
                <input
                  className={styles}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/7">
                <label htmlFor="number">Number</label>
                <input
                  className={styles}
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={formData.number}
                  autoComplete="tel"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/4">
                <label htmlFor="address">Address</label>
                {mapsLoaded ? (
                  <AddressInput
                    value={formData.address}
                    onChange={(address) =>
                      setFormData({ ...formData, address })
                    }
                  />
                ) : (
                  <p>Loading address input…</p>
                )}
              </div>
              <div className="flex flex-col w-full lg:w-1/4">
                <label htmlFor="email">Email</label>
                <input
                  className={styles}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="flex flex-col w-full lg:w-fit">
                <label htmlFor="service">Service type</label>
                <select
                  className={`${styles}`}
                  type="text"
                  name="service"
                  id="service"
                  placeholder="Enter your service"
                  onChange={handleChange}
                  value={formData.service}>
                  <option value={""}>Select one</option>
                  <option value="asphalt">Asphalt</option>
                  <option value="concrete">Concrete</option>
                  <option value="home_improvement">Home Improvement</option>
                  <option value="masonry">Masonry</option>
                  <option value="pressure_washing">Pressure Washing</option>
                  <option value="paver_sealing">Paver Sealing</option>
                </select>
              </div>
            </div>

            <button className="bg-blue-800 mt-3 flex md:hidden justify-center w-full p-3 rounded-full text-white hover:bg-blue-700 transition cursor-pointer">
              Get started today
            </button>
          </form>
        )}
      </div>
    </>
  );
}
