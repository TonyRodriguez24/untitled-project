import { services } from "@/data/servicesInfo";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col items-center p-20">
      <h1 className="text-2xl font-bold text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-3/4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col text-center shadow-lg rounded-xl bg-gray-900">
            <Image
              src={service.image}
              alt={service.name}
              width={400}
              height={200}
              className="w-full rounded-t-xl"
            />
            <h3 className="text-start pl-6 text-2xl font-bold mt-4">
              {service.name}
            </h3>
            <p className="text-start pl-6 pb-5 pr-6 text-gray-600 mt-2">
              {service.cardDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

