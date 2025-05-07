"use client";

import { useState } from "react";

export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
    address: ""
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const styles =
    "p-2 border-1 border-black rounded-sm bg-gray-900 text-white";

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="on"
      className="flex flex-col gap-2 my-2 mx-3 lg:mx-0 p-7 rounded-2xl bg-gray-800 shadow-background shadow-2xl h-full w-fit justify-center items-start">
      <header className="text-start">
        <h3 className="fw-bold text-xl">
          Ready when you are, let’s bring your ideas to life with ease.
        </h3>
        <small className="text-gray-400">
          Rest assured, we respect your privacy—no spam or junk emails, just
          timely updates and professional communication.
        </small>
      </header>

      <hr className="my-2 border-black w-full border-1"></hr>

      <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap w-full gap-4 items-center lg:items-end">
        <div className="flex flex-col w-4/5 lg:w-2/3">
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
        <div className="flex flex-col w-4/5 lg:w-2/3">
          <label htmlFor="number">Number</label>
          <input
            className={styles}
            type="tel"
            name="number"
            id="number"
            placeholder="Enter your number"
            onChange={handleChange}
            value={formData.number}
            autoComplete="tel"
          />
        </div>
        <div className="flex flex-col w-4/5 lg:w-2/3">
          <label htmlFor="address">Address</label>
          <input
            className={styles}
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <div className="flex flex-col w-4/5 lg:w-2/3">
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
        <div className="flex flex-col w-4/5 lg:w-2/3">
          <label htmlFor="service">Service type</label>
          <select
            className={styles}
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
        <button className="bg-blue-800 py-2 px-4 border-1 my-4  lg:my-0 border-black rounded-sm w-4/5 h-fit cursor-pointer ">
          Get started today
        </button>
      </div>
    </form>
  );
}
