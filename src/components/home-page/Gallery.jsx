import Image from "next/image";
import PageDivider from "../layout/PageDivider";

const galleryItems = [
  {
    src: "/home_page/gallery-images/backyard-pavers-and-siding.webp",
    alt: "Beautiful backyard with pavers and siding",
    caption: "Backyard Pavers & Siding",
  },
  {
    src: "/home_page/gallery-images/beautiful-modern-bathroom.webp",
    alt: "Modern bathroom renovation with stylish fixtures",
    caption: "Modern Bathroom Renovation",
  },
  {
    src: "/home_page/gallery-images/beautiful-paver-backyard.webp",
    alt: "Elegant backyard with sealed pavers",
    caption: "Sealed Backyard Pavers",
  },
  {
    src: "/home_page/gallery-images/clean-pavers-by-pool.webp",
    alt: "Clean and polished pavers around a swimming pool",
    caption: "Poolside Pavers",
  },
  {
    src: "/home_page/gallery-images/countertop-modern-design.webp",
    alt: "Modern countertop design in a kitchen",
    caption: "Modern Countertop Design",
  },
  {
    src: "/home_page/gallery-images/kitchen-floors-and-granite.webp",
    alt: "Elegant kitchen floors with granite finishes",
    caption: "Kitchen Floors",
  },
  {
    src: "/home_page/gallery-images/beautiful-home-and-yard.webp",
    alt: "Beautiful home showcasing modern design",
    caption: "Modern Home Design",
  },
  {
    src: "/home_page/gallery-images/backyard-asthetic-pavers.webp",
    alt: "Backyard with aesthetic pavers installation",
    caption: "Aesthetic Backyard Pavers",
  },
  {
    src: "/home_page/gallery-images/pavers-walkway-steps.webp",
    alt: "Walkway and steps with pavers",
    caption: "Paver Walkway & Steps",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full p-5 lg:p-0">
      {/* Heading */}
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-start lg:text-center">
          Explore our recent projects, from paver patios to stunning masonry and
          more. See how we’ve transformed outdoor and indoor spaces for our
          clients.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 place-items-center max-w-7xl justify-center mx-auto">
        {galleryItems.map((item, idx) => (
          <figure key={idx} className="gallery-item">
            <Image
              src={item.src}
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

      <PageDivider
        href={"/gallery"}
        imageUrl={"/"}
        title={"Explore More of Our Best Work"}
        description={
          "Get inspired by browsing our complete gallery of recent projects."
        }
        CTA={"View Full Gallery"}
        customClass={"lg:text-start text-center my-1"}
      />
    </section>
  );
}
