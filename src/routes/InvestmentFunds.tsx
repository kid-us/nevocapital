import PrivateCreditFund from "@/components/investment-fund/PrivateCreditFund";
import {
  CalendarDays,
  DollarSign,
  House,
  NotebookPen,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface State {
  id: number;
  label: string;
  state: "" | "private-fund" | "semi-private" | "real-state";
}

interface Glance {
  id: number;
  label: string;
  icon: LucideIcon;
  value: string;
}

const heroSection: State[] = [
  { id: 1, state: "real-state", label: "Real State Fund" },
  { id: 2, state: "private-fund", label: "Private Credit Fund" },
  { id: 3, state: "semi-private", label: "Semi-Private Fund" },
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
  const [activeContent, setContent] = useState<
    "" | "private-fund" | "semi-private" | "real-state"
  >("");

  return (
    <div className="mt-20 md:mt-50">
      <div className="flex flex-col items-center justify-center">
        {/* Circle with text */}
        <div
          className={`flex flex-wrap md:flex-nowrap justify-center md:gap-x-12 md:gap-y-3 ${
            activeContent === "" && "mb-32"
          }`}
        >
          {heroSection.map((section) => (
            <div
              key={section.id}
              onClick={() => setContent(section.state)}
              className="flex items-center justify-center border-4 border-cta rounded-full w-36 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 basis-1/2 lg:basis-1/3 cursor-pointer hover:bg-footer transition-all duration-200"
            >
              <p className="text-xl md:text-4xl uppercase px-6 sm:px-10 text-center">
                {section.label}
              </p>
            </div>
          ))}
        </div>
        {activeContent === "private-fund" && <PrivateCreditFund />}
      </div>
    </div>
  );
};

export default InvestmentFundsPage;
