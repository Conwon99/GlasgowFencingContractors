const DEFAULT_HEADING = "Quality Fencing & Decking Services";
const DEFAULT_INTRO =
  "We specialize in delivering dependable fencing services with outstanding results throughout Greater Glasgow. Whether you need bespoke fencing, sheds & gates, trellis, decking, palisade fencing, or fencing repairs, our experienced team is dedicated to providing top-quality craftsmanship. With over 13 years' experience, we deliver quality workmanship and value.";

interface HeroContentProps {
  primaryHeading?: string;
  introParagraph?: string;
}

export const HeroContent = ({ primaryHeading, introParagraph }: HeroContentProps = {}) => {
  const title = primaryHeading ?? DEFAULT_HEADING;
  const intro = introParagraph ?? DEFAULT_INTRO;

  return (
    <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-0 w-full ml-auto md:gap-x-[normal] md:gap-y-[normal] md:w-[45%]">
      <h1 className="text-white text-[38px] font-bold box-border caret-transparent leading-[49.4px] mb-2.5 md:text-[64px] md:leading-[83.2px]">
        {title}
      </h1>
      <p className="text-white box-border caret-transparent w-full mb-[30px] md:w-4/5 md:mb-[50px]">{intro}</p>
    </div>
  );
};

