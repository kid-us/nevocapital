import { glance } from "@/routes/InvestmentFunds";
import { useEffect, useRef, useState } from "react";

const GlanceGridLarge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const divs = Array.from(
        containerRef.current.querySelectorAll<HTMLDivElement>(".glance-item")
      );
      const newPositions = divs.map((d) => {
        const rect = d.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });
      setPositions(newPositions);
    }
  }, [glance]);

  return (
    <div className="md:block hidden relative w-full" ref={containerRef}>
      {/* SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {positions.length >= 3 && (
          <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {positions.length >= 5 && (
                <>
                  {/* Connect middle/top item (0) to bottom left (1) */}
                  <line
                    x1={positions[0].x}
                    y1={positions[0].y}
                    x2={positions[1].x}
                    y2={positions[1].y}
                    stroke="#114536"
                    strokeWidth={2}
                  />
                  {/* Connect middle/top item (0) to bottom right (2) */}
                  <line
                    x1={positions[0].x}
                    y1={positions[0].y}
                    x2={positions[2].x}
                    y2={positions[2].y}
                    stroke="#114536"
                    strokeWidth={2}
                  />
                  {/* Connect second item (1) to fourth item (3) */}
                  <line
                    x1={positions[1].x}
                    y1={positions[1].y}
                    x2={positions[3].x}
                    y2={positions[3].y}
                    stroke="#114536"
                    strokeWidth={2}
                  />
                  {/* Connect second item (1) to fifth item (4) */}
                  <line
                    x1={positions[1].x}
                    y1={positions[1].y}
                    x2={positions[4].x}
                    y2={positions[4].y}
                    stroke="#114536"
                    strokeWidth={2}
                  />
                </>
              )}
            </svg>
          </>
        )}
      </svg>

      {/* Items */}
      <div className="md:flex hidden flex-wrap justify-center gap-6 md:gap-10 w-full max-w-5xl mx-auto">
        {glance.map((g: any) => (
          <div
            key={g.id}
            className="relative bg-background glance-item basis-1/2 lg:basis-1/4 flex flex-col items-center justify-center border border-cta w-full h-28 md:w-full md:h-60 lg:w-full lg:h-64 rounded-full shadow-md hover:shadow-lg hover:bg-[#114536] transition-all duration-200"
          >
            <g.icon className="text-cta md:w-10 md:h-10 mb-4" />
            <p className="text-xs md:text-sm font-semibold text-center">
              {g.label}
            </p>
            <p className="text-xs md:text-sm mt-2 font-bold text-center">
              {g.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlanceGridLarge;
