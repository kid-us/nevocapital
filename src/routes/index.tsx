import { Button } from "@/components/ui/button";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { hero } from "@/assets";
import HeroBg from "@/components/HeroBg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { name: "description" },
      { content: "Nevo Capital Team members" },
      { title: "Nevo Capital - Company" },
    ],
  }),
});

function RouteComponent() {
  const navigate = useNavigate();
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const date = new Date();

  return (
    <>
      {/* Disclaimer Modal */}
      <div
        className={`fixed bottom-0 w-full left-0 bg-black py-5 lg:px-36 p-10 z-10 transition-transform duration-300 ease-in-out ${
          disclaimerOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between">
          <h4 className="font-semibold mb-3 text-white text-lg">
            General Disclaimer
          </h4>
          <X
            onClick={() => setDisclaimerOpen(false)}
            className="text-white cursor-pointer"
          />
        </div>
        <p className="text-xs text-zinc-300 mb-1">
          The information provided on this website, including any links to other
          websites, is for general information purposes only and is neither
          investment advice nor a recommendation that a particular product or
          service is suitable for any particular investor. Therefore, nothing
          contained on this website or in any linked website should ever be
          relied upon by anyone in making any investment-related decision.
        </p>
        <p className="text-xs text-zinc-300">
          Investing generally, particularly in real estate, is speculative and
          involves significant risk. For more information about certain of the
          material risks and limitations associated with Heitman’s investment
          advisory products, strategies and services, please see the current
          Form ADV Part 2A brochures for Heitman’s registered advisory firm
          entities, which are available on the SEC’s Investment Adviser Public
          Disclosure website at{" "}
          <a href="https://adviserinfo.sec.gov" className="text-blue-400">
            https://adviserinfo.sec.gov.
          </a>{" "}
          Investors should consider their investment objectives, and should seek
          their own independent advice in relation to any investment, financial,
          legal, tax, accounting or regulatory risks and evaluate their own risk
          tolerance before investing.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-[93dvh] -mb-6 overflow-hidden">
        {/* Hero BG */}
        <HeroBg />

        <div className="flex flex-col mb-10">
          <img src={hero} className="lg:w-[350px] w-[300px]" />
        </div>

        <Button
          onClick={() => navigate({ to: "/investment-funds" })}
          className="w-40 group mb-20 text-sm"
        >
          Learn More{" "}
          <ArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
        </Button>

        <div className="absolute -bottom-[28rem] w-[620px] h-[620px] overflow-hidden rounded-full border-t border-l border-r border-primary">
          <div className="flex justify-center text-black mt-20 space-x-8">
            <Link
              to="/company"
              className="font-medium text-sm hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <p
              onClick={() => setDisclaimerOpen(true)}
              className="font-medium text-sm hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              Disclaimer
            </p>
            <Link
              to="/invest-with-us"
              className="font-medium text-sm hover:text-primary transition-colors duration-200"
            >
              Investor Portal
            </Link>
          </div>
          <p className="text-center text-xs text-zinc-500 mt-5">
            © {date.getFullYear()} Nevo Capital. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
