import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

const faqData = [
  {
    question: "How much does fencing or decking cost in Greater Glasgow?",
    answer:
      "It depends on materials, length, ground conditions, and access — we don’t guess over the phone. After a quick site visit we give a written quote with labour and materials broken down so you can compare fairly. Typical jobs range from small repairs to full boundary renewals; we’ll flag anything that could add cost before we start.",
  },
  {
    question: "Do you charge a fee just to come out and quote?",
    answer:
      "No — estimates are free and without obligation. We’ll arrange a time that suits you, assess the job properly, and explain options before you commit.",
  },
  {
    question: "How soon can you start or visit?",
    answer:
      "We aim to respond quickly—often within one business hour during working hours—and book site visits as soon as diaries allow. Seasonal demand varies; we’ll always give you a realistic window when you call.",
  },
  {
    question: "Are you insured and is your work guaranteed?",
    answer:
      "Yes — we carry public liability insurance and stand behind our workmanship. If something isn’t right, we’ll put it right. Details are confirmed in your quote so you know exactly what’s covered.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We focus on Glasgow’s northern and eastern suburbs (including Robroyston, Bishopbriggs, Lenzie, Kirkintilloch, Stepps, and nearby) and regularly work across Lanarkshire towns such as Hamilton, Motherwell, Coatbridge, Airdrie, and Cumbernauld. Send your postcode — if you’re in range, we’ll confirm straight away. On this page, open the “service areas” section for the full list.",
  },
  {
    question: "What happens after I request a quote?",
    answer:
      "We’ll confirm your details, arrange a visit if needed, then send a clear written quote. If you’re happy with the scope and price, we schedule the work and keep you updated from start to finish.",
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
