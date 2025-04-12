import ContactForm from "../ContactForm";

export default function HeroHeader() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-12 gap-10 bg-amber-500 w-full max-w-screen-xl px-10">
        {/* text section */}
        <div className="flex flex-col gap-5 p-10 justify-start  col-span-6 bg-amber-800">
          <h1 className="text-5xl font-bold select-none">
            Get started on building the home of your dreams today
          </h1>
          <p className="text-xl pr-5 select-none">
            Long Island's top general contractor, industry-leading results for
            over 35 years.
          </p>
          <button className="bg-green-700 hover:cursor-pointer w-fit px-4 py-2 border-2 rounded-xl border-white text-white">
            Get started today
          </button>
        </div>
        {/* image section */}
        <div className="col-span-6 bg-red-500">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
