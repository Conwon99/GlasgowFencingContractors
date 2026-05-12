const items = [
  {
    title: "24+ five-star reviews",
    body: "Homeowners across Greater Glasgow rate our fencing and decking work highly — see verified feedback on Google and Facebook before you call.",
  },
  {
    title: "Fast responses",
    body: "Tell us what you need and we’ll arrange a visit—often within days for standard jobs, with clear timing once we’ve seen the site.",
  },
  {
    title: "Free, no-obligation quotes",
    body: "You’ll know the scope and price before we start. No surprise extras — we explain materials, labour, and timeline upfront.",
  },
  {
    title: "Fully insured workmanship",
    body: "Qualified fitters, full public liability cover, and tidy sites — your job is protected from survey through completion.",
  },
];

export const WhyChooseHomeSection = () => {
  return (
    <section className="box-border caret-transparent bg-[#2a2a2a] py-[70px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px]">
        <h2 className="text-white text-center text-3xl font-bold mb-10 md:text-[56px] md:leading-[67px] md:mb-14">
          Why Greater Glasgow Homeowners Call Us First
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#323232] border border-white/10 rounded-[20px] p-6 md:p-8 flex flex-col gap-3 shadow-lg"
            >
              <h3 className="text-white text-xl font-bold leading-snug md:text-2xl">{item.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed md:text-base">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
