export default function PageDivider({ imageUrl, title, description, CTA }) {
  return (
    <div
      className=" w-full my-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="w-full bg-black/70 flex flex-col items-center justify-center py-12 px-4">
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p>
          Whether you’re starting a new project or just have a question, we are
          here to help.
        </p>
        <a
          href="#ContactForm"
          className="btn btn-md bg-blue-600 mt-4 px-5 py-2 rounded hover:bg-blue-700 transition">
          {CTA}
        </a>
      </div>
    </div>
  );
}
