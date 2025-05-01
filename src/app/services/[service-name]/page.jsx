import { services } from "@/data/servicesInfo";

export default async function ServicePage({ params }) {
  const serviceName = params["service-name"];
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
          <p className="text-lg max-w-3xl mx-auto whitespace-pre-line">
            {service.detailedDescription}
          </p>
        </div>
      </section>

      {/* Sub-Header */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">
            Our {service.name} Services
          </h2>
          <p className="text-gray-600 text-lg">{service.caption}</p>
        </div>
      </section>

      {/* Sub Services */}
      <section className="lg:max-w-2/3 mx-auto px-4 space-y-16 pb-20">
        {service.subServices.map((sub, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-start justify-center bg-gray-900 rounded-xl shadow p-6 lg:gap-6`}>
            {/* Left: Card */}
            <div className="md:w-2/5 shadow-2xl bg-amber-50 p-4">
              <img
                src={sub.imageUrl || "/placeholder.jpg"}
                alt={sub.name}
                className="rounded-md h-72 w-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold text-black">{sub.name}</h3>
              <p className="text-gray-600 mt-2">{sub.caption}</p>

              {/* Feature badges */}
              <ul className="flex flex-wrap gap-2 mb-6 p-0">
                {sub.features.map((feature, i) => (
                  <li key={i}>
                    <span className="inline-flex items-center gap-2 border-3 border-black bg-[#ffbd59] text-black px-4 py-2 rounded-full text-sm font-medium">
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
            <div className="md:w-1/2 border-4 p-5 bg-amber-50">
              <p className="text-lg mb-4 text-black">{sub.description}</p>
              <hr className="my-4 text-black" />
              <ul className="list-none p-0 space-y-3 text-gray-700">
                {sub.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-2">
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
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/contact-us"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Contact Us
                </a>
                <a
                  href="/gallery"
                  className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900">
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
