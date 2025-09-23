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
          <h4 className="font-semibold mb-3 text-white text-lg">Disclaimer</h4>
          <X
            onClick={() => setDisclaimerOpen(false)}
            className="text-white cursor-pointer"
          />
        </div>
        <p className="text-xs text-zinc-300">
          The information presented in this Website is provided for general
          informational purposes only and this Website does not constitute an
          offer, solicitation or recommendation to sell or an offer to buy any
          securities, investment products or investment advisory services. The
          information in this Website is not intended to provide and should not
          be relied upon for, accounting, legal, tax advice or investment
          recommendations. Each user is encouraged to consult with its own tax,
          legal, accounting, financial and/or other advisors regarding the
          information and matters contained in this Website. Revere does not
          represent that any securities, financial instruments, products or
          services are suitable or appropriate for all clients or investors.
          Decisions based on information contained on this Website are the sole
          responsibility of the user.
        </p>
        <div className="flex items-center text-white mt-5">
          <p className="w-2 h-2 bg-white rounded-full" />
          <p className="font-semibold text-xs ms-2">
            PAST PERFORMANCE IS NOT NECESSARILY A RELIABLE INDICATOR OF FUTURE
            PERFORMANCE. INVESTMENTS ARE SUBJECT TO A WIDE VARIETY OF RISKS AND
            CONSIDERATIONS.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-[93dvh] -mb-6 overflow-hidden">
        {/* Hero BG */}
        <HeroBg />

        <div className="flex flex-col mb-4">
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
              to="/"
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
