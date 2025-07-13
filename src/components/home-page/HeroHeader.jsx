import Image from "next/image";
import Button from "@/components/layout/Button";

export default function HeroHeader({
  title,
  subtitle,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  imageWrapperClassName = "",
  imageClassName = "",
  customBackground = "",
  customOverlay = "",
  customTextColor = ""
}) {
  return (
    <div className="w-full flex justify-center sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 max-w-screen-2xl w-full items-stretch lg:py-10">
        {/* Text Section */}
        <div
          className={`relative p-3 lg:p-0 col-span-12 lg:col-span-6 flex flex-col justify-center gap-4 lg:gap-6 py-10 text-white h-[calc(var(--vh,1vh)*100-64px)] lg:h-auto
            ${customBackground}`}>
          {/* Mobile-only overlay */}
          <div className= {`${customOverlay}`}/>

          {/* Content */}
          <div className={`flex flex-col p-5 ${customTextColor} lg:p-0 gap-3 lg:gap-5 relative z-10`}>
            <h1 className="text-3xl xl:text-5xl md:text-black dark:text-white font-extrabold select-none">
              {title}
            </h1>
            <p className="text-md md:text-black dark:text-gray-400 lg:text-xl select-none">
              {subtitle}
            </p>
            <Button CTA={buttonText} href={buttonHref} />
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`col-span-12 lg:col-span-6 justify-center hidden lg:flex ${imageWrapperClassName}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={750}
            height={500}
            className={`rounded shadow-sm w-full object-contain ${imageClassName}`}
          />
        </div>
      </div>
    </div>
  );
}
