import { ContactForm } from "@/pages/contact/components/ContactForm";

export const HomepageEstimateSection = () => {
  return (
    <section
      id="estimate"
      className="box-border caret-transparent py-[70px] md:py-[100px] bg-[#1f1f1f]"
    >
      <div className="box-border caret-transparent max-w-[900px] mx-auto px-[15px] md:px-[30px]">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-white text-3xl font-bold mb-3 md:text-[48px] md:leading-[56px]">Get Your Free Estimate</h2>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
            No obligation. We reply within one hour during business hours where possible.
          </p>
        </div>
        <div
          id="homepage-estimate-root"
          className="bg-[#787e59] box-border caret-transparent p-4 sm:p-6 rounded-[20px] md:p-10 border-2 border-[#8a9168] shadow-xl"
        >
          <ContactForm
            rootSelector="#homepage-estimate-root"
            formName="wf-form-Homepage-Estimate"
            ariaLabel="Homepage estimate form"
            successAriaLabel="Homepage estimate success"
            failureAriaLabel="Homepage estimate failure"
            analyticsFormId="homepage_estimate"
          />
          <div
            role="region"
            aria-label="Homepage estimate success"
            className="text-white bg-[#787e59] box-border caret-transparent text-center p-[15px] rounded-[20px] mt-4 hidden"
          >
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div
            role="region"
            aria-label="Homepage estimate failure"
            className="text-white bg-[#8a9168] box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
          >
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
