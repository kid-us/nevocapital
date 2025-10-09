import {
  alex,
  comapnyGraph,
  david,
  jochai,
  lines,
  monitor,
  target,
  verified,
} from "@/assets";
import ReadyToGrow from "@/components/investment-fund/ReadyToGrow";
import Reveal from "@/components/Revel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/company/")({
  component: companyPage,
  head: () => ({
    meta: [{ title: "Company" }],
  }),
});

interface TheTeam {
  id: number;
  name: string;
  position: string;
  path: string;
  img: string;
}

export interface TOC {
  id: string;
  label: string;
}

// Teams
const teams: TheTeam[] = [
  {
    id: 1,
    name: "Jochai Mor",
    position: "Managing Partner & CEO",
    path: "/jochai",
    img: jochai,
  },
  {
    id: 2,
    name: "David Sher",
    position: "Managing Partner & CFO",
    path: "/david",
    img: david,
  },
  {
    id: 3,
    name: "Alex Failaev",
    position: "Managing Partner & COO",
    path: "/alex",
    img: alex,
  },
];

// Why Partner with Us
const whyPartnerWithUs: {
  id: number;
  bg: string;
  title: string;
  icon: string;
  desc: string;
}[] = [
  {
    id: 1,
    bg: "#E0B84D",
    icon: verified,
    title: "Institutional Quality",
    desc: "Governance, compliance, and transparency guide every investment decision.",
  },
  {
    id: 2,
    bg: "#E0B84DCC",

    icon: target,
    title: "Specialized Expertise",
    desc: "Deep knowledge in real estate and private markets, applied with disciplined risk management.",
  },
  {
    id: 3,
    bg: "#E0B84D99",
    icon: lines,
    title: "Aligned Interests",
    desc: "We invest our own capital alongside yours—true partnership in every strategy.",
  },
  {
    id: 4,
    bg: "#E0B84D66",
    icon: monitor,
    title: "Technology-Enabled Advantage",
    desc: " From underwriting to monitoring, we integrate advanced technology to enhance speed, precision, and transparency across every stage of the investment process.",
  },
];

const toc: TOC[] = [
  {
    id: "BuildingPlatform",
    label: "Building a Platform for Alternative Investment Excellence",
  },
  { id: "WhoWeAre", label: "A Boutique Platform with Institutional Standards" },
  { id: "MeetTheTeam", label: "Meet the Team" },
  { id: "OurVision", label: "Strategic Growth, Built on Principles" },
  { id: "WhyPartnerWithUs", label: "Why Partner With Us" },
  { id: "ReadyToGrow", label: "Ready to Grow with Nevo Capital?" },
];

