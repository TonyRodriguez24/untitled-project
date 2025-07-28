"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function ContactForm() {
  const INITIAL_STATE = {
    name: "",
    number: "",
    email: "",
    service: "",
    address: "",
    referral: "",
    message: "",
    company: "",
  };

  const [fieldStatus, setFieldStatus] = useState({
    name: null,
    number: null,
    email: null,
    address: null,
    service: null,
    referral: null,
    message: null,
  });

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const router = useRouter();

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
      case "referral":
        return value !== "";
      case "message":
        return value.trim().length >= 10;
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
    "w-full bg-stone-200 rounded-sm border-1 text-black border-black dark:bg-zinc-100 p-2";
  

  return (
    <div
      id="ContactForm"
      className="w-full lg:max-w-7xl mx-auto my-4 lg:px-30 py-10 rounded-lg">
      <h1 className="px-6 text-3xl lg:text-3xl text-black dark:text-white font-bold text-gray-900">
        How Can We Help?
      </h1>
      <p className="px-6 text-gray-500 text-sm mt-1 mb-2 lg:mb-8">
        Reach out to us with any questions or concerns—your satisfaction is our
        priority.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <div className="w-full lg:w-2/3 rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
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
                    className={`${styles} ${
                      fieldStatus.name === true
                        ? "border-green-500"
                        : fieldStatus.name === false
                          ? "border-red-500"
                          : ""
                    }`}
                  />
                  <div className="lg:h-3 mt-1 text-sm">
                    {fieldStatus.name === true && (
                      <span className="text-green-600">✓ Looks good</span>
                    )}
                    {fieldStatus.name === false && (
                      <p className="text-red-600">
                        Name must be at least 5 letters.
                      </p>
                    )}
                    {formErrors.name && fieldStatus.name === null && (
                      <p className="text-red-600">{formErrors.name}</p>
                    )}
                  </div>
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
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="516-123-4567"
                    autoComplete="tel"
              inputMode="numeric"
                    className={`${styles} ${
                      fieldStatus.number === true
                        ? "border-green-500"
                        : fieldStatus.number === false
                          ? "border-red-500"
                          : ""
                    }`}
                  />
                  <div className="lg:h-3 mt-1 text-sm">
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
                    className={`${styles} ${
                      fieldStatus.email === true
                        ? "border-green-500"
                        : fieldStatus.email === false
                          ? "border-red-500"
                          : ""
                    }`}
                  />
                  <div className="lg:h-3 mt-1 text-sm">
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
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col w-full lg:w-full ">
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
                  <div className="lg:h-3 mt-1 text-sm">
                    {fieldStatus.service === true && (
                      <span className="text-green-600">✓ Looks good</span>
                    )}
                    {fieldStatus.service === false && (
                      <p className="text-red-600">
                        Please select a service type.
                      </p>
                    )}
                    {formErrors.service && fieldStatus.service === null && (
                      <p className="text-red-600">{formErrors.service}</p>
                    )}
                  </div>
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
                    className={`${styles} ${
                      fieldStatus.address === true
                        ? "border-green-500"
                        : fieldStatus.address === false
                          ? "border-red-500"
                          : ""
                    }`}
                  />
                  <div className="lg:h-3 mt-1 text-sm">
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

                <div>
                  <label
                    htmlFor="referral"
                    className="text-black dark:text-white">
                    How did you hear about us?
                  </label>

                  <div className="relative w-full">
                    <select
                      className={`${styles} appearance-none pr-10 w-full ${
                        fieldStatus.referral === true
                          ? "border-green-500"
                          : fieldStatus.referral === false
                            ? "border-red-500"
                            : ""
                      }`}
                      name="referral"
                      id="referral"
                      onChange={handleChange}
                      value={formData.referral}>
                      <option value="" disabled hidden>
                        Select
                      </option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="friend_family">Friend or Family</option>
                      <option value="returning_customer">
                        Returning Customer
                      </option>
                    </select>

                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black">
                      ▼
                    </div>
                  </div>

                  <div className="lg:h-3 mt-1 text-sm">
                    {fieldStatus.referral === true && (
                      <span className="text-green-600">✓ Looks good</span>
                    )}
                    {fieldStatus.referral === false && (
                      <p className="text-red-600">Please select an option.</p>
                    )}
                  </div>
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
                className={`w-full bg-stone-200 rounded-sm border-1 placeholder-gray-600 text-black px-3 py-2 ${
                  fieldStatus.message === true
                    ? "border-green-500"
                    : fieldStatus.message === false
                      ? "border-red-500"
                      : "border-black"
                }`}
              />

              <div className="lg:h-3 mt-1 text-sm">
                {fieldStatus.message === true && (
                  <span className="text-green-600">✓ Looks good</span>
                )}
                {fieldStatus.message === false && (
                  <p className="text-red-600">
                    Message must be at least 10 characters.
                  </p>
                )}
              </div>
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
