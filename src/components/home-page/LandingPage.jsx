import HeroHeader from "@/components/home-page/HeroHeader";
import IconGroup from "@/components/home-page/IconGroup";
import { services } from "@/data/servicesInfo";
import ContactForm from "../ContactForm";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">

      <HeroHeader />
      <ContactForm/>
    </div>
  );
}
