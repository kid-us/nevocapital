import { hero } from "@/assets";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="h-[80dvh] flex flex-col items-center justify-center">
        <div className="border-4 border-cta rounded-full p-10">
          <img src={hero} alt="Nevo Capital" className="w-96" />
        </div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Half circle background */}
        <div className="w-full lg:h-[320px] h-[157px] border-t-2 border-cta rounded-t-full flex justify-center items-center">
          <div className="flex justify-between h-full items-center md:space-x-10 space-x-4">
            <Link
              to="/contact"
              className="text-white font-semibold hover:underline text-xs md:text-[16px]"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="text-white font-semibold hover:underline text-xs md:text-[16px]"
            >
              Discover
            </Link>
            <Link
              to="/invest-with-us"
              className="text-white font-semibold hover:underline text-xs md:text-[16px]"
            >
              Investor Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
