import Link from "next/link";

export default function IconGroup({services}) {
  return (
    <ul className="flex flex-wrap gap-3 py-3">
      {services.map((service) => (
        <li
          key={service.name}
          className="relative w-fit px-10 py-4 rounded-lg overflow-hidden bg-cover bg-center hover:brightness-120 hover:rounded-2xl hover:cursor-pointer transition-all"
          style={{ backgroundImage: `url(${service.image})` }}>
          <Link href={`/services/${service.link}`}>
            <div className="absolute inset-0 bg-black/50" />
            <p className="relative z-10 text-white text-sm font-bold flex text-center justify-center items-center h-full w-full select-none">
              {service.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
