import Image from "next/image";

export default function HeroHeader() {
  return (
    <div className="w-full flex justify-center bg-amber-100 sm:px-8 lg:px-10 py-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-screen-2xl w-full items-stretch">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-6 bg-amber-800 flex flex-col justify-center gap-4 lg:gap-6 py-40 text-white">
          <h1 className="text-5xl lg:text-6xl font-extrabold select-none">
            Get started on building the home of your dreams today
          </h1>
          <p className="text-lg lg:text-xl select-none">
            Long Island's top general contractor, delivering industry-leading
            results for over 35 years.
          </p>
          <button className="btn bg-blue-800 px-4 py-2 rounded-4xl text-white hover:bg-blue-700 transition cursor-pointer w-fit">
            Get started today
          </button>
        </div>

        {/* Image Section */}
        <div className="col-span-12 lg:col-span-6 flex justify-center items-stretch bg-red-500">
          <Image
            src={"/sample_image.jpg"}
            alt={"random"}
            width={1000}
            height={1500}
            className="rounded shadow-sm w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
