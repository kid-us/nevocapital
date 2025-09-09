import { BadgeCheck } from "lucide-react";
import GlanceGridLarge from "./GlanceLarge";
import GlanceGridMobile from "./GlanceSmall";
import { motion, type Variants } from "motion/react";
import Reveal from "../Revel";

interface Badges {
  id: number;
  label: string;
  state?: "" | "private-fund" | "semi-private" | "real-state";
}

const badges: Badges[] = [
  { id: 1, label: "Higher Yields" },
  { id: 2, label: "Stable & Predictable" },
  { id: 3, label: "Direct Lending" },
];

const PrivateCreditFund = () => {
  const badgeVariants: Variants = {
    hidden: { rotate: 0 },
    visible: (i: number) => ({
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" as any, delay: i * 0.3 },
    }),
  };

  const labelVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any,
        delay: i * 0.3 + 0.6,
      },
    }),
  };

  return (
    <>
      {/* What is Private Credit */}
      <Reveal>
        <div className="text-center max-w-3xl mt-40">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold playfair-display">
            What is Private Credit?
          </h1>
          <div className="relative mt-2">
            <hr className="border-2 border-cta" />
          </div>
          <p className="italic mt-2 text-sm sm:text-base">
            A powerful asset class designed for predictable returns
          </p>
        </div>
      </Reveal>

      {/* Private credit detail */}
      <Reveal>
        <div className="mt-16 w-full max-w-6xl">
          <div className="lg:grid grid-cols-3 items-center gap-x-10 lg:gap-x-20">
            <p className="lg:col-span-2 text-base sm:text-lg md:text-xl leading-relaxed">
              Private credit—sometimes called private lending—is built on a
              simple idea: lending directly to borrowers for a fixed return.
              Unlike equities that swing with markets, private credit focuses on
              steady, predictable income—typically through interest or preferred
              returns—without stock market volatility
            </p>
            <div className="mt-6 lg:mt-0 space-y-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  className="flex items-center space-x-4"
                  initial="hidden"
                  animate="visible"
                >
                  {/* Rotate Badge */}
                  <motion.div variants={badgeVariants} custom={index}>
                    <BadgeCheck className="text-cta size-8 sm:size-10" />
                  </motion.div>

                  {/* Slide Label after rotation */}
                  <motion.p
                    variants={labelVariants}
                    custom={index}
                    className="rounded border bg-footer text-cta w-full text-center h-9 flex items-center justify-center text-sm sm:text-base"
                  >
                    {badge.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/*  What makes it private? */}
      <Reveal>
        <div className="mt-60 text-center max-w-5xl">
          <h1 className="text-2xl md:text-5xl font-semibold playfair-display">
            What makes it private?
          </h1>
          <div className="flex items-center justify-center">
            <div className="relative mt-2 w-full max-w-3xl">
              <hr className="border-2 border-cta" />
            </div>
          </div>
          <p className="italic mt-10 text-sm sm:text-base md:text-lg leading-relaxed">
            Unlike public bonds, these opportunities aren’t traded on open
            markets. Instead, they’re negotiated, illiquid transactions that
            reward investors with higher yields for committing capital for a set
            period. This blend of stability, security, and attractive returns
            has made private credit one of the fastest-growing
            alternatives—perfect for those seeking diversification beyond stocks
            and traditional bonds.
          </p>
        </div>
      </Reveal>

      {/* Our Glance */}
      <Reveal>
        <>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mt-60 w-full max-w-7xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:w-72 font-semibold text-center md:text-left playfair-display">
              Our Fund at a Glance
            </h1>
          </div>

          <p className="text-base text-start sm:text-lg mt-10 lg:me-96 leading-relaxed ">
            Our Private Credit Fund provides short-term, real estate-backed
            financing for fix-and-flip projects. By combining speed, technology,
            flexibility, and rigorous underwriting, we aim to deliver stable,
            attractive returns while prioritizing the protection of investor
            capital.
          </p>
        </>
      </Reveal>

      <div className="flex justify-center items-center w-full mt-60 mb-10 ">
        <GlanceGridLarge />
        <GlanceGridMobile />
      </div>
    </>
  );
};

export default PrivateCreditFund;
