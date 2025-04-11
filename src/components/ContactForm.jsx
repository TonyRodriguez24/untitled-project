"use client";

import { useState } from "react";

export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
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
    "p-2 border-1 border-black rounded-sm bg-gray-800 text-white w-70";

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="on"
      className="flex flex-col gap-2 bg-green-600 h-full justify-center items-center">
      <div className="flex flex-col">
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

      <div className="flex flex-col">
        <label htmlFor="number">Number</label>
        <input
          className={styles}
          type="tel"
          name="number"
          id="number"
          placeholder="Enter your number"
          onChange={handleChange}
          value={formData.number}
        />
      </div>

      <div className="flex flex-col">
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

      <div className="flex flex-col">
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
    </form>
  );
}
