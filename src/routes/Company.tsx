import { timeline } from "@/assets";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Image } from "lucide-react";

interface CTA {
  id: number;
  top: string;
  low: string;
}

interface OurTeam {
  id: number;
  img: string;
  name: string;
  role: string;
  path: "jochai" | "david" | "alex";
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

const ourTeam: OurTeam[] = [
  {
    id: 1,
    path: "jochai",
    img: "",
    name: "Jochai Mor",
    role: "Managing Partner & CEO",
  },
  {
    id: 2,
    path: "david",
    img: "",
    name: "David Sher",
    role: "Managing Partner & CFO",
  },
  {
    id: 3,
    path: "alex",
    img: "",
    name: "Alex Failaev",
    role: "Managing Partner & COO",
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
        <div className="relative mt-3 w-60 sm:w-60 md:w-[60%]">
          <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
          <hr className="border-2 border-cta" />
          <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-14 gap-8 md:mt-16 mt-10">
          {ourTeam.map((team) => (
            <div key={team.id}>
              <div className="relative border rounded mb-5 flex items-center">
                <div className="absolute top-2 right-2 text-cta">
                  <Link
                    to={`/company/${team.path}`}
                    className="font-semibold flex gap-x-2 group"
                  >
                    More about
                    <ArrowUpRight className="group-hover:rotate-45 transition-all duration-300" />
                  </Link>
                </div>
                <Image className="w-full h-full" size={100} />
              </div>
              <p className="font-semibold text-xl">{team.name}</p>
              <p className="font-semibold text-xl">{team.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Vision */}
      <div className="mt-28 h-full">
        <p className="text-5xl font-semibold">Our Vision</p>
        <div className="grid items-center lg:grid-cols-3 lg:gap-0 gap-y-10">
          <div>
            <p className="mt-4 text-xl">
              Strategic Growth, Built on Principles
            </p>

            <p className="mt-10 md:text-lg text-sm">
              Nevo Capital was founded to deliver institutional- quality access
              to private markets. Our focus is on providing carefully structured
              opportunities that prioritize capital protection and consistent
              performance. While we continue to innovate within private credit,
              our broader mission is to offer diversified strategies that align
              with the long-term goals of sophisticated investors
            </p>
          </div>

          <div className="relative col-span-2 flex justify-center">
            <div className="absolute lg:left-40 -left-5 flex items-center justify-center border border-cta rounded-full p-5 w-32 h-32 md:w-40 md:h-40">
              <p className="text-center font-medium md:text-lg text-sm">
                Private Credit Fund
              </p>
            </div>

            <div className="absolute lg:right-40 -right-3 md:top-55 top-46 flex items-center justify-center border border-cta rounded-full p-5 w-32 h-32 md:w-40 md:h-40">
              <p className="text-center font-medium md:text-lg text-sm">
                Additional Real Estate Strategies
              </p>
            </div>

            <div className="absolute lg:left-40 -left-5 md:bottom-0 bottom-20 flex items-center justify-center border border-cta rounded-full p-5 w-32 h-32 md:w-40 md:h-40">
              <p className="text-center font-medium md:text-lg text-sm">
                Broader Alternative Investments
              </p>
            </div>
            <img src={timeline} className="md:h-[550px] h-[450px]" />
          </div>
        </div>
      </div>

      {/* Why Partner with US */}
      <div className="my-32">
        <div className="flex justify-center">
          <p className="lg:text-6xl md:text-4xl text-3xl font-medium">
            Why Partner with Us
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col items-center justify-center border-4 border-cta rounded-full w-36 h-36 md:w-60 md:h-60 lg:w-72 lg:h-72 hover:bg-footer transition-all duration-200">
            <p className="text-xs md:text-2xl uppercase md:px-6 px-4 sm:px-10 text-center">
              Institutional Quality
            </p>
            <hr className="border-2 w-[50%] border-footer mt-3" />
            <p className="text-center md:mx-8 mx-3 mt-2 md:text-[16px] text-[9px]">
              Built on principles of governance, compliance, and transparency.
            </p>
          </div>

          <div className="flex justify-between mt-5 md:space-x-20 space-x-2">
            <div className="flex flex-col items-center justify-center border-4 border-cta rounded-full w-36 h-36 md:w-60 md:h-60 lg:w-72 lg:h-72 hover:bg-footer transition-all duration-200">
              <p className="text-xs md:text-2xl uppercase md:px-6 px-4 sm:px-10 text-center">
                Specialized Expertise
              </p>
              <hr className="border-2 w-[50%] border-footer mt-3" />
              <p className="text-center md:mx-8 mx-3 mt-2 md:text-[16px] text-[9px]">
                A leadership team with deep knowledge in real Estate and private
                markets.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border-4 border-cta rounded-full w-36 h-36 md:w-60 md:h-60 lg:w-72 lg:h-72 hover:bg-footer transition-all duration-200">
              <p className="text-xs md:text-2xl uppercase md:px-6 px-4 sm:px-10 text-center">
                Aligned Interests
              </p>
              <hr className="border-2 w-[50%] border-footer mt-3" />
              <p className="text-center md:mx-8 mx-3 mt-2 md:text-[16px] text-[9px]">
                We commit our own capital alongside yours—true partnership in
                every strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