function companyPage() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const [currentSection, setCurrentSection] =
    useState<string>("BuildingPlatform");

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
    <div className="lg:grid lg:grid-cols-12 gap-x-5 lg:max-w-5xl max-w-3xl mx-auto lg:mt-24 mt-16 lg:px-0 px-6">
      <div className="lg:col-span-9 lg:px-8">
        <div>
          <Reveal>
            <h1 id="BuildingPlatform" className="lg:text-3xl text-xl">
              Building a Platform for Alternative Investment Excellence
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-7 text-zinc-800">
              Nevo Capital is a fund management firm focused on delivering
              institutional-quality opportunities in private markets—starting
              with our flagship Private Credit Fund.
            </p>
          </Reveal>

          <Reveal>
            <img src={comapnyGraph} className="my-16" alt="Company" />
          </Reveal>

          {/* A Boutique Platform with Institutional Standards */}
          <div id="WhoWeAre" className="pt-16">
            <Reveal>
              <h1 className="lg:text-3xl text-xl">
                A Boutique Platform with Institutional Standards
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-800">
                Nevo Capital is a boutique investment management firm offering
                carefully structured opportunities in private markets. We serve
                accredited and non-accredited investors as well as family
                offices, combining rigorous underwriting, disciplined risk
                management, and a forward-looking strategy. By embedding
                technology into every stage of our process—from deal sourcing to
                monitoring—we ensure efficiency, precision, and transparency.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Meet the Team */}
        <div id="MeetTheTeam" className="lg:pt-44 pt-20">
          <Reveal>
            <h1 className="lg:text-3xl text-xl">Meet the Team</h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-zinc-800">
              Our leadership team combines expertise in real estate, private
              credit, and investment management. Each member brings hands-on
              execution experience and a shared commitment to investor-first
              principles. Photos of each member~
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
            {teams.map((team) => (
              <Reveal key={team.id}>
                <div className="group relative overflow-hidden cursor-pointer rounded-lg">
                  {/* Image */}
                  <img
                    src={team.img}
                    alt={team.name}
                    className="w-full md:h-auto h-78 transition-all duration-500 ease-in-out group-hover:blur-sm group-hover:bg-black rounded-lg object-cover"
                  />

                  {/* Overlay Learn More */}
                  <Link
                    to="/company/$companyId"
                    params={{
                      companyId: String(team.name.split(" ")[0]).toLowerCase(),
                    }}
                    className="absolute inset-0 md:flex hidden items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-white font-bold space-x-2"
                  >
                    <p>Learn More</p>
                    <ArrowUpRight
                      size={20}
                      className="transform transition-transform duration-500 group-hover:rotate-45"
                    />
                  </Link>

                  {/* Name and Position below the image */}
                  <div className="mt-4">
                    <p className="font-bold text-lg">{team.name}</p>
                    <p className="text-zinc-800 mb-3">{team.position}</p>
                    <Link
                      to="/company/$companyId"
                      className="md:hidden flex items-center space-x-2 transition-all font-medium"
                      params={{
                        companyId: String(
                          team.name.split(" ")[0]
                        ).toLowerCase(),
                      }}
                    >
                      <p>Learn More</p>
                      <ArrowUpRight
                        size={20}
                        className="transform transition-transform duration-500 group-hover:rotate-45"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Our Vision */}
        <div id="OurVision" className="lg:pt-44 pt-20">
          <Reveal>
            <h1 className="lg:text-3xl text-xl">
              Strategic Growth, Built on Principles
            </h1>
          </Reveal>
          <Reveal>
            <p className=" text-zinc-800 mt-3">
              Strategic Growth, Built on Principles
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-4  text-zinc-800">
              Nevo Capital was founded with a simple vision: to make
              institutional-quality private market investments accessible to
              investors seeking stability, growth, and diversification. We focus
              first on our Private Credit Fund, while building a platform
              designed to expand into long-term real estate growth and,
              ultimately, a broader spectrum of alternative strategies. Our goal
              is long-term value creation grounded in discipline, transparency,
              and innovation.
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
                    <p className="">Today</p>
                  </Reveal>
                  <Reveal>
                    <div className="lg:block hidden h-6 border-l"></div>
                  </Reveal>
                  <Reveal>
                    <p className="lg:mt-3 mt-1 text-sm font-medium">
                      Private Credit Fund (short-term, real estate-backed
                      lending)
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
                    <p className="">Near Future</p>
                  </Reveal>
                  <Reveal>
                    <div className="lg:block hidden h-6 border-l"></div>
                  </Reveal>
                  <Reveal>
                    <p className="lg:mt-3 mt-1 text-sm font-medium">
                      Core Real Estate Fund (long-term, income-producing and
                      growth-oriented properties)
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
                    <p className="">Long Run</p>
                  </Reveal>
                  <Reveal>
                    <div className="lg:block hidden h-6 border-l"></div>
                  </Reveal>
                  <Reveal>
                    <p className="lg:mt-3 mt-1 text-sm font-medium">
                      Diversified Alternatives Platform (multi-strategy
                      alternative platform for portfolio diversification)
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className="absolute left-0 top-5 my-3 lg:w-full lg:h-[2px] w-[2px] h-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
            </div>
          </div>
        </div>

        {/* Why Partner with us */}
        <div id="WhyPartnerWithUs" className="lg:pt-44 pt-20 mb-10 relative">
          <h1 className="lg:text-3xl text-xl mb-4">Why Partner With Us</h1>

          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-5 mt-8 relative">
            {whyPartnerWithUs.map((why, index) => (
              <div
                key={why.id}
                className="shadow-lg relative"
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div
                  style={{ backgroundColor: why.bg }}
                  className="flex items-center justify-center p-8 rounded transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <img src={why.icon} alt={why.title} />
                </div>
                <p className="mt-2 font-medium p-3 text-center">{why.title}</p>
              </div>
            ))}

            {/* Single Hovered Section Description */}
            <AnimatePresence>
              {hoveredSection !== null && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-0 lg:-bottom-24 bottom-0 w-full lg:max-w-[calc(100%+2rem)] bg-primary p-5 rounded-lg text-white shadow-lg z-10"
                >
                  <p className="font-medium text-sm sm:text-base lg:text-lg text-center lg:text-left">
                    {whyPartnerWithUs[hoveredSection].desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Ready to Grow */}
        <div id="ReadyToGrow" className="lg:pt-44 pt-20 mb-10">
          <ReadyToGrow />
        </div>
      </div>

      {/* Right Sidebar Links */}
      <div className="lg:block hidden col-span-3 relative">
        <div className="sticky top-60">
          <div
            className={`relative transition-all duration-300 ease-in-out translate-x-0 opacity-100 visible`}
          >
            <div className="flex flex-col space-y-2">
              {toc.map((t) => (
                <Reveal key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={` cursor-pointer text-sm ${
                      currentSection === t.id ? "font-medium" : "text-zinc-700"
                    }`}
                  >
                    {t.label}
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
