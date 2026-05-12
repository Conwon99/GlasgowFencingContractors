import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

const faqData = [
  {
    question: "What types of fencing and decking services do you offer in Greater Glasgow?",
    answer:
      "We offer a comprehensive range of fencing and decking services across Greater Glasgow, including bespoke fencing installation, sheds & gates, trellis work, composite and timber decking, palisade fencing, and professional fencing repairs. All our services are tailored to meet your specific needs, whether for domestic or commercial properties. With over 13 years of experience, we provide quality workmanship for all types of fencing and decking projects.",
  },
  {
    question: "Are you fully qualified and insured for fencing and decking work?",
    answer:
      "Yes, Glasgow Fencing Contractors is fully qualified and insured. Our experienced fitters are trained professionals who take pride in operating safely and to the highest industry standards. We carry full public liability insurance, so you can trust us to handle your fencing and decking needs with complete peace of mind. All our work is completed to the highest standards of workmanship and reliability.",
  },
  {
    question: "Do you offer free quotes for fencing and decking projects?",
    answer:
      "Yes, we provide free, no-obligation quotes for all our fencing and decking services across Greater Glasgow. Contact us today to discuss your requirements, and we'll provide you with a competitive, detailed quote tailored to your specific project. Our team will assess your needs and provide transparent pricing with no hidden costs.",
  },
  {
    question: "Which areas do you serve for fencing and decking?",
    answer:
      "We focus on Glasgow's northern and eastern suburbs (including Robroyston, Bishopbriggs, Lenzie, Kirkintilloch, Stepps, and nearby areas) and work regularly across Lanarkshire towns such as Hamilton, Motherwell, Coatbridge, Airdrie, and Cumbernauld. Contact us with your postcode — if you're nearby, we'll let you know straight away.",
  },
];

export const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-transparent box-border caret-transparent pt-[70px] pb-[100px] md:pt-[100px]">
        <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
          <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:gap-x-24 md:grid-cols-[minmax(200px,0.25fr)_1fr] md:gap-y-20 lg:gap-x-32">
            <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px] md:pr-8 lg:pr-12">
              Frequently Asked Questions
            </h2>
            <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start gap-y-[30px]">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
