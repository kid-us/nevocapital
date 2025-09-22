import { useEffect } from "react";

const HeroBg = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(
      ".background-svg line"
    ) as NodeListOf<SVGLineElement>;
    const defaultColor = "#CDCDCD";
    const highlightColor = "#fabe1a";
    const defaultOpacity = 0.4;
    const highlightOpacity = 1;
    const transitionDuration = 1000; // Transition duration for wave effect
    const delay = 50; // Delay between lines for wave-like effect
    const waveCycleDuration = lines.length * delay; // One wave pass (forward)
    const pauseDuration = 5000; // 5-second gap after each full cycle
    const totalCycleDuration = waveCycleDuration * 2 + pauseDuration; // Forward + backward + pause

    function animateWave() {
      // Forward wave: lines turn yellow with full opacity
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.style.transition = `stroke ${transitionDuration}ms ease, stroke-opacity ${transitionDuration}ms ease`;
          line.style.stroke = highlightColor;
          line.style.strokeOpacity = highlightOpacity.toString();
        }, index * delay);
      });

      // Backward wave: lines return to default color and opacity
      lines.forEach((line, index) => {
        setTimeout(
          () => {
            line.style.transition = `stroke ${transitionDuration}ms ease, stroke-opacity ${transitionDuration}ms ease`;
            line.style.stroke = defaultColor;
            line.style.strokeOpacity = defaultOpacity.toString();
          },
          index * delay + waveCycleDuration
        );
      });
    }

    animateWave(); // Start the first wave
    const interval = setInterval(animateWave, totalCycleDuration); // Repeat with pause

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10 background-svg"
      width="1385"
      height="575"
      viewBox="0 0 1385 575"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="62.5"
        y1="425.5"
        x2="62.5"
        y2="463.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="121.5"
        y1="360.5"
        x2="121.5"
        y2="480.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="182.5"
        y1="445.5"
        x2="182.5"
        y2="572.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="242.5"
        y1="391.5"
        x2="242.5"
        y2="478.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="302.5"
        y1="405.5"
        x2="302.5"
        y2="430.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="362.5"
        y1="342.5"
        x2="362.5"
        y2="412.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="422.5"
        y1="282.5"
        x2="422.5"
        y2="329.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="482.5"
        y1="314.5"
        x2="482.5"
        y2="442.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="542.5"
        y1="301.5"
        x2="542.5"
        y2="375.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="602.5"
        y1="217.5"
        x2="602.5"
        y2="329.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="662.5"
        y1="259.5"
        x2="662.5"
        y2="296.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="722.5"
        y1="238.5"
        x2="722.5"
        y2="329.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="782.5"
        y1="259.5"
        x2="782.5"
        y2="296.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="842.5"
        y1="175.5"
        x2="842.5"
        y2="269.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="902.5"
        y1="213.5"
        x2="902.5"
        y2="329.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="962.5"
        y1="224.5"
        x2="962.5"
        y2="277.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1022.5"
        y1="186.5"
        x2="1022.5"
        y2="256.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1082.5"
        y1="126.5"
        x2="1082.5"
        y2="240.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1142.5"
        y1="135.5"
        x2="1142.5"
        y2="153.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1202.5"
        y1="62.5"
        x2="1202.5"
        y2="174.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1262.5"
        y1="72.5"
        x2="1262.5"
        y2="116.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1322.5"
        y1="39.5"
        x2="1322.5"
        y2="259.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="1382.5"
        y1="2.5"
        x2="1382.5"
        y2="116.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="2.5"
        y1="347.5"
        x2="2.5"
        y2="430.5"
        stroke="#CDCDCD"
        strokeOpacity="0.4"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HeroBg;
