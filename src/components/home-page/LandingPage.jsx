import HeroHeader from "@/components/home-page/HeroHeader";
import IconGroup from "@/components/home-page/IconGroup";
import { services } from "@/data/servicesInfo";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <HeroHeader />
      <IconGroup services={services} />
    </div>
  );
}
