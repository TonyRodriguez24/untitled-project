export default function ThankYouPage() {
  return (
    <div
      id="thank-you"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <div className="w-full max-w-xl bg-white dark:bg-zinc-900 p-6 md:p-10 text-center">
        {/* Image */}
        <img
          src="thank_you.webp"
          alt="Thank You"
          className="w-60 mx-auto mb-6"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Thank You!
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your submission has been received! We appreciate your interest and
          typically respond the same day. Expect a phone call or email from us
          shortly.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="/"
            className="border border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            Return to Home
          </a>
          <a
            href="/gallery"
            className="bg-blue-700 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-800 dark:hover:bg-blue-600 transition">
            View Gallery
          </a>
        </div>
          </div>
          
          
    </div>
  );
}
