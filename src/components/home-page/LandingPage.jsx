import HeroHeader from "@/components/home-page/HeroHeader";
import IconGroup from "@/components/home-page/IconGroup";
import { services } from "@/data/servicesInfo";

export default function LandingPage() {
  return (
    <div>
      <HeroHeader />
      <IconGroup services={services} />
    </div>
  );
}
