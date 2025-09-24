import { useState, useEffect } from "react";
import {
  directLending,
  graph2,
  grid,
  higherYields,
  yieldGraph,
  invest,
  dollar,
  building,
  hammer,
  lockUp2,
  stable,
} from "@/assets";
import { createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Revel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/investment-funds")({
  component: InvestmentFunds,
});

interface TabProps {
  id: number;
  title: string;
}

export interface Contents {
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

// const ourGlance: Contents[] = [
//   { id: 1, img: targetInvestor, title: "Target Investor Return 10%+ annually" },
//   { id: 2, img: minimumInvestment, title: "Minimum Investment $50,000" },
//   { id: 3, img: regulation, title: "Regulation Type Reg D 506(b), 3(C)(1)" },
//   { id: 4, img: firstPosition, title: "First Position Line on Real property" },
//   { id: 5, img: lockUp, title: "Lock Up Period 12 months" },
// ];

function InvestmentFunds() {
  const [currentSection, setCurrentSection] = useState<string>("PrivateCredit");
  const [hideSidebarTab, setHideSidebarTab] = useState<boolean>(false);
  const [hideSidebarLink, setHideSidebarLink] = useState<boolean>(false);
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
        rootMargin: "20% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Toggle sidebar visibility
  const toggleSidebarTab = () => {
    setHideSidebarTab(!hideSidebarTab);
  };

  const toggleSidebarLink = () => {
    setHideSidebarLink(!hideSidebarLink);
  };

  return (
    <div className="relative lg:grid grid-cols-12 gap-x-5 lg:mt-24 mt-16 mb-20">
      {/* Left Tabs */}
      <div className="col-span-2 lg:flex hidden flex-col relative">
        {/* Toggle Button (always visible) */}
        <div
          onClick={toggleSidebarTab}
          className="absolute top-44 -left-8 cursor-pointer z-20 bg-primary/50 hover:bg-primary transition-all duration-200 h-16 mt-10 w-5 flex items-center"
        >
          {hideSidebarTab ? <ChevronRight /> : <ChevronLeft />}
        </div>

        {/* Sidebar Tabs (hideable content) */}
        <div
          className={`relative transition-all duration-300 ease-in-out ${
            hideSidebarTab
              ? "translate-x-[-100%] opacity-0 invisible"
              : "translate-x-0 opacity-100 visible"
          }`}
        >
          <div className="sticky top-44 space-y-4 border-r pt-44">
            {tabs.map((tab) => (
              <Reveal key={tab.id}>
                <p
                  onClick={() => setCurrentTabSection(tab.title)}
                  className={`ps-4 h-10 flex items-center w-full text-sm cursor-pointer ${
                    currentTabSection === tab.title
                      ? "text-black font-medium bg-[#ebebeb]"
                      : "text-zinc-500"
                  }`}
                >
                  {tab.title}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-8 lg:px-8 px-6">
        {/* Private Credit */}
        <div id="PrivateCredit">
          <Reveal>
            <h1 className="lg:text-3xl text-xl">What is Private Credit?</h1>
          </Reveal>
          <Reveal>
            <p className="text-zinc-400 mt-4">
              A powerful asset class designed for predictable returns
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-sm">
              Private credit—sometimes called private lending—is built on a
              simple idea: lending directly to borrowers for a fixed return.
              Unlike equities that swing with markets, private credit focuses on
              steady, predictable income—typically through interest or preferred
              returns—without stock market volatility.
            </p>
          </Reveal>
          {/* Contents */}
          <div className="my-6 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {contents.map((content) => (
              <Reveal key={content.id}>
                <div className="w-full">
                  <img
                    src={content.img}
                    alt={content.title}
                    className="w-full h-32 object-cover"
                  />
                  <p className="text-sm mt-2">{content.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What makes it private */}
        <div id="WhatMakesItPrivate" className="lg:mt-28 mt-16">
          <Reveal>
            <h1 className="lg:text-3xl text-xl">What makes it private?</h1>
          </Reveal>
          <Reveal>
            <p className="text-sm mt-4">
              Unlike public bonds, these opportunities aren’t traded on open
              markets. Instead, they’re negotiated, illiquid transactions that
              reward investors with higher yields for committing capital for a
              set period. This blend of stability, security, and attractive
              returns has made private credit one of the fastest-growing
              alternatives—perfect for those seeking diversification beyond
              stocks and traditional bonds.
            </p>
          </Reveal>

          <Reveal>
            <p className="mt-3 text-sm">
              Global Growth of Private Credit (AUM in $ Billions)
            </p>
          </Reveal>

          <Reveal>
            <img src={yieldGraph} alt="Yield Graph" className="my-10 w-full" />
          </Reveal>
          <Reveal>
            <img src={graph2} alt="Yield Graph" className="my-10 w-full" />
          </Reveal>
        </div>

        {/* Fund at a Glance */}
        <div id="FundGlance" className="lg:mt-28 mt-16">
          <Reveal>
            <h1 className="lg:text-3xl text-xl">Our Fund at a Glance</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-sm">
              Our Private Credit Fund provides short-term, real estate-backed
              financing for fix-and-flip projects. By combining speed,
              technology, flexibility, and rigorous underwriting, we aim to
              deliver stable, attractive returns while prioritizing the
              protection of investor capital.
            </p>
          </Reveal>

          <div className="mt-10 relative">
            <img src={grid} alt="Grid" className="w-full" />
            {/* Large Device */}
            <div className="md:block hidden">
              {/* Target Return */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-5 left-5 z-10"
              >
                <img src={invest} className="w-full" alt="Invest" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Target Investor Return 10% + annually
                </p>
              </motion.div>
              {/* Minimum Investor */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-21 right-5 z-10"
              >
                <img src={dollar} className="w-full" alt="Dollar" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Minimum Investment $50,000
                </p>
              </motion.div>

              {/* Regulation Type */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-52 left-5 z-10"
              >
                <img src={hammer} className="w-full" alt="Regulation" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Regulation Type Reg D 506(b), 3(c)(1)
                </p>
              </motion.div>

              {/* First Position */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-67 right-5 z-10"
              >
                <img src={building} className="w-full" alt="Property" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  First Position Line on Real Property
                </p>
              </motion.div>

              {/* Lock Up */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-98 left-5 z-10"
              >
                <img src={lockUp2} className="w-full" alt="12 Month" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Lock Up Period 12 Months
                </p>
              </motion.div>
            </div>

            {/* Small Device */}
            <div className="md:hidden grid grid-cols-2 gap-x-4 absolute top-0 space-y-5">
              {/* Target Return */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-5 left-5 z-10"
              >
                <img src={invest} className="w-full" alt="Invest" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Target Investor Return 10% + annually
                </p>
              </motion.div>
              {/* Minimum Investor */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-21 right-5 z-10"
              >
                <img src={dollar} className="w-full" alt="Dollar" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Minimum Investment $50,000
                </p>
              </motion.div>

              {/* Regulation Type */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-52 left-5 z-10"
              >
                <img src={hammer} className="w-full" alt="Regulation" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Regulation Type Reg D 506(b), 3(c)(1)
                </p>
              </motion.div>

              {/* First Position */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-67 right-5 z-10"
              >
                <img src={building} className="w-full" alt="Property" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  First Position Line on Real Property
                </p>
              </motion.div>

              {/* Lock Up */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.6,
                }}
                className="md:w-[265px] w-[150px] md:absolute top-98 left-5 z-10"
              >
                <img src={lockUp2} className="w-full" alt="12 Month" />
                <p className={"text-xs md:text[15px] md:mt-0 mt-1"}>
                  Lock Up Period 12 Months
                </p>
              </motion.div>
            </div>
          </div>

          {/* <div className="my-6 lg:grid md:grid-cols-2 gap-5">
            {ourGlance.map((glance) => (
              <Reveal key={glance.id}>
                <div className="lg:my-0 my-5">
                  <img src={glance.img} alt={glance.title} />
                  <p className="mt-2 lg:mt-0">{glance.title}</p>
                </div>
              </Reveal>
            ))}
          </div> */}
        </div>
      </div>

      {/* Right Sidebar Links */}
      <div className="lg:block hidden col-span-2 relative">
        {/* Toggle Button (always visible) */}
        <div
          onClick={toggleSidebarLink}
          className="absolute top-0 -right-8 cursor-pointer z-20 bg-primary/50 hover:bg-primary transition-all duration-200 h-10 mt-5 w-5 flex items-center"
        >
          {hideSidebarLink ? <ChevronLeft /> : <ChevronRight />}
        </div>

        {/* Sidebar Links (hideable content) */}
        <div
          className={`relative transition-all duration-300 ease-in-out ${
            hideSidebarLink
              ? "translate-x-full opacity-0 invisible"
              : "translate-x-0 opacity-100 visible"
          }`}
        >
          <div className="sticky top-28 flex flex-col space-y-2">
            {[
              { id: "PrivateCredit", label: "What is Private Credit?" },
              { id: "WhatMakesItPrivate", label: "What makes it private?" },
              { id: "FundGlance", label: "Our Fund at a Glance" },
            ].map((link) => (
              <Reveal key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm cursor-pointer ${
                    currentSection === link.id ? "font-bold" : "text-zinc-500"
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
  );
}
