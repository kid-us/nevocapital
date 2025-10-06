import { Link } from "@tanstack/react-router";
import Reveal from "../Revel";
import { ArrowUpRight } from "lucide-react";

const ReadyToGrow = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">
          Ready to Grow with Nevo Capital?
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-sm">
          Explore how the Nevo Capital Private Credit Fund can help you
          diversify with predictable, real estate-backed returns. Invest with
          confidence today—and grow with our expanding platform of
          opportunities.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex ">
          <Link
            to="/invest-with-us"
            className="bg-primary rounded py-2 px-10 text-sm flex items-center"
          >
            Invest With Us <ArrowUpRight className="ms-5" size={19} />
          </Link>
        </div>
      </Reveal>
    </>
  );
};

export default ReadyToGrow;
