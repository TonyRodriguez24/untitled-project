import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/home-page/Gallery";
import LandingPage from "@/components/home-page/LandingPage";
import Services from "@/components/home-page/Services";
import Testimonials from "@/components/home-page/Testimonials";
import PageDivider from "@/components/layout/PageDivider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-8 items-center">
        <LandingPage />
        <Services />
        <PageDivider
          imageUrl={"/page-dividers/overhead-pavers.png"}
          title={"We’re Here to Make It Easy"}
          description={
            "Whether you’re starting a new project or just have a question, we are here to help."
          }
          CTA={"Reach Out to Us"}
        />
        <Gallery />
        <Testimonials />
      </main>
    </div>
  );
}
