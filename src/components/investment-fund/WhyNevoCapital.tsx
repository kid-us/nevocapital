import Reveal from "../Revel";

const infos: { title: string; desc: string }[] = [
  {
    title: "Capital Preservation First",
    desc: "Senior liens and conservative loan-to-value ratios create a structural buffer.",
  },
  {
    title: "Market Knowledge",
    desc: "Local expertise and a strong network enable superior sourcing and risk assessment.",
  },
  {
    title: "Technology-Enabled Oversight",
    desc: "Data-driven monitoring ensures visibility into project progress and outcomes.",
  },
  {
    title: "Alignment of Interests",
    desc: "Our success depends on the consistent performance of our investors’ capital.",
  },
];

const WhyNevoCapital = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">Why Nevo Capital</h1>
      </Reveal>
      <Reveal>
        <p className="mt-4 mb-10">
          Nevo Capital pairs deep real estate expertise with a disciplined
          credit framework—delivering stability and yield for investors. Every
          loan is underwritten with a focus on downside protection, yield
          premium, and operational transparency.
        </p>
      </Reveal>

      {infos.map((info) => (
        <Reveal key={info.title}>
          <div className="md:p-5 p-3 border-2 border-primary mb-5 bg-primary/5 hover:scale-103 hover:bg-primary hover:text-white transition-all duration-500 group">
            <p className="font-bold">{info.title}</p>
            <p className="text-zinc-500 group-hover:text-zinc-200 md:text-[15px] text-sm mt-1">
              {info.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </>
  );
};

export default WhyNevoCapital;
