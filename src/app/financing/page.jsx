import Image from "next/image";

export default function Financing() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div>
          <div>
            <h1>Financing made simple and stress free</h1>
            <p>
              Get the funding you need to start your dream project today. No
              impact on your credit score to explore your options!
            </p>
            <a href="#financing-details">Learn More</a>
          </div>
          <div>
            <Image
              src="/static/images-webp/financing/financing.webp"
              alt="Hero Image"
              width={572}
              height={572}
            />
          </div>
        </div>
      </section>

      {/* Why Hearth Section */}
      <section id="financing-details">
        <div>
          <h2>Why Choose Hearth for Financing?</h2>
          <div>
            <div>
              <i className="bi bi-credit-card" />
              <h3>No Credit Impact</h3>
              <p>
                Prequalify with a "soft" credit check—compare offers without
                affecting your credit score.
              </p>
            </div>
            <div>
              <i className="bi bi-cash" />
              <h3>No Pre-Payment Fees</h3>
              <p>Pay off your loan early without any additional charges.</p>
            </div>
            <div>
              <i className="bi bi-clock" />
              <h3>Fast Funding</h3>
              <p>Receive your funds in as little as 1–5 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section>
        <div>
          <h3>Flexible Financing for Every Project</h3>
          <p>
            No hidden fees. Fast approvals. Visit our personalized lending page.
          </p>
          <a href="https://app.gethearth.com/financing/48905/85753/prequalify">
            Get Started Here
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
          <h2>What Makes Their Financing Stand Out?</h2>
          <div>
            <div>
              <i className="bi bi-currency-dollar" />
              <h3>Flexible Loan Amounts</h3>
              <p>
                Choose a loan amount that fits your project—whether it’s big or
                small. Borrow as little as $1,000 or as much as $100,000.
              </p>
            </div>
            <div>
              <i className="bi bi-calendar-check" />
              <h3>Customizable Payment Plans</h3>
              <p>
                Work with lenders to create payment schedules that match your
                budget and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <div>
          <i className="bi bi-chat-left-quote"></i>
          <blockquote>
            "Hearth made financing simple and stress-free. I got the funds I
            needed in no time!"
          </blockquote>
          <footer>
            Will Cannon, <cite>Satisfied Customer</cite>
          </footer>
        </div>
      </section>

      {/* FAQ + CTA Section */}
      <section id="faqs">
        <div>
          <h2>Frequently Asked Questions</h2>
          <div>
            <div>
              <h4>Does checking my rate affect my credit score?</h4>
              <p>
                No, prequalification involves a "soft" inquiry that won’t affect
                your credit score.
              </p>
            </div>
            <div>
              <h4>Can I pay off my loan early without penalties?</h4>
              <p>
                Yes, all of Hearth's lenders have no pre-payment fees, so you
                can pay off your loan anytime without additional charges.
              </p>
            </div>
            <div>
              <h4>How do lenders evaluate my application?</h4>
              <p>
                Lenders consider factors like your credit history,
                debt-to-income ratio, income, and expenses to determine your
                eligibility and loan terms.
              </p>
            </div>
            <div>
              <h4>Can I add a co-borrower?</h4>
              <p>
                Yes, adding a co-borrower can improve your chances of approval
                and may lower your APR. Both parties will sign the agreement and
                share liability.
              </p>
            </div>
          </div>

          <div>
            <h3>Start Your Project Today!</h3>
            <p>
              Don't let finances hold you back. Unlock affordable, stress-free
              financing options tailored for you.
            </p>
            <a href="https://app.gethearth.com/financing/48905/85753/prequalify">
              Visit Hearth
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
