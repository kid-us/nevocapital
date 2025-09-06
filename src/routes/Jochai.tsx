import Detail from "@/components/company/Detail";

interface TeamsType {
  image: string;
  role: string;
  name: string;
  about: string;
  background: string;
  careerPath: string;
  currentRole: string;
  beyond: string;
  socialLink: string;
}

const jochaiData: TeamsType = {
  image: "",
  name: "Jochai Mor",
  role: "Managing Partner & CEO",
  about:
    "Jochai Mor is the Co-Founder and Managing Member of Nevo Capital, where he leads strategy, investor relations, and long-term growth. Known for his disciplined, visionary leadership, Jochai combines operational precision with entrepreneurial drive. His background in elite military service, high-growth technology, and real estate investment has shaped a leadership style defined by resilience, adaptability, and relentless execution.",
  background:
    "Born in Israel and raised in the United States, Jochai’s international upbringing and fluency in multiple languages give him a global perspective and the ability to connect across cultures. He served in an elite special forces unit in the Israel Defense Forces, where he honed leadership under pressure, strategic thinking, and teamwork in high-stakes environments. He later earned a degree in Economics and Business Administration from Reichman University (IDC Herzliya), with a focus on macroeconomics, accounting, and finance.",
  careerPath:
    "Jochai began his career in Israel’s tech sector, helping startups innovate and scale in competitive markets. He later became CEO of his family’s real estate business, where he transformed underperforming assets into a growing portfolio through sharp investment strategy and disciplined execution. That experience laid the foundation for Nevo Capital, where he combines vision with operational expertise to build a scalable, transparent, and growth- oriented investment platform.",
  currentRole:
    "At Nevo Capital, Jochai drives strategic direction and investor engagement. He oversees acquisitions, underwriting, and fund operations, ensuring every decision reflects disciplined risk management and forward-looking growth. His leadership is rooted in clear communication, accountability, and a passion for building long-term partnerships with investors.",
  beyond:
    "Outside of work, Jochai is a devoted husband and father of four, values that shape his perspective on growth, responsibility, and legacy. He is also an avid mountaineer, having completed demanding climbs across the U.S., South America, and Europe. These experiences reflect the endurance, focus, and leadership under pressure that he brings to every aspect of his professional life.",
  socialLink: "",
};

const Jochai = () => {
  return <Detail data={jochaiData} />;
};

export default Jochai;
