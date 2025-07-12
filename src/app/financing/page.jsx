import Button from "../../components/layout/Button";
import PageDivider from "../../components/layout/PageDivider";
import HeroHeader from "@/components/home-page/HeroHeader";


export default function Financing() {
  return (
    <div>
      {/* Hero Section */}
      <HeroHeader
        title="Financing made simple and stress free"
        subtitle="Get the funding you need to start your dream project today. No impact on your credit score to explore your options!"
        buttonText="Learn More"
        buttonHref="#financing-details"
        imageSrc="/financing/financing.png"
        imageAlt="Hero Image"
        imageWrapperClassName="bg-amber-400 rounded-2xl flex justify-center items-center mx-auto max-w-xl w-full aspect-[4/3] p-4 px-20"
        imageClassName="w-full h-auto object-cover"
        customBackground=""
      />

      {/* Why Choose Hearth Section */}
      <section id="financing-details" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Hearth for Financing?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/3 p-4">
              <i className="bi bi-credit-card text-blue-600 text-5xl mb-4"></i>
              <h3 className="font-bold my-2">No Credit Impact</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Prequalify with a "soft" credit check—compare offers without
                affecting your credit score.
              </p>
            </div>
            <div className="md:w-1/3 p-4">
              <i className="bi bi-cash text-green-600 text-5xl"></i>
              <h3 className="font-bold my-2">No Pre-Payment Fees</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Pay off your loan early without any additional charges.
              </p>
            </div>
            <div className="md:w-1/3 p-4">
              <i className="bi bi-clock text-yellow-500 text-5xl mb-4"></i>
              <h3 className="font-bold my-2">Fast Funding</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Receive your funds in as little as 1–5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <PageDivider
        imageUrl={"/financing/financing_banner.webp"}
        title={"Financing Made Simple"}
        description={
          "Flexible payment options to fit your budget. Start your project today without the stress—let’s find the right financing solution for you."
        }
        CTA={"Get in Touch Today"}
        href={"/contact-us"}
        customClass={"text-gray-400 text-center"}
      />

      {/* Additional Features */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            What Makes Their Financing Stand Out?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/2 p-4 text-center">
              <i className="bi bi-currency-dollar text-green-600 text-5xl"></i>
              <h3 className="font-bold text-lg my-2">Flexible Loan Amounts</h3>
              <p className="w-2/3 mx-auto text-gray-700 dark:text-gray-400">
                Choose a loan amount that fits your project. Borrow as little as
                $1,000 or as much as $100,000.
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <i className="bi bi-calendar-check text-blue-600 text-5xl"></i>
              <h3 className="font-bold text-lg my-2">
                Customizable Payment Plans
              </h3>
              <p className="w-2/3 mx-auto text-gray-700 dark:text-gray-400">
                Work with lenders to create payment schedules that match your
                budget and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto">
          <hr className="border-2 border-gray-600 w-11/12 mx-auto mb-6" />
          <i className="bi bi-chat-left-quote text-amber-300 text-4xl mb-4"></i>
          <blockquote className="font-bold my-2">
            "Hearth made financing simple and stress-free. I got the funds I
            needed in no time!"
          </blockquote>
          <footer className="text-sm text-gray-600">
            Will Cannon, <cite>Satisfied Customer</cite>
          </footer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:w-1/2 mx-auto rounded-2xl">
        <div className="mx-auto w-full text-center p-4">
          <h2 className="text-2xl font-bold mb-8 underline underline-offset-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 text-left">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Does checking my rate affect my credit score?
              </h4>
              <p className="dark:text-gray-400">
                - No, prequalification involves a "soft" inquiry that{" "}
                <span className="text-green-600 underline underline-offset-4">
                  won't affect your credit score
                </span>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">
                Can I pay off my loan early without penalties?
              </h4>
              <p className="dark:text-gray-400">
                - Yes, all of Hearth's lenders have no pre-payment fees, so you
                can pay off your loan anytime without additional charges.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">
                How do lenders evaluate my application?
              </h4>
              <p className="dark:text-gray-400">
                - Lenders consider factors like your credit history,
                debt-to-income ratio, income, and expenses to determine your
                eligibility and loan terms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-lg">
                Can I add a co-borrower?
              </h4>
              <p className="dark:text-gray-400">
                Yes, adding a co-borrower can improve your chances of approval
                and may lower your APR. Both parties will sign the agreement and
                share liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <PageDivider
        imageUrl={"/page-dividers/financing.png"}
        title={"Start Your Project Today!"}
        description={
          "Don't let finances hold you back. Unlock affordable, stress-free financing options tailored for you."
        }
        href={
          "https://app.gethearth.com/financing/48905/85753/prequalify?utm_campaign=48905&utm_content=general&utm_medium=custom-lp&utm_source=contractor&utm_term=85753"
        }
        CTA={"Visit Hearth"}
        customClass={"text-gray-400 text-center"}
      />
    </div>
  );
}
