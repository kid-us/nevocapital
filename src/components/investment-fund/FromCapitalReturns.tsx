import { leftArrow, longLineArrow, rightArrow } from "@/assets";
import Reveal from "../Revel";

const FromCapitalReturns = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">From Capital to Returns</h1>
      </Reveal>

      <Reveal>
        <p className="mt-4">
          A clear, repeatable process designed to protect investor capital and
          generate steady returns.
        </p>
      </Reveal>

      <Reveal>
        <p className="mt-2">Investment Cycle</p>
      </Reveal>

      <div className="grid grid-cols-7 mt-16">
        <div className="md:flex hidden items-center">
          <Reveal>
            <img src={longLineArrow} alt="Line Arrow" />
          </Reveal>
        </div>

        <div className="col-span-6">
          <div className="grid md:grid-cols-4 gap-x-10 gap-y-5">
            <div className="col-span-2 md:w-[200px] w-full">
              <Reveal>
                <div className="space-y-2">
                  <h1 className="md:text-2xl text-xl font-semibold">
                    1 - Investor Commitment
                  </h1>
                  <p>Investors commit capital to the fund.</p>
                </div>
              </Reveal>
            </div>

            {/* Right Arrow */}
            <div className="col-span-2 md:flex hidden items-center">
              <Reveal>
                <img src={rightArrow} alt="Right Arrow" />
              </Reveal>
            </div>

            {/* Left Arrow */}
            <div className="col-span-2 md:flex hidden items-center">
              <Reveal>
                <img src={leftArrow} alt="Left Arrow" />
              </Reveal>
            </div>

            <div className="col-span-2 md:w-[200px] w-full">
              <Reveal>
                <div className="space-y-2">
                  <h1 className="md:text-2xl text-xl font-semibold">
                    2 - Capital Deployment
                  </h1>
                  <p>
                    The fund lends capital to real estate investors for
                    fix-and-flip and wholesale projects.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-2 md:w-[200px] w-full">
              <Reveal>
                <div className="space-y-2">
                  <h1 className="md:text-2xl text-xl font-semibold">
                    3 - Project Execution
                  </h1>
                  <p>
                    The real estate investors acquire, renovate, and sell
                    properties.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Arrow */}
            <div className="col-span-2 md:flex hidden items-center">
              <Reveal>
                <img src={rightArrow} alt="Right Arrow" />
              </Reveal>
            </div>

            {/* Left Arrow */}
            <div className="col-span-2 md:flex hidden items-center">
              <Reveal>
                <img src={leftArrow} alt="Left Arrow" />
              </Reveal>
            </div>

            <div className="col-span-2 md:w-[200px] w-full">
              <Reveal>
                <div className="space-y-2">
                  <h1 className="md:text-2xl text-xl font-semibold">
                    4 - Project Execution
                  </h1>
                  <p>
                    The real estate investors acquire, renovate, and sell
                    properties.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-2 md:w-[200px] w-full">
              <Reveal>
                <div className="space-y-2">
                  <h1 className="md:text-2xl text-xl font-semibold">
                    5 - Investor Payouts
                  </h1>
                  <p>
                    The real estate investors acquire, renovate, and sell
                    properties.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FromCapitalReturns;
