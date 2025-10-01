import type { TabProps } from "@/routes/investment-funds";
import Reveal from "../Revel";
import { Dot } from "lucide-react";

const contents: TabProps[] = [
  {
    id: 1,
    title:
      "Capital Preservation First – Senior liens and conservative loan-to-value ratios create a structural buffer.",
  },

  {
    id: 2,
    title:
      "Market Knowledge – Local expertise and a strong network enable superior sourcing and risk assessment.",
  },
  {
    id: 3,
    title:
      "Technology-Enabled Oversight – Data-driven monitoring ensures visibility into project progress and outcomes.",
  },
  {
    id: 4,
    title:
      "Alignment of Interests – Our success depends on the consistent performance of our investors’ capital.",
  },
];

const infos: { title: string; desc: string }[] = [
  {
    title: "Capital Preservation First",
    desc: "Senior liens and conservative loan-to-value ratios create a structural buffer",
  },
  {
    title: "Market Knowledge",
    desc: "Local expertise and a strong network enable superior sourcing and risk assessment",
  },
  {
    title: "Technology-Enabled Oversight",
    desc: "Data-driven monitoring ensures visibility into project progress and outcomes",
  },
  {
    title: "Alignment of Interests",
    desc: "Our success depends on the consistent performance of our investors capital",
  },
];

const WhyNevoCapital = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">Why Nevo Capital</h1>
      </Reveal>
      <Reveal>
        <p className="mt-4">
          Our edge lies in pairing real estate expertise with a disciplined
          credit framework. Every loan is underwritten with a focus on downside
          protection, yield premium, and operational transparency.
        </p>
      </Reveal>

      <div className="ms-2 mt-4 mb-6">
        {contents.map((content) => (
          <Reveal key={content.id}>
            <div className="flex space-x-3 items-center mb-2">
              <Dot />
              <p>{content.title}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {infos.map((info) => (
        <Reveal key={info.title}>
          <div className="md:p-5 p-3 border-2 border-primary mb-5 bg-primary/10">
            <p className="font-bold">{info.title}</p>
            <p className="text-zinc-500 md:text-[15px] text-sm">{info.desc}</p>
          </div>
        </Reveal>
      ))}
    </>
  );
};

export default WhyNevoCapital;
