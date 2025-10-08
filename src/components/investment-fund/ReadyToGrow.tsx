import { Link } from "@tanstack/react-router";
import Reveal from "../Revel";
import { ArrowUpRight } from "lucide-react";

const ReadyToGrow = () => {
  return (
    <div className="bg-primary text-center text-white p-12">
      <Reveal>
        <h1 className="lg:text-3xl text-xl">
          Ready to Grow with Nevo Capital?
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-8">
          Explore how the Nevo Capital Private Credit Fund can help you
          diversify with predictable, real estate-backed returns. Invest with
          confidence today—and grow with our expanding platform of
          opportunities.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex justify-center">
          <Link
            to="/invest-with-us"
            className="text-primary rounded py-2 px-10 flex items-center bg-white"
          >
            Invest With Us <ArrowUpRight className="ms-5" size={19} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default ReadyToGrow;
