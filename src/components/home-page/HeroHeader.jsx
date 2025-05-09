import Image from "next/image";
import Link from "next/link";
import Button from "@/components/layout/Button"

export default function HeroHeader() {
  return (
    <div className="w-full flex justify-center sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 max-w-screen-2xl w-full items-stretch lg:py-10">
        {/* Text Section */}
        <div className="p-3 lg:p-0 col-span-12 lg:col-span-6 flex flex-col justify-center gap-4 lg:gap-6 text-white h-[calc(100dvh-64px)] lg:h-auto">
          <h1 className="text-5xl font-extrabold select-none">
            Get started on building the home of your dreams today
          </h1>
          <p className="text-lg lg:text-xl select-none">
            Long Island's top general contractor, delivering industry-leading
            results for over 35 years.
          </p>
          <Button CTA={"Learn More"} href={"#services"}/>
        </div>

        {/* Image Section */}
        <div className="col-span-12 lg:col-span-6 justify-center hidden lg:flex">
          <Image
            src={"/sample_image.jpg"}
            alt={"random"}
            width={750}
            height={500}
            className="rounded shadow-sm w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
