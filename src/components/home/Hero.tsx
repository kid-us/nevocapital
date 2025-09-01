import { hero } from "@/assets";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <div className="lg:h-[700px] h-[100dvh]">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="border-4 border-cta rounded-full p-10">
          <img src={hero} alt="Nevo Capital" className="w-72" />
        </div>

        <hr className="border2 border-cta h-[1px] bg-cta opacity-20 mt-20 w-full" />

        <div className="flex justify-between mt-10 gap-x-28">
          <Link to="/contact">Contact Us</Link>
          <Link to="/invest-with-us">Investor Portal</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
