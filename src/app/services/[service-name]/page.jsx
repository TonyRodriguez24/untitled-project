import { services } from "@/data/servicesInfo";

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
      <section className="bg-gray-900 text-white py-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.name} Services
          </h1>
          <p className="text-lg max-w-4xl mx-auto whitespace-pre-line">
            {service.detailedDescription}
          </p>
        </div>
      </section>

      {/* Sub-Header */}
      <section className="p-5 pb-0 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Our {service.name} Services</h2>
          <p className="text-gray-600 text-lg">{service.caption}</p>
        </div>
      </section>

      {/* Sub Services */}
      <section className="lg:max-w-2/3 my-3 mx-auto px-4 py-1 space-y-16 pb-20 ">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {service.subServices.map((sub, i) => (
            <a
              key={i}
              href={`#${sub.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-2 lg:px-4 py-2 lg:py-3 rounded-xl bg-gray-800 text-white text-sm lg:text-md hover:bg-indigo-700 transition">
              {sub.name}
            </a>
          ))}
        </div>

        {service.subServices.map((sub, i) => (
          <div
            key={i}
            id={sub.name.toLowerCase().replace(/\s+/g, "-")}
            className="flex flex-col md:flex-row items-stretch justify-center bg-amber-50 rounded-xl shadow p-6 lg:gap-6 scroll-mt-10">
            {/* Left: Card */}
            <div className="md:w-2/5 flex flex-col bg-amber-50 p-4">
              <img
                src={sub.imageUrl || "/placeholder.jpg"}
                alt={sub.name}
                className="rounded-md h-72 w-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold text-black">{sub.name}</h3>
              <p className="text-gray-600 mt-2">{sub.caption}</p>

              {/* Feature badges */}
              <ul className="flex flex-wrap gap-2 mt-3 mb-6 p-0">
                {sub.features.map((feature, i) => (
                  <li key={i}>
                    <span className="inline-flex items-center gap-2 bg-slate-300 text-black px-2 py-1 rounded-full text-sm font-medium">
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
            <div className="md:w-2/5 p-4 flex flex-col bg-amber-50">
              <p className="text-lg mb-4 text-black">{sub.description}</p>
              <hr className="my-4 text-black" />
              <ul className="list-none p-0 space-y-3 text-gray-700">
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
