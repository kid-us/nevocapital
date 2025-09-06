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

const alexData: TeamsType = {
  image: "",
  name: "Alex Failaev",
  role: "Managing Partner & COO",
  about:
    "Avraham “Alex” Failaev is the Co-Founder and Capital Strategist at Nevo Capital, where he leads investment strategy, borrower vetting, and deal structuring for the fund. Known for his analytical approach, relationship-driven leadership, and hands-on adaptability, Alex combines precision with speed, ensuring every opportunity is evaluated thoroughly and executed efficiently. His global perspective, diverse professional background, and strong local network make him a trusted partner for both investors and borrowers.",
  background:
    "Born in Israel and raised across multiple countries, Alex brings a multilingual, international perspective to his work, speaking English, Hebrew, and Russian. He holds a Doctor of Pharmacy (PharmD) and a Bachelor’s degree in Economics, reflecting both analytical rigor and the ability to manage complex systems. His experience in healthcare and hospital settings honed discipline, reliability, and problem- solving skills that carry through to his investment and lending work.",
  careerPath:
    "Since entering the real estate space in 2020, Alex has completed over 50 transactions, managing more than $3 million in property value across acquisitions, renovations, and portfolio management. His experience spans fix-and-flips, long-term rentals, and short-term housing, all managed through multiple real estate ventures, including Sheltie Investments. Known for building strong relationships and networks, Alex also founded the Delmarva REI and Annapolis Area Real Estate Meetup groups, creating spaces for investors, lenders, agents, and contractors to connect, share knowledge, and grow.",
  currentRole:
    "At Nevo Capital, Alex oversees underwriting standards, lending strategy, and investor alignment. He ensures capital preservation, borrower accountability, and efficient, risk-aware execution. His hands-on approach, combined with deep market knowledge and strong connections in the Delmarva region, ensures consistent access to high-quality lending opportunities and trusted borrowers.",
  beyond:
    "Alex is a devoted husband and father of three, and family plays a central role in his perspective and leadership. Known for his hospitality-oriented, community-driven mindset, he enjoys helping others succeed and strengthening investor networks. His combination of discipline, analytical rigor, and people-first approach shapes both his professional and personal life.",
  socialLink: "",
};

const Alex = () => {
  return <Detail data={alexData} />;
};

export default Alex;
