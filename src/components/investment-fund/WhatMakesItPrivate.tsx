import { ChartBarLabel } from "../Chart";
import Reveal from "../Revel";

const WhatMakesItPrivate = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">What Makes It Private?</h1>
      </Reveal>
      <Reveal>
        <p className="text-sm mt-4">
          Unlike public bonds, private credit opportunities aren’t traded on
          open markets. Instead, they involve negotiated, illiquid transactions
          that reward investors with higher yields for committing capital over a
          set period. This blend of stability, security, and attractive returns
          has made private credit one of the fastest-growing alternatives—ideal
          for those seeking diversification beyond stocks and traditional bonds.
        </p>
      </Reveal>

      <Reveal>
        <p className="mt-3 text-sm">
          Global Growth of Private Credit (AUM in $ Billions)
        </p>
      </Reveal>

      <Reveal>
        <ChartBarLabel />
      </Reveal>
    </>
  );
};

export default WhatMakesItPrivate;
