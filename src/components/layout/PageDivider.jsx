export default function PageDivider({ imageUrl, title, description, CTA }) {
  return (
    <div
      className="w-full my-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
      <div className="w-full bg-black/75 flex flex-col items-center justify-center py-16 px-4">
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p>
          Whether you’re starting a new project or just have a question, we are
          here to help.
        </p>
        <a
          href="/contact-us"
          className="bg-amber-700 hover:bg-amber-500 text-white mt-2 px-3 py-2 rounded transition">
          {CTA}
        </a>
      </div>
    </div>
  );
}
