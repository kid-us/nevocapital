// Investment Funds Route
import { useState, useEffect } from "react";
import {
  directLending,
  firstPosition,
  graph2,
  higherYields,
  lockUp,
  minimumInvestment,
  regulation,
  stable,
  targetInvestor,
  yieldGraph,
} from "@/assets";
import { createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Revel";

export const Route = createFileRoute("/investment-funds")({
  component: InvestmentFunds,
});

interface TabProps {
  id: number;
  title: string;
}

interface Contents {
  id: number;
  img: string;
  title: string;
}

const tabs: TabProps[] = [
  { id: 1, title: "Real State Fund" },
  { id: 2, title: "Private Credit Fund" },
  { id: 3, title: "Semi-Private Fund" },
];

const contents: Contents[] = [
  { id: 1, title: "Higher Yields", img: higherYields },
  { id: 2, title: "Stable & Predictable", img: stable },
  { id: 3, title: "Direct Lending", img: directLending },
];

const ourGlance: Contents[] = [
  { id: 1, img: targetInvestor, title: "Target Investor Return 10%+ annually" },
  { id: 2, img: minimumInvestment, title: "Minimum Investment $50,000" },
  { id: 3, img: regulation, title: "Regulation Type Reg D 506(b), 3(C)(1)" },
  { id: 4, img: firstPosition, title: "First Position Line on Real property" },
  { id: 5, img: lockUp, title: "Lock Up Period 12 months" },
];

function InvestmentFunds() {
  const [currentSection, setCurrentSection] = useState<string>("PrivateCredit");
  const [currentTabSection, setCurrentTabSection] = useState<string>(
    "Private Credit Fund"
  );

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative grid grid-cols-12 gap-x-5 mt-24 mb-20">
      {/* Left Tabs */}
      <div className="col-span-2 flex flex-col border-r space-y-4 pt-44">
        <div className="sticky top-84 space-y-4 ">
          {tabs.map((tab) => (
            <p
              key={tab.id}
              onClick={() => setCurrentTabSection(tab.title)}
              className={`ps-4 h-10 flex items-center w-full text-sm cursor-pointer ${
                currentTabSection === tab.title
                  ? "text-black font-medium bg-[#ebebeb]"
                  : "text-zinc-500"
              }`}
            >
              {tab.title}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-8 px-8">
        {/* Private Credit */}
        <Reveal>
          <div id="PrivateCredit">
            <h1 className="text-3xl">What is Private Credit?</h1>
            <p className="text-zinc-400 mt-4">
              A powerful asset class designed for predictable returns
            </p>
            <p className="mt-5 text-sm">
              Private credit—sometimes called private lending—is built on a
              simple idea: lending directly to borrowers for a fixed return.
              Unlike equities that swing with markets, private credit focuses on
              steady, predictable income—typically through interest or preferred
              returns—without stock market volatility.
            </p>
            {/* Contents */}
            <div className="my-6 grid grid-cols-3 gap-5">
              {contents.map((content) => (
                <div key={content.id} className="w-full">
                  <img
                    src={content.img}
                    alt={content.title}
                    className="w-full h-32 object-cover"
                  />
                  <p className="text-sm mt-2">{content.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* What makes it private */}
        <Reveal>
          <div id="WhatMakesItPrivate" className="mt-16">
            <h1 className="text-3xl">What makes it private?</h1>
            <p className="text-sm mt-4">
              Unlike public bonds, these opportunities aren’t traded on open
              markets. Instead, they’re negotiated, illiquid transactions that
              reward investors with higher yields for committing capital for a
              set period. This blend of stability, security, and attractive
              returns has made private credit one of the fastest-growing
              alternatives—perfect for those seeking diversification beyond
              stocks and traditional bonds.
            </p>

            <p className="mt-3 text-sm">
              Global Growth of Private Credit (AUM in $ Billions)
            </p>
            <img src={yieldGraph} alt="Yield Graph" className="my-10 w-full" />
            <img src={graph2} alt="Yield Graph" className="my-10 w-full" />
          </div>
        </Reveal>

        {/* Fund at a Glance */}
        <Reveal>
          <div id="FundGlance" className="mt-16">
            <h1 className="text-3xl">Our Fund at a Glance</h1>
            <p className="mt-4 text-sm">
              Our Private Credit Fund provides short-term, real estate-backed
              financing for fix-and-flip projects. By combining speed,
              technology, flexibility, and rigorous underwriting, we aim to
              deliver stable, attractive returns while prioritizing the
              protection of investor capital.
            </p>

            <div className="my-6 grid grid-cols-2 gap-5">
              {ourGlance.map((glance) => (
                <div key={glance.id}>
                  <img src={glance.img} alt={glance.title} />
                  <p>{glance.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Right Sidebar Links */}
      <div className="col-span-2">
        <div className="sticky top-28 flex flex-col space-y-2">
          {[
            { id: "PrivateCredit", label: "What is Private Credit?" },
            { id: "WhatMakesItPrivate", label: "What makes it private?" },
            { id: "FundGlance", label: "Our Fund at a Glance" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm cursor-pointer ${
                currentSection === link.id ? "font-bold" : "text-zinc-500"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
