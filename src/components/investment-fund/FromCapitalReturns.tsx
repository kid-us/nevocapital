import { five, four, fromReturn, one, three, two } from "@/assets";
import Reveal from "../Revel";
import { motion } from "framer-motion";

const FromCapitalReturns = () => {
  return (
    <div className="relative lg:h-[880px]">
      <Reveal>
        <h1 className="lg:text-3xl text-xl">From Capital to Returns</h1>
      </Reveal>

      <Reveal>
        <p className="mt-4 text-zinc-800">
          A clear, repeatable process designed to protect investor capital and
          generate steady returns.
        </p>
      </Reveal>

      <Reveal>
        <p className="mt-2">Investment Cycle</p>
      </Reveal>

      <div className="relative lg:flex hidden flex-col items-center mt-30">
        {/* 1 - Slide down */}
        <motion.div
          className="absolute"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[4rem] left-[15.5rem] w-40">
            <h1 className="font-semibold text-xl leading-5">
              1 - Investor Commitment
            </h1>
            <p className="text-xs mt-2">
              Investors commit capital to the fund.
            </p>
          </div>
          <img src={one} alt="One" />
        </motion.div>

        {/* 5 - Slide from left */}
        <motion.div
          className="absolute"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[13rem] left-[2rem] w-40">
            <h1 className="font-semibold text-xl leading-5">
              5 - Investor Payouts
            </h1>
            <p className="text-xs mt-2">
              Investors receive their distributions or keep their initial
              investment for future growth.
            </p>
          </div>
          <img src={five} alt="Five" />
        </motion.div>

        {/* 4 - Slide up */}
        <motion.div
          className="absolute"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[25rem] left-[7rem] w-40">
            <h1 className="font-semibold text-xl leading-5">
              4 - Loan Repayment & Returns
            </h1>
            <p className="text-xs mt-2">
              Upon resale, the loan is repaid with interest and fees, generating
              returns for the fund.
            </p>
          </div>
          <img src={four} alt="Four" />
        </motion.div>

        {/* 3 - Slide up */}
        <motion.div
          className="absolute"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[26.5rem] left-[23rem] w-40">
            <h1 className="font-semibold text-xl leading-5">
              3 - Project Execution
            </h1>
            <p className="text-xs mt-2">
              The real estate investors acquire, renovate, and sell properties.
            </p>
          </div>
          <img src={three} alt="Three" />
        </motion.div>

        {/* 2 - Slide from right */}
        <motion.div
          className="absolute"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-[13rem] left-[27rem] w-40">
            <h1 className="font-semibold text-xl leading-5">
              2 - Capital Deployment
            </h1>
            <p className="text-xs mt-2">
              The fund lends capital to real estate investors for fix-and-flip
              and wholesale projects.
            </p>
          </div>
          <img src={two} alt="Two" />
        </motion.div>
      </div>

      <Reveal>
        <img src={fromReturn} className="lg:hidden mt-20" />
      </Reveal>
    </div>
  );
};

export default FromCapitalReturns;

// <div className="grid grid-cols-7 mt-16">
//   <div className="relative md:flex hidden items-center">
//     <div className="absolute left-8">
//       <Reveal>
//         <img src={longLineArrow} alt="Line Arrow" />
//       </Reveal>
//     </div>
//   </div>

//   <div className="col-span-6">
//     <div className="grid md:grid-cols-4 gap-x-10 gap-y-5">
//       <div className="col-span-2 md:w-[200px] w-full">
//         <Reveal>
//           <div className="space-y-2">
//             <h1 className="md:text-2xl text-xl font-semibold">
//               1 - Investor Commitment
//             </h1>
//             <p>Investors commit capital to the fund.</p>
//           </div>
//         </Reveal>
//       </div>

//       {/* Right Arrow */}
//       <div className="relative col-span-2 md:flex hidden items-center">
//         <div className="absolute top-20 -left-20">
//           <Reveal>
//             <img src={rightArrow} alt="Right Arrow" />
//           </Reveal>
//         </div>
//       </div>

//       {/* Left Arrow */}
//       <div className="relative col-span-2 md:flex hidden items-center">
//         <div className="absolute top-28 right-10">
//           <Reveal>
//             <img src={leftArrow} alt="Left Arrow" />
//           </Reveal>
//         </div>
//       </div>

//       <div className="col-span-2 md:w-[200px] w-full">
//         <Reveal>
//           <div className="space-y-2">
//             <h1 className="md:text-2xl text-xl font-semibold">
//               2 - Capital Deployment
//             </h1>
//             <p>
//               The fund lends capital to real estate investors for
//               fix-and-flip and wholesale projects.
//             </p>
//           </div>
//         </Reveal>
//       </div>

//       <div className="col-span-2 md:w-[200px] w-full">
//         <Reveal>
//           <div className="space-y-2">
//             <h1 className="md:text-2xl text-xl font-semibold">
//               3 - Project Execution
//             </h1>
//             <p>
//               The real estate investors acquire, renovate, and sell
//               properties.
//             </p>
//           </div>
//         </Reveal>
//       </div>

//       {/* Right Arrow */}
//       <div className="relative col-span-2 md:flex hidden items-center">
//         <div className="absolute top-20 -left-20">
//           <Reveal>
//             <img src={rightArrow} alt="Right Arrow" />
//           </Reveal>
//         </div>
//       </div>

//       {/* Left Arrow */}
//       <div className="relative col-span-2 md:flex hidden items-center">
//         <div className="absolute top-24 right-10">
//           <Reveal>
//             <img src={leftArrow} alt="Left Arrow" />
//           </Reveal>
//         </div>
//       </div>

//       <div className="col-span-2 md:w-[200px] w-full">
//         <Reveal>
//           <div className="space-y-2">
//             <h1 className="md:text-2xl text-xl font-semibold">
//               4 - Project Execution
//             </h1>
//             <p>
//               The real estate investors acquire, renovate, and sell
//               properties.
//             </p>
//           </div>
//         </Reveal>
//       </div>

//       <div className="col-span-2 md:w-[200px] w-full">
//         <Reveal>
//           <div className="space-y-2">
//             <h1 className="md:text-2xl text-xl font-semibold">
//               5 - Investor Payouts
//             </h1>
//             <p>
//               The real estate investors acquire, renovate, and sell
//               properties.
//             </p>
//           </div>
//         </Reveal>
//       </div>
//     </div>
//   </div>
// </div>
