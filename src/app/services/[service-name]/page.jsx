import { services } from "@/data/servicesInfo";

import metaData from "../../../data/metaData";

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // ✅ await the params object
  const path = `/services/${resolvedParams["service-name"]}`;

  return (
    metaData[path] || {
      title: "JPM and Sons - Services",
      description:
        "Explore our general contracting services across Long Island.",
    }
  );
}



export default async function ServicePage({ params }) {
  const { ["service-name"]: serviceName } = await params;
  const service = services.find((s) => s.link === serviceName);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-red-600 font-bold">Service Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b-2 border-b-gray-400 p-3  py-16 text-center">
        <div className="lg:max-w-2/3 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.name}
          </h1>
          <p className="text-lg lg:max-w-4xl mx-auto whitespace-pre-line">
            {service.detailedDescription}
          </p>
        </div>
      </section>

      {/* Sub-Header */}
      <section className="flex flex-wrap mb-20 justify-center lg:w-2/3 pt-5 items-start gap-5 w-11/12 mx-auto">
        <div className="lg:w-4/5 flex flex-col gap-5 lg:gap-4 lg:px-12 lg:py-2">
          <div className="lg:w-4/5">
            <h2 className="text-2xl font-semibold lg:mb-0">
              Our {service.name} Services
            </h2>
            <p className="text-gray-600 lg:text-lg ">{service.caption}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-3 ">
            {service.subServices.map((sub, i) => (
              <a
                key={i}
                href={`#${sub.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2 lg:px-4 py-2 lg:py-3 rounded-xl bg-blue-800 text-white text-sm lg:text-md hover:bg-indigo-700 transition">
                {sub.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="lg:w-2/3  my-3 mx-auto space-y-16 pb-20 ">
        {service.subServices.map((sub, i) => (
          <div
            key={i}
            id={sub.name.toLowerCase().replace(/\s+/g, "-")}
            className="flex flex-col  w-11/12 mx-auto md:flex-row items-stretch justify-center rounded-xl p-0 lg:p-6 lg:gap-6 scroll-mt-10">
            {/* Left: Card */}
            <div className="md:w-2/5 flex flex-col">
              <img
                src={sub.imageUrl || "/placeholder.jpg"}
                alt={sub.name}
                className="rounded-md h-72 w-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold dark:text-white">{sub.name}</h3>
              <p className="dark:text-gray-500 my-2">{sub.caption}</p>

              {/* Feature badges */}
              <ul className="flex flex-wrap gap-2 mt-3 mb-6 p-0">
                {sub.features.map((feature, i) => (
                  <li key={i}>
                    <span className="inline-flex items-center gap-2 bg-blue-200 text-black px-2 py-1 rounded-full text-sm font-medium">
                      <i
                        className={`bi ${
                          i === 0
                            ? "bi-shield-fill-check"
                            : i === 1
                            ? "bi-cash-coin"
                            : i === 2
                            ? "bi-award-fill"
                            : i === 3
                            ? "bi-grip-horizontal"
                            : "bi-star"
                        }`}></i>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Long Description + Benefits + CTAs */}
            <div className="md:w-2/5 lg:px-4 flex flex-col">
              <p className="text-lg mb-4 dark:text-white">{sub.description}</p>
              <hr className="my-4 dark:text-white" />
              <ul className="list-none p-0 space-y-3 dark:text-gray-400">
                {sub.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <i
                      className={`bi ${
                        j === 0
                          ? "bi-check-circle text-blue-600"
                          : j === 1
                          ? "bi-award-fill text-yellow-500"
                          : "bi-lightning-charge text-green-600"
                      } mt-1 text-lg`}></i>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center items-baseline md:justify-center">
                <a
                  href="/contact-us"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
                  Contact Us
                </a>
                <a
                  href="/gallery"
                  className="bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-900">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
