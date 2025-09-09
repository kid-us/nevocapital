// // import PrivateCreditFund from "@/components/investment-fund/PrivateCreditFund";
// // import {
// //   CalendarDays,
// //   DollarSign,
// //   House,
// //   NotebookPen,
// //   TrendingUp,
// // } from "lucide-react";
// // import type { LucideIcon } from "lucide-react";
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // interface State {
// //   id: number;
// //   label: string;
// //   state: "" | "private-fund" | "semi-private" | "real-state";
// // }

// // interface Glance {
// //   id: number;
// //   label: string;
// //   icon: LucideIcon;
// //   value: string;
// // }

// // const heroSection: State[] = [
// //   { id: 1, state: "real-state", label: "Real State Fund" },
// //   { id: 2, state: "private-fund", label: "Private Credit Fund" },
// //   { id: 3, state: "semi-private", label: "Semi-Private Fund" },
// // ];

// // export const glance: Glance[] = [
// //   {
// //     id: 1,
// //     icon: TrendingUp,
// //     label: "Target Investor Return",
// //     value: "10%+ annually",
// //   },
// //   {
// //     id: 2,
// //     icon: DollarSign,
// //     label: "Minimum Investment",
// //     value: "$50,000",
// //   },
// //   {
// //     id: 3,
// //     icon: NotebookPen,
// //     label: "Regulation Type",
// //     value: "Reg D 506(b), 3(C)(1)",
// //   },
// //   {
// //     id: 4,
// //     icon: CalendarDays,
// //     label: "Lock Up Period",
// //     value: "12 months",
// //   },
// //   {
// //     id: 5,
// //     icon: House,
// //     label: "First Position",
// //     value: "Line on Real property",
// //   },
// // ];

// // const InvestmentFundsPage = () => {
// //   const [activeContent, setContent] = useState<
// //     "" | "private-fund" | "semi-private" | "real-state"
// //   >("");

// //   return (
// //     <div className="mt-20 md:mt-50">
// //       <div className="flex flex-col items-center justify-center">
// //         {/* Animated Circles */}
// //         <div
// //           className={`flex flex-wrap md:flex-nowrap justify-center md:gap-x-12 md:gap-y-3 h-96 ${
// //             activeContent === "" && "mb-32"
// //           }`}
// //         >
// //           {heroSection.map((section) => {
// //             const isActive = activeContent === section.state;
// //             return (
// //               <motion.div
// //                 key={section.id}
// //                 onClick={() => setContent(section.state)}
// //                 className="flex items-center justify-center border border-cta rounded-full cursor-pointer text-center"
// //                 initial={{ scale: 0.9, opacity: 0.8 }}
// //                 animate={{
// //                   scale: isActive ? 1.3 : 1,
// //                   borderWidth: isActive ? 4 : 2,
// //                   opacity: 1,
// //                 }}
// //                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //                 style={{
// //                   width: isActive ? 270 : 250,
// //                   height: isActive ? 270 : 250,
// //                 }}
// //               >
// //                 <p className="text-xl md:text-2xl lg:text-3xl uppercase px-6 sm:px-10">
// //                   {section.label}
// //                 </p>
// //               </motion.div>
// //             );
// //           })}
// //         </div>

// //         {/* Active Content Section */}
// //         <AnimatePresence mode="wait">
// //           {activeContent === "private-fund" && <PrivateCreditFund />}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default InvestmentFundsPage;

// "use client";

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
import { motion, AnimatePresence } from "framer-motion";

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
        {/* Animated Circles */}
        {/*  */}
        {/* Animated Circles */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-x-12 md:gap-y-6 h-auto md:h-96 ${
            activeContent === "" ? "mb-32" : ""
          }`}
        >
          {heroSection.map((section) => {
            const isActive = activeContent === section.state;
            return (
              <motion.div
                key={section.id}
                onClick={() => setContent(section.state)}
                className={`relative flex items-center justify-center rounded-full cursor-pointer text-center overflow-hidden border border-cta ${
                  !isActive ? "beam-border" : ""
                }`}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{
                  scale: isActive ? 1.3 : 1,
                  borderWidth: isActive ? 1 : 2,
                  opacity: 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  width: isActive
                    ? "clamp(200px, 25vw, 270px)"
                    : "clamp(180px, 22vw, 250px)",
                  height: isActive
                    ? "clamp(200px, 25vw, 270px)"
                    : "clamp(180px, 22vw, 250px)",
                }}
              >
                {/* Text shimmer */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase px-4 sm:px-6 md:px-10 animate-shimmer-text bg-gradient-to-r from-gray-200 via-cta to-gray-200 bg-clip-text text-white">
                  {section.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Active Content Section */}
        <AnimatePresence mode="wait">
          {activeContent === "private-fund" && <PrivateCreditFund />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InvestmentFundsPage;
