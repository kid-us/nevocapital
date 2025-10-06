import type { Contents } from "@/routes/investment-funds";
import Reveal from "../Revel";
import { directLending, higherYields, stable } from "@/assets";

const contents: Contents[] = [
  { id: 1, title: "Higher Yields", img: higherYields },
  { id: 2, title: "Stable & Predictable", img: stable },
  { id: 3, title: "Direct Lending", img: directLending },
];

const PrivateCredit = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">What is Private Credit?</h1>
      </Reveal>
      <Reveal>
        <p className="text-zinc-400 mt-5">
          A powerful asset class designed for predictable returns
        </p>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-sm">
          Private credit—sometimes called private lending—is built on a simple
          idea: lending directly to borrowers for a fixed return. Unlike
          equities that swing with the market, private credit focuses on steady,
          predictable income—typically through interest or preferred
          returns—without the volatility of public markets.
        </p>
      </Reveal>

      {/* Contents */}
      <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {contents.map((content) => (
          <Reveal key={content.id}>
            <div className="w-full">
              <img
                src={content.img}
                alt={content.title}
                className="w-full h-32 object-cover"
              />
              <p className="text-sm mt-2">{content.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
};

export default PrivateCredit;
