export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              At JPM and Sons, we’ve spent decades working with masonry,
              concrete, and asphalt across Long Island. We take pride in what we
              build and the trust our customers put in us to bring their ideas
              to life.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is simple: deliver work that lasts, looks great, and adds
              real value to your home. We’re licensed, insured, and show up
              ready to get the job done right.
            </p>
          </div>

          {/* Image / Placeholder */}
          <div>
            <p className="text-2xl py-3 text-indigo-600">
              Meet the newest member of our team!
            </p>
            <img
              src="/IMG_8522.JPEG"
              alt="JPM team"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg "
            />
          </div>
        </div>
      </section>

      <section className="p-3">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}

          {/* Image / Placeholder */}
          <div>
            <img
              src="/nick-jim.webp"
              alt="JPM team"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg "
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              We have been proudly serving Long Island since 1988. As a
              family-owned business, personal involvement is at the heart of
              everything we do. Led by our founder, James Moore, and his eldest
              son, Nick, we ensure every project receives the care and attention
              it deserves.
            </p>
            <p className="text-lg text-gray-600">
              Based in Levittown, New York, we serve countless towns across Long
              Island with top-notch general contracting services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose JPM and Sons?
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              We're your
              neighbors, and we treat every project like it's our own home. No
              shortcuts. Just solid work done with care.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Over 30 years of hands-on experience</li>
              <li>Family-owned and fully licensed & insured</li>
              <li>Fair pricing with no surprise charges</li>
              <li>Work backed by reputation, not marketing</li>
              <li>Clear timelines, no runaround</li>
            </ul>
          </div>

          {/* Image / Placeholder */}
          <div>
            <img
              src="/young_nick.webp"
              alt="JPM team"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
