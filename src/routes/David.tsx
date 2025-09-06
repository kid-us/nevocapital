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

const davidData: TeamsType = {
  image: "",
  name: "David Sher",
  role: "Managing Partner & CFO",
  about:
    "David Sher is the Co-Founder and Chief Financial Officer of Nevo Capital, where he oversees financial operations, compliance, and scalable systems for growth. Known for his steady leadership and ability to bring clarity to complexity, David combines a global perspective with deep financial expertise. His background in military service, government operations, and real estate investment has shaped a leadership style built on precision, problem solving, and long-term discipline.",
  background:
    "Born in Australia and raised in Israel, David’s international upbringing and multilingual abilities give him a broad perspective on business and cultural adaptability. He served as an officer in the Israel Defense Forces’ elite Paratroopers Brigade, where he developed the discipline, teamwork, and leadership skills that continue to guide his professional approach. He later earned a degree in Arabic and Middle Eastern Studies from Bar-Ilan University, strengthening his analytical skills and cross-cultural insight.",
  careerPath:
    "After his military service, David transitioned into public-sector leadership, serving in government roles focused on strategic planning and operations. He later moved into the private sector, relocating to the United States with his family and assuming executive leadership in a real estate investment company. There, he managed financial strategy, compliance, and portfolio operations, gaining firsthand experience in navigating the complexities of U.S. markets and private capital.",
  currentRole:
    "As CFO of Nevo Capital, David leads financial management, compliance, and operational oversight. He is responsible for fundreporting, regulatory alignment, and coordination with third-partyadministrators, auditors, and legal partners. With a reputation for building scalable systems, David ensures that Nevo Capital’s financial and operational framework remains sound, transparent, and built for long-term investor confidence.",
  beyond:
    "Outside of his professional role, David is a devoted husband and father of two. Family values and integrity play a central role in his decision-making and leadership. Known for his love of sports and continuous learning, David brings the same focus and discipline to his personal life as he does to his work.",
  socialLink: "",
};

const David = () => {
  return <Detail data={davidData} />;
};

export default David;
