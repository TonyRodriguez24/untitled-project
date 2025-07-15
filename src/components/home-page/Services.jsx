import { services } from "@/data/servicesInfo";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center w-11/12 p-3 lg:p-3 lg:w-full">
      <h2 className="text-3xl font-bold text-center mb-3 lg:mb-0">
        Our Services
      </h2>

      <div className="my-2 flex flex-wrap justify-center gap-10 xl:p-6 xl:w-10/12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col text-center shadow-lg rounded-xl bg-zinc-200 dark:bg-zinc-900 overflow-hidden w-full lg:w-10/12 sm:max-w-[320px]">
            <Link href={`/services/${service.link}`}>
              <Image
                src={service.image}
                alt={service.name}
                width={300}
                height={200}
                className="w-full h-[230px] lg:h-[210px] object-cover rounded-t-xl cursor-pointer hover:opacity-60 transition"
              />
            </Link>

            <div className="flex flex-col h-full justify-between">
              <Link href={`/services/${service.link}`}>
                <h3 className="dark:text-blue-700 my-4 px-5 hover:!text-blue-400 transition cursor-pointer text-start text-2xl font-bold">
                  {service.name}
                </h3>
              </Link>

              <p className="text-start px-5 text-gray-800 dark:text-white">
                {service.cardDescription}
              </p>

              <Link
                href={`/services/${service.link}`}
                className="text-start text-sm px-5 pb-5 pt-3 text-blue-400 dark:text-blue-400 hover:underline font-semibold">
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
