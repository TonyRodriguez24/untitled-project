"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
    address: "",
    company: "",
  };

  const [fieldStatus, setFieldStatus] = useState({
    name: null,
    number: null,
    email: null,
    address: null,
    service: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const router = useRouter();

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return /^[a-zA-Z\s'-]{2,}$/.test(value);
      case "number":
        return value.replace(/\D/g, "").length === 10;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "address":
        return value.trim().length > 5;
      case "service":
        return value !== "";
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company.trim() !== "") {
      console.warn("Spam detected via honeypot. Submission blocked.");
      return;
    }

    const updatedStatus = {};
    let allValid = true;

    for (const key in formData) {
      const isValid = validateField(key, formData[key]);
      updatedStatus[key] = isValid;
      if (!isValid) allValid = false;
    }

    setFieldStatus(updatedStatus);

    if (!allValid) {
      console.log("Validation failed. Form not submitted.");
      return;
    }

    try {
      setIsSubmitted(true);
      await axios.post("/api/send-email", formData);
      setFormErrors({});
      router.push("/thank-you");
    } catch (error) {
      console.log("Form Errors:", error.response?.data?.details);
      if (error.response?.data?.details) {
        setFormErrors(error.response.data.details);
      }
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let val = value;

    if (name === "number") {
      let raw = value.replace(/\D/g, "");
      if (raw.length === 11 && raw.startsWith("1")) raw = raw.slice(1);
      raw = raw.slice(0, 10);
      val = raw
        .replace(/^(\d{3})(\d)/, "$1-$2")
        .replace(/^(\d{3})-(\d{3})(\d)/, "$1-$2-$3");
    }

    setFormData((prev) => ({ ...prev, [name]: val }));

    const isValid = validateField(name, val);
    setFieldStatus((prev) => ({ ...prev, [name]: isValid }));

    console.log("Field:", name, "| Value:", val, "| Valid:", isValid);
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
          <div className="flex flex-col  lg:min-h-[100px] w-full lg:w-1/6">
            <label htmlFor="name">Name</label>

            <input
              className={`${styles} ${
                fieldStatus.name === true
                  ? "border-green-500"
                  : fieldStatus.name === false
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
            />

            {/* validation message zone */}
            <div className="lg:h-9 mt-1 text-sm">
              {fieldStatus.name === true && (
                <span className="text-green-600">✓ Looks good</span>
              )}
              {fieldStatus.name === false && (
                <p className="text-red-600">Name must be at least 5 letters.</p>
              )}
              {formErrors.name && fieldStatus.name === null && (
                <p className="text-red-600">{formErrors.name}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full lg:min-h-[100px] lg:w-1/7">
            <label htmlFor="number">Number</label>
            <input
              className={`${styles} ${
                fieldStatus.number === true
                  ? "border-green-500"
                  : fieldStatus.number === false
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="number"
              id="number"
              placeholder="Phone number"
              onChange={handleChange}
              value={formData.number}
              autoComplete="tel"
              inputMode="numeric"
            />
            <div className="lg:h-9 mt-1 text-sm">
              {fieldStatus.number === true && (
                <span className="text-green-600">✓ Looks good</span>
              )}
              {fieldStatus.number === false && (
                <p className="text-red-600">Number must be 10 digits.</p>
              )}
              {formErrors.number && fieldStatus.number === null && (
                <p className="text-red-600">{formErrors.number}</p>
              )}
            </div>
          </div>

          <input
            type="text"
            name="company"
            autoComplete="off"
            className="hidden"
            tabIndex="-1"
          />

          <div className="flex flex-col w-full lg:min-h-[100px] lg:w-1/4">
            <label htmlFor="address">Address</label>

            <input
              className={`${styles} ${
                fieldStatus.address === true
                  ? "border-green-500"
                  : fieldStatus.address === false
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="address"
              id="address"
              autoComplete="on"
              placeholder="Enter your address"
              onChange={handleChange}
              value={formData.address}
            />

            {/* validation feedback */}
            <div className="lg:h-9 mt-1 text-sm">
              {fieldStatus.address === true && (
                <span className="text-green-600">✓ Looks good</span>
              )}
              {fieldStatus.address === false && (
                <p className="text-red-600">
                  Address must be at least 6 characters.
                </p>
              )}
              {formErrors.address && fieldStatus.address === null && (
                <p className="text-red-600">{formErrors.address}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:min-h-[100px] w-full lg:w-1/4">
            <label htmlFor="email">Email</label>

            <input
              className={`${styles} ${
                fieldStatus.email === true
                  ? "border-green-500"
                  : fieldStatus.email === false
                  ? "border-red-500"
                  : ""
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
            />

            {/* validation feedback */}
            <div className="lg:h-9 mt-1 text-sm">
              {fieldStatus.email === true && (
                <span className="text-green-600">✓ Looks good</span>
              )}
              {fieldStatus.email === false && (
                <p className="text-red-600">
                  Please enter a valid email address.
                </p>
              )}
              {formErrors.email && fieldStatus.email === null && (
                <p className="text-red-600">{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:min-h-[100px] w-full lg:w-fit">
            <label htmlFor="service">Service type</label>

            {/* relative wrapper for select + dropdown arrow */}
            <div className="relative w-full">
              <select
                className={`${styles} appearance-none pr-10 w-full ${
                  fieldStatus.service === true
                    ? "border-green-500"
                    : fieldStatus.service === false
                    ? "border-red-500"
                    : ""
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

            {/* validation message */}
            <div className="lg:h-9 mt-1 text-sm">
              {fieldStatus.service === true && (
                <span className="text-green-600">✓ Looks good</span>
              )}
              {fieldStatus.service === false && (
                <p className="text-red-600">Please select a service type.</p>
              )}
              {formErrors.service && fieldStatus.service === null && (
                <p className="text-red-600">{formErrors.service}</p>
              )}
            </div>
          </div>
        </div>

        <button className="bg-blue-800 mt-3 flex md:hidden justify-center w-full p-3 rounded-full text-white hover:bg-blue-700 transition cursor-pointer">
          Get started today
        </button>
      </form>
    </>
  );
}
