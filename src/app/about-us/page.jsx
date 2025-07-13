export default function AboutUs() {
  return (
    <main className="text-gray-800 flex flex-col gap-20">
      {/* Hero Section */}

      {/* Content Section */}
      <section>
        <div className="w-11/12 lg:w-3/4 mx-auto flex flex-wrap gap-5 lg:gap-0 items-center">
          {/* Text Content */}

          <div className="lg:w-1/2 lg:p-20">
            <p className="text-xl font-bold py-2 text-pink-300">
              Meet the newest member of our team!
            </p>
            <img
              src="/IMG_8522.JPEG"
              alt="JPM team"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg "
            />
          </div>

          <div className="lg:w-1/2 lg:p-20">
            <h2 className="dark:text-white text-3xl font-bold mb-4">
              About Us
            </h2>
            <p className="lg:text-lg mb-6 dark:text-gray-300 leading-relaxed">
              At JPM and Sons, we’ve spent decades in all aspects of home
              improvement and renovation on Long Island. We take pride in what
              we build and the trust our customers put in us to bring their
              ideas to life.
            </p>
            <p className="lg:text-lg leading-relaxed dark:text-gray-300">
              Our goal is simple: deliver work that lasts, looks great, and adds
              real value to your home. We’re licensed, insured, and show up
              ready to get the job done right.
            </p>
          </div>

          {/* Image / Placeholder */}
        </div>
      </section>

      <hr className="flex lg:hidden"></hr>

      <section>
        <div className="w-11/12 lg:w-3/4 mx-auto flex flex-wrap lg:flex-row-reverse gap-5 lg:gap-0 items-center">
          {/* Text Content */}

          {/* Image / Placeholder */}
          <div className="lg:w-1/2 lg:p-20">
            <img
              src="/nick-jim.webp"
              alt="JPM team"
              className="w-full h-[400px] object-cover rounded-2xl "
            />
            <p className="text-gray-500 dark:text-gray-600 py-3">
              Founder: Jim Moore and his son Nick.
            </p>
          </div>

          <div className="lg:w-1/2 lg:p-20">
            <h2 className="dark:text-white text-3xl font-bold mb-4">
              Our History
            </h2>
            <p className="text-lg mb-6 dark:text-gray-300 leading-relaxed">
              We have been proudly serving Long Island since 1988. As a
              family-owned business, personal involvement is at the heart of
              everything we do. Led by our founder, James Moore, and his eldest
              son, Nick, we ensure every project receives the care and attention
              it deserves.
            </p>
            <p className="text-lg dark:text-gray-300">
              Based in Levittown, New York, we serve countless towns across Long
              Island with top-notch general contracting services.
            </p>
          </div>
        </div>
      </section>

      <hr className="flex lg:hidden"></hr>

      <section>
        <div className="w-11/12 lg:w-3/4 mx-auto flex flex-wrap lg:flex-row-reverse gap-5 lg:gap-0 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:p-20">
            <h2 className="dark:text-white text-3xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg mb-6 leading-relaxed dark:text-gray-300">
              We're your neighbors, and we treat every project like it's our own
              home. No shortcuts. Just solid work done with care.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Over 30 years of hands-on experience</li>
              <li>Family-owned and fully licensed & insured</li>
              <li>Fair pricing with no surprise charges</li>
              <li>Work backed by reputation, not marketing</li>
              <li>Clear timelines, no runaround</li>
            </ul>
          </div>

          {/* Image / Placeholder */}
          <div className="lg:w-1/2 lg:p-20">
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
