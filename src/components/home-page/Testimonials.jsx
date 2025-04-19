import Image from "next/image";

const testimonials = [
  {
    name: "Marty G.",
    avatar: "/home_page/testimonials/marty.webp",
    details: "From Google Reviews • 6 months ago • 13 reviews",
    quote:
      "I cannot say enough about Jimmy, his sons, and his team. I had a contractor disappear in the middle of the job. Jimmy jumped in and finished the job within days. Look no farther than JPM for any of your masonry needs. You will not be disappointed. They are a hardworking, family-owned business.",
  },
  {
    name: "James C.",
    avatar: "/home_page/testimonials/male.webp",
    details: "From Google Reviews • 6 months ago • 10 reviews",
    quote:
      "Jim and his team did a great job on my sidewalk that needed repair due to root damage from a tree that was removed. They were on time, worked quickly, and did a very neat job. You would never know they were here other than noticing a new sidewalk. Very friendly crew that works well together. I highly recommend them for any project for your home.",
  },
  {
    name: "Deanna",
    avatar: "/home_page/testimonials/female.webp",
    details: "From Google Reviews • A year ago • 5 reviews",
    quote:
      "I cannot recommend JPM & Sons enough! They are truly incredible, and I am so pleased with how everything came out. Our driveway and walkways look brand new! They are very professional, and their work certainly speaks for itself. Our neighbors even came up to us asking for their information because they liked what they saw. Great job!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 py-12">
      <div className="xl:max-w-2/3 w-3/4 md:w-10/12 mx-auto xl:px-10">
        {/* Section Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-gray-600">
            Hear from satisfied customers who trusted us with their projects.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="bg-gray-800 shadow-md rounded-lg p-6 text-center flex flex-col justify-between h-full">
              <Image
                src={t.avatar}
                alt={`Photo of ${t.name}`}
                width={60}
                height={60}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{t.details}</p>
              <blockquote className="text-sm text-left text-gray-300 italic mb-4">
                {t.quote}
              </blockquote>
              <div className="text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <span className="sr-only">Rating: 5 out of 5 stars</span>
            </article>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-10" />

        {/* Google Review Logo */}
        <div className="text-center mt-5">
          <Image
            src="/google-reviews-logo.png"
            alt="Google Reviews Badge"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
