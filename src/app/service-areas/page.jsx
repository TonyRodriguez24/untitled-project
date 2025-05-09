import { serviceAreas } from "../../data/serviceAreas";

export default function ServiceAreaPage() {
  return (
    <main className="min-h-screen lg:w-2/3 mx-auto p-5 lg:p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Service Areas</h1>
      <p className="lg:text-center text-lg text-gray-600 mb-10">
        We proudly serve homeowners and businesses across Nassau and Suffolk
        County. Find your town below—or{" "}
        <a
          href="/contact"
          className="text-blue-600 font-medium hover:underline">
          contact us
        </a>{" "}
        to ask if we cover your area!
      </p>

      <section className="mb-12 p-6 rounded-xl bg-blue-50 shadow-inner">
        <h2 className="text-2xl text-black font-semibold mb-4 flex items-center gap-2">
          🏡 Nassau County
        </h2>
        <div className="flex flex-wrap gap-3">
          {serviceAreas.nassau
            .slice()
            .sort()
            .map((town) => (
              <span
                key={town}
                className="inline-block bg-blue-300 text-black px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-200 transition">
                {town}
              </span>
            ))}
        </div>
      </section>

      <section className="p-6 rounded-xl bg-green-50 shadow-inner">
        <h2 className="text-black text-2xl font-semibold mb-4 flex items-center gap-2">
          🌳 Suffolk County
        </h2>
        <div className="flex flex-wrap gap-3">
          {serviceAreas.suffolk
            .slice()
            .sort()
            .map((town) => (
              <span
                key={town}
                className="inline-block bg-green-300 text-black px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-green-200 transition">
                {town}
              </span>
            ))}
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-gray-700">
          Don’t see your town listed?{" "}
          <a
            href="/contact"
            className="text-blue-600 font-medium hover:underline">
            Reach out
          </a>{" "}
          and we’ll let you know if we can help!
        </p>
      </div>
    </main>
  );
}
