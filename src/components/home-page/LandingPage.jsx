import HeroHeader from "@/components/home-page/HeroHeader";
import IconGroup from "@/components/home-page/IconGroup";
import { services } from "@/data/servicesInfo";
import ContactForm from "../ContactForm";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <HeroHeader
        title="Get started on building the home of your dreams today"
        subtitle="Long Island's top general contractor, delivering industry-leading results for over 35 years."
        buttonText="Learn More"
        buttonHref="#services"
        imageSrc="/sample_image.webp"
        imageAlt="A beautiful home"
        customBackground="bg-[url('/potential-bg.webp')] bg-cover bg-center md:bg-none"
        customOverlay="absolute inset-0 bg-black/70 z-0 md:hidden"
      />

      <ContactForm />
    </div>
  );
}
