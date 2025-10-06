import Reveal from "../Revel";

const LookingAhead = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">
          Looking Ahead: Expanding Opportunities
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-sm">
          While the Nevo Capital Private Credit Fund is currently open, we are
          preparing additional funds to expand investor access. Our platform
          roadmap spans today’s short-term lending, tomorrow’s long-term real
          estate growth, and ultimately, diversified alternative
          strategies—offering options across the full spectrum of private
          markets.
        </p>
      </Reveal>

      <div className="relative mt-8">
        <div className="grid lg:grid-cols-3">
          <div className="lg:block flex items-center">
            <Reveal>
              <div className="lg:hidden block w-6 border-t"></div>
            </Reveal>
            <div className="lg:mt-0 mt-10 ms-2">
              <Reveal>
                <p className="text-sm">Today</p>
              </Reveal>
              <Reveal>
                <div className="lg:block hidden h-6 border-l"></div>
              </Reveal>
              <Reveal>
                <p className="lg:mt-3 mt-1 text-xs font-semibold">
                  Private Credit Fund (short-term, lending)
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:block flex items-center">
            <Reveal>
              <div className="lg:hidden block w-6 border-t"></div>
            </Reveal>
            <div className="lg:mt-0 mt-5 ms-2">
              <Reveal>
                <p className="text-sm">Next</p>
              </Reveal>
              <Reveal>
                <div className="lg:block hidden h-6 border-l"></div>
              </Reveal>
              <Reveal>
                <p className="lg:mt-3 mt-1 text-xs font-semibold">
                  Core Real Estate Fund (long-term, growth & income)
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:block flex items-center">
            <Reveal>
              <div className="lg:hidden block w-6 border-t"></div>
            </Reveal>
            <div className="lg:mt-0 mt-5 ms-2">
              <Reveal>
                <p className="text-sm">Future</p>
              </Reveal>
              <Reveal>
                <div className="lg:block hidden h-6 border-l"></div>
              </Reveal>
              <Reveal>
                <p className="lg:mt-3 mt-1 text-xs font-semibold">
                  Diversified Alternatives Fund (broad exposure)
                </p>
              </Reveal>
            </div>
          </div>
          <div className="absolute left-0 top-5 my-3 lg:w-full lg:h-[2px] w-[2px] h-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default LookingAhead;
