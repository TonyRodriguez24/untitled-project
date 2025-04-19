import ContactForm from "../ContactForm";

export default function HeroHeader() {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-screen-2xl sm:px-8 lg:px-10">
        {/* text section */}
        <div className="flex flex-col gap-2 lg:gap-5 p-8 justify-center col-span-12 lg:col-span-6 bg-amber-800">
          <h1 className="text-4xl lg:text-5xl font-bold select-none">
            Get started on building the home of your dreams today
          </h1>
          <p className="text-lg lg:text-xl pr-0 lg:pr-5 select-none">
            Long Island's top general contractor, industry-leading results for
            over 35 years.
          </p>
          <button className="btn bg-success hover:cursor-pointer w-fit px-4 py-2 text-white">
            Get started today
          </button>
        </div>

        {/* form section */}
        <div className="col-span-12 lg:col-span-6 bg-red-500 p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
