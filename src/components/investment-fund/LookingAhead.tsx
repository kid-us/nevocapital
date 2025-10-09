import Reveal from "../Revel";
import { motion } from "motion/react";

const LookingAhead = () => {
  return (
    <>
      <Reveal>
        <h1 className="lg:text-3xl text-xl">
          Looking Ahead: Expanding Opportunities
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-zinc-800">
          While the Nevo Capital Private Credit Fund is currently open, we are
          preparing additional funds to expand investor access. Our platform
          roadmap spans today’s short-term lending, tomorrow’s long-term real
          estate growth, and ultimately, diversified alternative
          strategies—offering options across the full spectrum of private
          markets.
        </p>
      </Reveal>

      <div className="flex w-full justify-center mt-20 relative">
        <motion.svg
          width="500"
          className="h-[390px] md:h-[550px]"
          viewBox="0 0 358 849"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Combined fill + stroke tree */}
          <motion.path
            d="M202 19.4998C202.8 12.2998 198.333 9.83309 196 9.49976C196.167 7.33309 197.9 2.89976 203.5 2.49976C209.1 2.09976 211.5 5.99976 212 7.99976C209.667 8.83317 206.253 11.9522 206 18C202 113.5 190.5 123.5 199 148C204 124.167 219.1 68 239.5 34C215.9 76.4 204.667 131.333 202 153.5C191.91 214.5 205 276.5 205 333.5C205 334.5 204 336.9 206 352.5C208 368.1 221.5 462.667 228 508C227.833 513.667 228.6 524.8 233 524C237.4 523.2 249.167 516.333 254.5 513C236.9 526.2 231.833 537.167 231.5 541C230.167 546 225.3 571.6 216.5 634C207.7 696.4 197.833 765 194 791.5C191.833 798 188.2 812.7 191 819.5C193.8 826.3 195.833 840.333 196.5 846.5H184.5C183.667 845 181.2 837.9 178 821.5C174.8 805.1 165.667 794 161.5 790.5L58 691L165 787C189 815.4 184 776 192.5 736C197.167 693.333 208.1 601.1 214.5 573.5C222.5 539 221.5 519.5 219 508C217 498.8 215.167 477.833 214.5 468.5C210.5 405 198.5 358 195 345.5C192.2 335.5 193.833 327.333 195 324.5C201.8 299.7 195.167 236.5 191 208C187.8 206.8 188.333 202.833 189 201C198 188.5 194.5 135.5 190.5 128C188.764 124.746 189.333 121.667 190.5 120C202 98.9998 201 28.4998 202 19.4998Z"
            fill="#E0B84D"
            stroke="#E0B84D"
            strokeWidth="4"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ originY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Animated text labels */}
          <motion.text
            x="310"
            y="20"
            textAnchor="middle"
            className="font-medium text-xl fill-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          >
            Today
          </motion.text>

          <motion.text
            x="-70"
            y="580"
            textAnchor="middle"
            className="text-xl font-medium fill-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          >
            Future
          </motion.text>

          <motion.text
            x="320"
            y="430"
            textAnchor="middle"
            className="text-xl font-medium fill-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          >
            Next
          </motion.text>

          {/* Animated descriptions using SVG text with tspan for wrapping */}
          <motion.text
            x="230"
            y="50"
            fontSize="19"
            fill="#4B5563"
            fontWeight="400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          >
            <tspan x="280" dy="10">
              Private Credit Fund
            </tspan>
            <tspan x="280" dy="30">
              (short-term, lending)
            </tspan>
          </motion.text>

          <motion.text
            x="-100"
            y="610"
            fontSize="19"
            fill="#4B5563"
            fontWeight="400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.1, duration: 1, ease: "easeOut" }}
          >
            <tspan x="-100" dy="10">
              Diversified Alternatives
            </tspan>
            <tspan x="-100" dy="30">
              Fund (broad exposure)
            </tspan>
          </motion.text>

          <motion.text
            x="200"
            y="470"
            fontSize="18"
            fill="#4B5563"
            fontWeight="400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.6, duration: 1, ease: "easeOut" }}
          >
            <tspan x="300" dy="0">
              Core Real Estate Fund
            </tspan>
            <tspan x="300" dy="30">
              (long-term, growth &
            </tspan>
            <tspan x="300" dy="30">
              income)
            </tspan>
          </motion.text>
        </motion.svg>
      </div>
    </>
  );
};

export default LookingAhead;
