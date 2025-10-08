import Reveal from "../Revel";
import { motion } from "framer-motion";
import { grid, invest, dollar, building, hammer, lockUp2 } from "@/assets";

const FundAtGlance = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">Our Fund at a Glance</h1>
      </Reveal>
      <Reveal>
        <p className="mt-4 text-zinc-800">
          The Nevo Capital Private Credit Fund provides short-term, real
          estate-backed financing for fix-and-flip projects. By combining speed,
          technology, flexibility, and rigorous underwriting, we aim to deliver
          stable, attractive returns while prioritizing the protection of
          investor capital.
        </p>
      </Reveal>

      <div className="mt-10 relative">
        <img src={grid} alt="Grid" className="w-full" />
        {/* Large Device */}
        <div className="md:block hidden">
          {/* Target Return */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.6,
            }}
            className="md:w-[265px] w-[150px] md:absolute top-5 left-5 z-10"
          >
            <img src={invest} className="w-full" alt="Invest" />
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 0.8,
                delay: 0.3,
              }}
              className={"text-xs md:text-[16px] md:mt-2 mt-1 font-medium"}
            >
              Target Investor Return 10% + annually
            </motion.p>
          </motion.div>

          {/* Minimum Investor */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.6,
            }}
            className="md:w-[265px] w-[150px] md:absolute top-21 right-5 z-10"
          >
            <img src={dollar} className="w-full" alt="Dollar" />
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 0.8,
                delay: 0.3,
              }}
              className={"text-xs md:text-[16px] md:mt-2 mt-1 font-medium"}
            >
              Minimum Investment $50,000
            </motion.p>
          </motion.div>

          {/* Regulation Type */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.6,
            }}
            className="md:w-[265px] w-[150px] md:absolute top-52 left-5 z-10"
          >
            <img src={hammer} className="w-full" alt="Regulation" />
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 0.8,
                delay: 0.3,
              }}
              className={"text-xs md:text-[16px] md:mt-2 mt-1 font-medium"}
            >
              Regulation Type Reg D 506(b), 3(c)(1)
            </motion.p>
          </motion.div>

          {/* First Position */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.6,
            }}
            className="md:w-[265px] w-[150px] md:absolute top-67 right-5 z-10"
          >
            <img src={building} className="w-full" alt="Property" />
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 0.8,
                delay: 0.3,
              }}
              className={"text-xs md:text-[16px] md:mt-2 mt-1 font-medium"}
            >
              First Position Line on Real Property
            </motion.p>
          </motion.div>

          {/* Lock Up */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.6,
            }}
            className="md:w-[265px] w-[150px] md:absolute top-98 left-5 z-10"
          >
            <img src={lockUp2} className="w-full" alt="12 Month" />
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 0.8,
                delay: 0.3,
              }}
              className={"text-xs md:text-[16px] md:mt-2 mt-1 font-medium"}
            >
              Lock Up Period 12 Months
            </motion.p>
          </motion.div>
        </div>

        {/* Small Device */}
        <div className="absolute top-0 !overflow-hidden">
          <div className="md:hidden grid grid-cols-2 gap-x-4 gap-y-5 px-4 mt-4">
            {/* Target Return */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.6,
              }}
              className="w-full max-w-[150px]"
            >
              <img src={invest} className="w-full" alt="Invest" />
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="text-xs mt-1 font-medium"
              >
                Target Investor Return 10% + annually
              </motion.p>
            </motion.div>

            {/* Minimum Investor */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.6,
              }}
              className="w-full max-w-[150px]"
            >
              <img src={dollar} className="w-full" alt="Dollar" />
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="text-xs mt-1 font-medium"
              >
                Minimum Investment $50,000
              </motion.p>
            </motion.div>

            {/* Regulation Type */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.6,
              }}
              className="w-full max-w-[150px]"
            >
              <img src={hammer} className="w-full" alt="Regulation" />
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="text-xs mt-1 font-medium"
              >
                Regulation Type Reg D 506(b), 3(c)(1)
              </motion.p>
            </motion.div>

            {/* First Position */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.6,
              }}
              className="w-full max-w-[150px]"
            >
              <img src={building} className="w-full" alt="Property" />
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-1 font-medium"
              >
                First Position Line on Real Property
              </motion.p>
            </motion.div>

            {/* Lock Up */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.6,
              }}
              className="w-full max-w-[150px]"
            >
              <img src={lockUp2} className="w-full" alt="12 Month" />
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="text-xs mt-1 font-medium"
              >
                Lock Up Period 12 Months
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundAtGlance;
