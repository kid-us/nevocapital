import { hero, layer } from "@/assets";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="relative lg:h-[70dvh] md:h-[70dvh] h-[100dvh]">
      <img
        src={layer}
        alt="Layer"
        className="absolute md:-top-20 -top-10 overflow-hidden"
      />

      <div className="flex flex-col items-center justify-center h-full">
        <img src={hero} className="lg:w-[200px] w-[150px]" />
        <h1 className="lg:text-5xl md:text-4xl text-2xl mt-10">Coming Soon</h1>
        <p className="lg:text-xl text-sm mt-2 md:px-10 text-center">
          We are working hard to get this up and running
        </p>

        <div className="flex flex-col items-center justify-center lg:mt-28 mt-20 bg-[#E0B84D1A] lg:p-8 p-4 lg:mx-0 mx-5">
          <p className="lg:text-lg text-sm text-center">
            Feel free to explore other section until we make something about
            this page
          </p>

          <Link
            to="/"
            className="flex mt-4 font-semibold text-primary lg:text-lg"
          >
            <ArrowLeft className="me-3" /> Go Back{" "}
          </Link>
        </div>
      </div>

      <img
        src={layer}
        alt="Layer"
        className="absolute bottom-0 h-f overflow-hidden"
      />
    </div>
  );
};

export default ComingSoon;
