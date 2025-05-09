"use client";
import {
  beforeAfters,
  galleryInfo,
  homeImprovementGallery,
} from "@/data/gallery.js";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";

export default function Gallery() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const TOTAL_TRACKED_IMAGES = 6; // ✅ ONLY WAIT FOR 6 IMAGES

  useEffect(() => {
    if (loadedCount >= TOTAL_TRACKED_IMAGES) {
      setIsLoaded(true);
    }
  }, [loadedCount]);

  const handleImageLoaded = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="w-16 h-16 border-4 border-t-green-600 border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      <section id="gallery" className="p-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">
          <div className="lg:w-1/2 text-left">
            <h1 className="font-bold text-3xl mb-4">Our Gallery</h1>
            <p className="text-gray-500 leading-relaxed">
              Explore our gallery showcasing a wide range of completed projects,
              from stunning paver installations and meticulous pressure washing
              transformations to professional sealing and elegant home
              renovations. Each project reflects our commitment to quality,
              precision, and creating spaces that are both functional and
              visually striking. Whether it's enhancing outdoor areas or
              modernizing interiors, our work is designed to exceed expectations
              and bring your vision to life.
            </p>
          </div>

          <div className="hidden md:flex flex-wrap justify-center items-center lg:w-1/2 gap-4">
            <div className="flex flex-col items-center bg-gray-800 shadow-sm rounded-lg p-5 w-1/3">
              <IoLocationSharp className="text-green-500 w-8 h-fit" />
              <h4 className="text-xl font-bold text-green-500">50+</h4>
              <small className="text-center">Towns Served on Long Island</small>
            </div>
            <div className="flex flex-col items-center bg-gray-800 shadow-sm rounded-lg p-5 w-1/3">
              <RiMessage2Fill className="text-green-500 w-8 h-fit" />
              <h4 className="text-xl font-bold text-green-500">Same Day</h4>
              <small className="text-center">Response to Inquiries</small>
            </div>
          </div>
        </div>

        <hr className="my-8 w-full mx-auto border-gray-500" />
      </section>

      <section className="p-3 lg:p-10">
        <h3 className="text-3xl font-bold mb-2">Home Improvement Work</h3>
        <p className="text-gray-400 mb-4">
          Featuring home improvement projects, including kitchens, bathrooms,
          living spaces, and other modern upgrades.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 place-items-center gap-2">
          {homeImprovementGallery.map((item, idx) => (
            <figure key={idx}>
              <Image
                src={item.path}
                alt={item.alt}
                width={500}
                height={350}
                className="rounded shadow-sm w-full"
                // ✅ pass onLoad only to first 6
                onLoad={
                  idx < TOTAL_TRACKED_IMAGES ? handleImageLoaded : undefined
                }
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="p-4 lg:p-10">
        <h3 className="text-3xl font-bold mb-2">Before and After</h3>
        <p className="text-gray-500 mb-4">
          We pay attention to the details, see our before and afters to see how
          fast you can see results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {beforeAfters.map((item, idx) => (
            <div
              key={idx}
              className={`grid ${
                item.after ? "grid-cols-2" : "grid-cols-1"
              } gap-2`}>
              <figure className="max-w-full md:max-w-[600px] mx-auto">
                <Image
                  src={item.before.path}
                  alt={item.before.alt}
                  width={600}
                  height={800}
                  className="rounded shadow object-cover"
                />
                <figcaption className="text-center text-sm text-gray-500 mt-1">
                  Before
                </figcaption>
              </figure>

              {item.after && (
                <figure>
                  <Image
                    src={item.after.path}
                    alt={item.after.alt}
                    width={600}
                    height={800}
                    className="rounded shadow object-cover"
                  />
                  <figcaption className="text-center text-sm text-gray-500 mt-1">
                    After
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="p-3 lg:p-10">
        <h3 className="text-3xl font-bold mb-2">Extra Pavers Work</h3>
        <p className="text-gray-400 mb-4">
          Featuring home improvement projects, including kitchens, bathrooms,
          living spaces, and other modern upgrades.
        </p>

        <div className="grid md:grid-cols-5 lg:grid-cols-4 place-items-center gap-2">
          {galleryInfo.map((item, idx) => (
            <figure key={idx}>
              <Image
                src={item.path}
                alt={item.alt}
                width={400}
                height={350}
                className="rounded shadow-sm w-full"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
