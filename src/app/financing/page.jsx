import React from "react";
import PageDivider from "../../components/layout/PageDivider";

export default function Financing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-black py-8">
        <div className="container mx-auto mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl text-white font-bold mb-4">
              Financing made simple and stress free
            </h1>
            <p className="text-lg text-white mb-4">
              Get the funding you need to start your dream project today. No
              impact on your credit score to explore your options!
            </p>
            <a href="#financing-details" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/financing/financing.webp"
              alt="Hero Image"
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Hearth Section */}
      <section id="financing-details" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Hearth for Financing?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/3 p-4">
              <i className="bi bi-credit-card text-blue-600 text-5xl mb-4"></i>
              <h3 className="font-bold mb-2">No Credit Impact</h3>
              <p>
                Prequalify with a "soft" credit check—compare offers without
                affecting your credit score.
              </p>
            </div>
            <div className="md:w-1/3 p-4">
              <i className="bi bi-cash text-green-600 text-5xl mb-4"></i>
              <h3 className="font-bold mb-2">No Pre-Payment Fees</h3>
              <p>Pay off your loan early without any additional charges.</p>
            </div>
            <div className="md:w-1/3 p-4">
              <i className="bi bi-clock text-yellow-500 text-5xl mb-4"></i>
              <h3 className="font-bold mb-2">Fast Funding</h3>
              <p>Receive your funds in as little as 1–5 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <PageDivider
        imageUrl={""}
        title={"We’re Here to Make It Easy"}
        description={
          "Whether you’re starting a new project or just have a question, we are here to help."
        }
        CTA={"Reach Out to Us"}
      />

      {/* Additional Features */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            What Makes Their Financing Stand Out?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/2 p-4">
              <i className="bi bi-currency-dollar text-blue-600 text-5xl mb-4"></i>
              <h3 className="font-bold mb-2">Flexible Loan Amounts</h3>
              <p>
                Choose a loan amount that fits your project—whether it’s big or
                small. Borrow as little as $1,000 or as much as $100,000.
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <i className="bi bi-calendar-check text-green-600 text-5xl mb-4"></i>
              <h3 className="font-bold mb-2">Customizable Payment Plans</h3>
              <p>
                Work with lenders to create payment schedules that match your
                budget and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto">
          <hr className="border-2 border-blue-600 w-11/12 mx-auto mb-6" />
          <i className="bi bi-chat-left-quote text-blue-600 text-4xl mb-4"></i>
          <blockquote className="font-bold mb-2">
            "Hearth made financing simple and stress-free. I got the funds I
            needed in no time!"
          </blockquote>
          <footer className="text-sm text-gray-600">
            Will Cannon, <cite>Satisfied Customer</cite>
          </footer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-blue-600 font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-left">
            <div>
              <h4 className="font-bold mb-1">
                Does checking my rate affect my credit score?
              </h4>
              <p>
                No, prequalification involves a "soft" inquiry that won’t affect
                your credit score.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">
                Can I pay off my loan early without penalties?
              </h4>
              <p>
                Yes, all of Hearth's lenders have no pre-payment fees, so you
                can pay off your loan anytime without additional charges.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">
                How do lenders evaluate my application?
              </h4>
              <p>
                Lenders consider factors like your credit history,
                debt-to-income ratio, income, and expenses to determine your
                eligibility and loan terms.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Can I add a co-borrower?</h4>
              <p>
                Yes, adding a co-borrower can improve your chances of approval
                and may lower your APR. Both parties will sign the agreement and
                share liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-3">Start Your Project Today!</h3>
          <p className="text-gray-600 mb-4">
            Don't let finances hold you back. Unlock affordable, stress-free
            financing options tailored for you.
          </p>
          <a
            href="https://app.gethearth.com/financing/48905/85753/prequalify?utm_campaign=48905&utm_content=general&utm_medium=custom-lp&utm_source=contractor&utm_term=85753"
            className="btn btn-primary">
            Visit Hearth
          </a>
        </div>
      </section>
    </div>
  );
}
