export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About JPM and Sons</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Built on family values, quality craftsmanship, and unmatched
            attention to detail — we transform your vision into lasting results.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">A Legacy of Quality</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              At JPM and Sons, we bring decades of experience in masonry,
              concrete, and asphalt work across Long Island. Whether it's
              crafting custom patios, driveways, retaining walls, or full home
              renovations — we do it with professionalism and pride.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is simple: deliver work that lasts, looks great, and
              adds value. Licensed, insured, and trusted — we're the team
              homeowners call when they want it done right.
            </p>
          </div>

          {/* Image / Placeholder */}
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/about/team.jpg"
              alt="JPM team"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
