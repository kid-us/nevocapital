interface CTA {
  id: number;
  top: string;
  low: string;
}

const ctaLists: CTA[] = [
  {
    id: 1,
    top: "Explore Our",
    low: "Finds",
  },
  {
    id: 2,
    top: "Meet Our",
    low: "Team",
  },
  {
    id: 3,
    top: "Contact",
    low: "Nevo Capital",
  },
];

const CompanyPage = () => {
  return (
    <div className="mt-20 md:mt-40 px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-2xl sm:text-3xl md:text-5xl uppercase px-4 sm:px-10">
          Building a Platform for Alternative Investment Excellence
        </p>
        <div className="relative mt-3 w-40 sm:w-60 md:w-[60%]">
          <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
          <hr className="border-2 border-cta" />
          <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
        </div>

        <div className="mt-10 sm:mt-16 max-w-5xl sm:px-6">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-400">
            Nevo Capital is a fund management firm focused on delivering
            institutional- quality opportunities in private markets—starting
            with our flagship Private Credit Fund.
          </p>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="flex flex-wrap justify-center lg:gap-10 gap-3 max-w-3xl">
          {ctaLists.map((cta) => (
            <div
              key={cta.id}
              className="flex flex-col items-center justify-center text-center border border-cta rounded-full w-36 h-36 lg:h-52 lg:w-52"
            >
              <p className="underline underline-offset-6 decoration-footer lg:text-2xl text-xl">
                {cta.top}
              </p>
              <p className="lg:text-2xl text-lg">{cta.low}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who we are */}
      <div className="flex flex-col items-center justify-center text-center mt-28">
        <p className="text-2xl sm:text-3xl md:text-5xl uppercase px-4 sm:px-10">
          Who We Are
        </p>
        <div className="relative mt-3 w-40 sm:w-60 md:w-[60%]">
          <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
          <hr className="border-2 border-cta" />
          <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
        </div>

        <div className="mt-10 sm:mt-16 max-w-4xl sm:px-6">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Nevo Capital is a boutique investment management firm dedicated to
            offering curated alternative strategies for accredited,
            non-accredited investors and family offices. We bring together deep
            expertise, disciplined risk management, and a forward-thinking
            approach to build a diverse portfolio of opportunities.
          </p>
        </div>
      </div>

      {/* Meet the team */}
      <div className="flex flex-col mt-40">
        <p className="text-2xl sm:text-3xl md:text-5xl uppercase px-4 sm:px-10">
          Meet the Team
        </p>
        <div className="relative mt-3 w-40 sm:w-60 md:w-[60%]">
          <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
          <hr className="border-2 border-cta" />
          <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
