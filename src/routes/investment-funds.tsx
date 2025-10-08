import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Revel";
import type { TOC } from "./company";
import WhatMakesItPrivate from "@/components/investment-fund/WhatMakesItPrivate";
import FundAtGlance from "@/components/investment-fund/FundAtGlance";
import PrivateCredit from "@/components/investment-fund/PrivateCredit";
import WhyNevoCapital from "@/components/investment-fund/WhyNevoCapital";
import FromCapitalReturns from "@/components/investment-fund/FromCapitalReturns";
import LookingAhead from "@/components/investment-fund/LookingAhead";
import ReadyToGrow from "@/components/investment-fund/ReadyToGrow";

export const Route = createFileRoute("/investment-funds")({
  component: InvestmentFunds,
});

export interface TabProps {
  id: number;
  title: string;
}

export interface Contents {
  id: number;
  img: string;
  title: string;
}

const tabs: TabProps[] = [
  { id: 1, title: "Core Real Estate Fund" },
  { id: 2, title: "Private Credit Fund" },
  { id: 3, title: "Diversified Alternatives Fund" },
];

const toc: TOC[] = [
  { id: "PrivateCredit", label: "What is Private Credit?" },
  { id: "WhatMakesItPrivate", label: "What makes it private?" },
  { id: "FundGlance", label: "Our Fund at a Glance" },
  { id: "FromCapitalReturns", label: "From Capital to Returns" },
  { id: "WhyNevoCapital", label: "Why Nevo Capital" },
  { id: "LookingAhead", label: "Looking Ahead: Expanding Opportunities" },
  { id: "ReadyToGrow", label: " Ready to Grow with Nevo Capital?" },
];

function InvestmentFunds() {
  const [currentSection, setCurrentSection] = useState<string>("PrivateCredit");
  const [currentTabSection, setCurrentTabSection] = useState<string>(
    "Private Credit Fund"
  );

  // Toc Tracker
  useEffect(() => {
    scrollTo(0, 0);

    const handleScroll = () => {
      let current = "";
      for (const t of toc) {
        const el = document.getElementById(t.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = t.id;
          }
        }
      }

      if (window.scrollY < 150) {
        current = toc[0].id;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        current = toc[toc.length - 1].id;
      }

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative lg:grid grid-cols-12 gap-x-5 mb-20">
      {/* Left Tabs */}
      <div className="col-span-2 lg:flex hidden flex-col relative border-r">
        <div className="sticky top-60">
          <div
            className={`relative transition-all duration-300 ease-in-out translate-x-0 opacity-100 visible`}
          >
            <div className="flex flex-col space-y-4">
              {tabs.map((tab) => (
                <Reveal key={tab.id}>
                  <p
                    onClick={() => setCurrentTabSection(tab.title)}
                    className={`ps-4 h-10 flex items-center w-full text-sm cursor-pointer ${
                      currentTabSection === tab.title
                        ? "text-primary font-medium bg-primary/10"
                        : "text-zinc-500 hover:bg-primary/10"
                    }`}
                  >
                    {tab.title}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-8 lg:px-8 px-6">
        {/* Private Credit */}
        <div id="PrivateCredit" className="lg:pt-20 pt-16">
          <PrivateCredit />
        </div>

        {/* What makes it private */}
        <div id="WhatMakesItPrivate" className="lg:pt-44 pt-20">
          <WhatMakesItPrivate />
        </div>

        {/* Fund at a Glance */}
        <div id="FundGlance" className="lg:pt-44 pt-20">
          <FundAtGlance />
        </div>

        {/* From Capital to Returns */}
        <div id="FromCapitalReturns" className="lg:pt-44 pt-20">
          <FromCapitalReturns />
        </div>

        {/* Why Nevo Capital */}
        <div id="WhyNevoCapital" className="lg:pt-44 pt-20">
          <WhyNevoCapital />
        </div>

        {/*  Looking Ahead: Expanding Opportunities  */}
        <div id="LookingAhead" className="lg:pt-44 pt-20">
          <LookingAhead />
        </div>

        {/* Ready to Grow with Nevo Capital?  */}
        <div id="ReadyToGrow" className="lg:pt-44 pt-20">
          <ReadyToGrow />
        </div>
      </div>

      {/* Right Sidebar Links */}
      <div className="lg:block hidden col-span-2 relative">
        <div className="sticky top-60">
          <div
            className={`relative transition-all duration-300 ease-in-out translate-x-0 opacity-100 visible`}
          >
            <div className="flex flex-col space-y-2">
              {toc.map((link) => (
                <Reveal key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`text-sm cursor-pointer ${
                      currentSection === link.id
                        ? "font-medium"
                        : "text-zinc-700"
                    }`}
                  >
                    {link.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
