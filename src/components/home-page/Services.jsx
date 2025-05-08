import { services } from "@/data/servicesInfo";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id = "services" className="flex flex-col items-center p-4 lg:p-20">
      <h2 className="text-xl font-bold text-center">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-11/12 lg:w-full xl:w-2/3">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col text-center shadow-lg rounded-xl bg-gray-900 overflow-hidden">
            <Link href={`/service/${service.link}`}>
              <Image
                src={service.image}
                alt={service.name}
                width={300}
                height={200}
                className="w-full rounded-t-xl cursor-pointer hover:opacity-60 transition"
              />
            </Link>

            <Link href={`/services/${service.link}`}>
              <h3 className="text-white my-4 px-5 hover:!text-blue-400 transition cursor-pointer text-start text-2xl font-bold">
                {service.name}
              </h3>
            </Link>

            <p className="text-start p-5 pt-0 text-gray-400">
              {service.cardDescription}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
