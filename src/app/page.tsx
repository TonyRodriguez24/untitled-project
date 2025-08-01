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
          href={"/contact-us"}
          imageUrl={"/page-dividers/overhead-pavers.png"}
          title={"We’re Here to Make It Easy"}
          description={
            "Whether you’re starting a new project or just have a question, we are here to help."
          }
          CTA={"Reach Out to Us"}
          customClass={"text-center"}
        />
        <Gallery />
        <PageDivider
          href="/contact-us"
          imageUrl="/materials.webp"
          title="See Materials Before You Buy"
          description={
            <>
              Visit our partnered showroom with{" "}
              <a
                href="https://www.fiveborobuildingsupply.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 underline">
                Five Boro Building Supply
              </a>
              {""} located at 990 S. Broadway in Hicksville to see and feel
              pavers, bricks, and stone veneers in person. 
            </>
          }
          CTA=""
          customClass="text-center max-w-4xl text-white"
        />

        <Testimonials />
        <PageDivider
          imageUrl={"/page-dividers/1.png"}
          title={"Let’s Bring Your Vision to Life"}
          description={
            "Reach out for a free consultation and let's talk about your project today."
          }
          href={"/contact-us"}
          CTA={"Get Your Free Estimate"}
          customClass={"text-center text-gray-400"}
        />
      </main>
    </div>
  );
}
