import Image from "next/image";
import { galleryInfo, beforeAfter } from "@/data/gallery";


export default function GallerySection() {
  return (
    <section id="gallery" className="container mx-auto">
      {/* Heading */}
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-center">
          Explore our recent projects, from paver patios to stunning masonry and
          more. See how we’ve transformed outdoor and indoor spaces for our
          clients.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 px-10 lg:px-20">
        {galleryInfo.map((item, idx) => (
          <figure key={idx} className="gallery-item">
            <Image
              src={item.path}
              alt={item.alt}
              width={500}
              height={350}
              className="rounded shadow-sm"
            />
            <figcaption className="text-center mt-2 text-md text-gray-300">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
