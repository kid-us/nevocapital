import GlanceGridLarge from "@/components/investment-fund/GlanceLarge";
import GlanceGridMobile from "@/components/investment-fund/GlanceSmall";
import {
  BadgeCheck,
  CalendarDays,
  DollarSign,
  House,
  NotebookPen,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Badges {
  id: number;
  label: string;
}

interface Glance {
  id: number;
  label: string;
  icon: LucideIcon;
  value: string;
}

const heroSection: Badges[] = [
  { id: 1, label: "Private Credit Fund" },
  { id: 2, label: "Private Credit Fund" },
  { id: 3, label: "Private Credit Fund" },
];

const badges: Badges[] = [
  { id: 1, label: "Higher Yields" },
  { id: 2, label: "Stable & Predictable" },
  { id: 3, label: "Direct Lending" },
];

export const glance: Glance[] = [
  {
    id: 1,
    icon: TrendingUp,
    label: "Target Investor Return",
    value: "10%+ annually",
  },
  {
    id: 2,
    icon: DollarSign,
    label: "Minimum Investment",
    value: "$50,000",
  },
  {
    id: 3,
    icon: NotebookPen,
    label: "Regulation Type",
    value: "Reg D 506(b), 3(C)(1)",
  },
  {
    id: 4,
    icon: CalendarDays,
    label: "Lock Up Period",
    value: "12 months",
  },
  {
    id: 5,
    icon: House,
    label: "First Position",
    value: "Line on Real property",
  },
];

const InvestmentFundsPage = () => {
  return (
    <div className="mt-20 md:mt-50">
      <div className="flex flex-col items-center justify-center">
        {/* Circle with text */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-x-2 md:gap-y-3">
          {heroSection.map((section) => (
            <div
              key={section.id}
              className="flex items-center justify-center border-4 border-cta rounded-full 
                 w-36 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72
                 basis-1/2 lg:basis-1/3"
            >
              <p className="text-xl md:text-4xl uppercase px-6 sm:px-10 text-center">
                {section.label}
              </p>
            </div>
          ))}
        </div>

        {/* Dashed line below */}
        <div className="flex items-center justify-center">
          <div className="border-l-2 border-dashed border-cta/40 bg-cta/20 mt-10 h-32 sm:h-40" />
        </div>

        {/* What is Private Credit */}
        <div className="mt-5 text-center max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
            What is Private Credit?
          </h1>
          {/* Horizontal Line */}
          <div className="relative mt-2">
            <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
            <hr className="border-2 border-cta" />
            <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
          </div>
          <p className="italic mt-2 text-sm sm:text-base">
            A powerful asset class designed for predictable returns
          </p>
        </div>

        {/* Private credit detail */}
        <div className="mt-16 w-full max-w-6xl">
          <div className="lg:grid grid-cols-3 items-center gap-x-10 lg:gap-x-20">
            <p className="lg:col-span-2 text-base sm:text-lg md:text-xl leading-relaxed">
              Private credit—sometimes called private lending—is built on a
              simple idea: lending directly to borrowers for a fixed return.
              Unlike equities that swing with markets, private credit focuses on
              steady, predictable income—typically through interest or preferred
              returns—without stock market volatility
            </p>
            <div className="mt-6 lg:mt-0 space-y-4">
              {badges.map((badge) => (
                <div key={badge.id} className="flex items-center space-x-4">
                  <BadgeCheck className="text-cta size-8 sm:size-10" />
                  <p className="rounded border bg-footer text-cta w-full text-center h-9 flex items-center justify-center text-sm sm:text-base">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What makes it private */}
        <div className="mt-32 text-center max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            What makes it private?
          </h1>
          {/* Horizontal Line */}
          <div className="flex items-center justify-center">
            <div className="relative mt-2 w-full max-w-3xl">
              <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
              <hr className="border-2 border-cta" />
              <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
            </div>
          </div>
          <p className="italic mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
            Unlike public bonds, these opportunities aren’t traded on open
            markets. Instead, they’re negotiated, illiquid transactions that
            reward investors with higher yields for committing capital for a set
            period. This blend of stability, security, and attractive returns
            has made private credit one of the fastest-growing
            alternatives—perfect for those seeking diversification beyond stocks
            and traditional bonds.
          </p>
        </div>

        {/* Our Fund at a Glance */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mt-28 w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:w-64 font-semibold text-center md:text-left">
            Our Fund at a Glance
          </h1>
        </div>

        <p className="text-base text-start sm:text-lg mt-10 md:mt-20 lg:me-44 leading-relaxed lg:ms-5">
          Our Private Credit Fund provides short-term, real estate-backed
          financing for fix-and-flip projects. By combining speed, technology,
          flexibility, and rigorous underwriting, we aim to deliver stable,
          attractive returns while prioritizing the protection of investor
          capital.
        </p>

        <div className="flex justify-center items-center w-full mt-10 md:mt-20 mb-10">
          {/* Large Device */}
          <GlanceGridLarge />

          {/* Small Device */}
          <GlanceGridMobile />
        </div>
      </div>
    </div>
  );
};

export default InvestmentFundsPage;
