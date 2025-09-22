import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { hero } from "@/assets";
import HeroBg from "@/components/HeroBg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const date = new Date();

  return (
    <div className="relative flex flex-col items-center justify-center h-[93dvh] -mb-6 overflow-hidden">
      {/* Hero BG */}
      <HeroBg />

      <div className="flex flex-col mb-4">
        <img src={hero} className="w-[350px]" />
      </div>

      <Button className="w-40 group mb-20 text-sm">
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
          <Link
            to="/"
            className="font-medium text-sm hover:text-primary transition-colors duration-200"
          >
            Disclaimer
          </Link>
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
  );
}
