import { hero } from "@/assets";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <div className="h-screen mt-32">
      <div className="h-[80dvh] flex flex-col items-center justify-center">
        <div className="border border-cta rounded-full p-10">
          <img src={hero} alt="Nevo Capital" className="w-96" />
        </div>
      </div>

      <div className="relative w-full max-w-xl mx-auto">
        {/* Half circle background */}
        <div className="w-full lg:h-[280px] h-[157px] border-t-2 border-cta rounded-t-full flex flex-col justify-center items-center">
          <div className="flex justify-between md:space-x-10 space-x-4 mt-8">
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
          <p className="lg:text-[13px] text-[10px] lg:mt-10 mt-5 text-zinc-400">
            © 2025 Nevo Capital. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
