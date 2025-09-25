import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a label";

const originalChartData = [
  { category: "Private Credit (Upper MM)", value: 10.2 },
  { category: "US Leverage Loan", value: 9.4 },
  { category: "US High Yield Bonds", value: 7.4 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartBarLabel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [chartData, setChartData] = useState(
    originalChartData.map((item) => ({ ...item, value: 0 }))
  );

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setChartData(originalChartData);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="border-none pb-0 mt-10">
        <CardContent className="p-0 m-0">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 20,
                right: 20,
              }}
              maxBarSize={60}
            >
              <CartesianGrid vertical={false} stroke="#e4e4e7" />
              <XAxis
                dataKey="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                height={60}
                interval={0}
              />
              <YAxis
                domain={[0, 11]}
                ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="value" fill="#fabe1a" radius={0}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <p className="text-center text-zinc-500 mt-0 pt-0">
          Yield Comparison (2023)
        </p>
      </Card>
    </motion.div>
  );
}
