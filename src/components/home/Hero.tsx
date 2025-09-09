import { hero } from "@/assets";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen mt-10 md:mt-16">
      <div className="h-[70dvh] sm:h-[80dvh] flex flex-col items-center justify-center relative">
        <motion.div
          className="absolute rounded-full w-[60vw] sm:w-[50vw] md:w-[436px] h-[60vw] sm:h-[50vw] md:h-[436px]"
          style={{
            border: "4px solid",
            borderImage:
              "linear-gradient(45deg, transparent, #ba9a56, transparent) 1",
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="border border-cta rounded-full p-4 sm:p-6 md:p-10 z-10"
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
        >
          <img
            src={hero}
            alt="Nevo Capital"
            className="w-[60vw] sm:w-[40vw] md:w-96 max-w-[400px]"
          />
        </motion.div>
      </div>

      <div className="md:relative absolute bottom-0 w-full max-w-2xl mx-auto px-4 sm:px-6">
        <div className="w-full h-[150px] sm:h-[180px] md:h-[300px] border-t-2 border-cta rounded-t-full flex flex-col justify-center items-center">
          <div className="flex justify-between space-x-2 sm:space-x-6 md:space-x-10 mt-4 sm:mt-6 md:mt-8">
            <Link
              to="/contact"
              className="text-white font-semibold hover:underline text-[10px] sm:text-sm md:text-[16px]"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="text-white font-semibold hover:underline text-[10px] sm:text-sm md:text-[16px]"
            >
              Discover
            </Link>
            <Link
              to="/invest-with-us"
              className="text-white font-semibold hover:underline text-[10px] sm:text-sm md:text-[16px]"
            >
              Investor Portal
            </Link>
          </div>
          <p className="text-[8px] sm:text-[10px] md:text-[13px] mt-3 sm:mt-5 md:mt-10 text-zinc-400">
            © 2025 Nevo Capital. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
