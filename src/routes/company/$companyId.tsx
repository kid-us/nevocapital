import { alexFamily, davidFamily, jochaiFamily } from "@/assets";
import Reveal from "@/components/Revel";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";

export const Route = createFileRoute("/company/$companyId")({
  component: CompanyMembersPage,
});

interface CompanyMembers {
  id: number;
  name: string;
  about: string;
  linkedInLink: string;
  backgroundEducation: string;
  careerPath: string;
  currentRole: string;
  beyondBusiness: string;
  image: string;
  role: string;
  identify: string;
}

const teamsInfo: CompanyMembers[] = [
  {
    identify: "jochai",
    id: 1,
    image: jochaiFamily,
    name: "Jochai Mor",
    role: "Managing Partner & CEO",
    about:
      "Jochai Mor is the Co-Founder and Managing Member of Nevo Capital, where he leads strategy, investor relations, and long-term growth. Known for his disciplined, visionary leadership, Jochai combines operational precision with entrepreneurial drive. His background in elite military service, high-growth technology, and real estate investment has shaped a leadership style defined by resilience, adaptability, and relentless execution.",
    backgroundEducation:
      "Born in Israel and raised in the United States, Jochai’s international upbringing and fluency in multiple languages give him a global perspective and the ability to connect across cultures. He served in an elite special forces unit in the Israel Defense Forces, where he honed leadership under pressure, strategic thinking, and teamwork in high-stakes environments. He later earned a degree in Economics and Business Administration from Reichman University (IDC Herzliya), with a focus on macroeconomics, accounting, and finance.",
    careerPath:
      "Jochai began his career in Israel’s tech sector, helping startups innovate and scale in competitive markets. He later became CEO of his family’s real estate business, where he transformed underperforming assets into a growing portfolio through sharp investment strategy and disciplined execution. That experience laid the foundation for Nevo Capital, where he combines vision with operational expertise to build a scalable, transparent, and growth- oriented investment platform.",
    currentRole:
      "At Nevo Capital, Jochai drives strategic direction and investor engagement. He oversees acquisitions, underwriting, and fund operations, ensuring every decision reflects disciplined risk management and forward-looking growth. His leadership is rooted in clear communication, accountability, and a passion for building long-term partnerships with investors.",
    beyondBusiness:
      "Outside of work, Jochai is a devoted husband and father of four, values that shape his perspective on growth, responsibility, and legacy. He is also an avid mountaineer, having completed demanding climbs across the U.S., South America, and Europe. These experiences reflect the endurance, focus, and leadership under pressure that he brings to every aspect of his professional life.",
    linkedInLink: "",
  },
  {
    identify: "david",
    id: 2,
    image: davidFamily,
    name: "David Sher",
    role: "Managing Partner & CFO",
    about:
      "David Sher is the Co-Founder and Chief Financial Officer of Nevo Capital, where he oversees financial operations, compliance, and scalable systems for growth. Known for his steady leadership and ability to bring clarity to complexity, David combines a global perspective with deep financial expertise. His background in military service, government operations, and real estate investment has shaped a leadership style built on precision, problem solving, and long-term discipline.",
    backgroundEducation:
      "Born in Australia and raised in Israel, David’s international upbringing and multilingual abilities give him a broad perspective on business and cultural adaptability. He served as an officer in the Israel Defense Forces’ elite Paratroopers Brigade, where he developed the discipline, teamwork, and leadership skills that continue to guide his professional approach. He later earned a degree in Arabic and Middle Eastern Studies from Bar-Ilan University, strengthening his analytical skills and cross-cultural insight.",
    careerPath:
      "After his military service, David transitioned into public-sector leadership, serving in government roles focused on strategic planning and operations. He later moved into the private sector, relocating to the United States with his family and assuming executive leadership in a real estate investment company. There, he managed financial strategy, compliance, and portfolio operations, gaining firsthand experience in navigating the complexities of U.S. markets and private capital.",
    currentRole:
      "As CFO of Nevo Capital, David leads financial management, compliance, and operational oversight. He is responsible for fundreporting, regulatory alignment, and coordination with third-partyadministrators, auditors, and legal partners. With a reputation for building scalable systems, David ensures that Nevo Capital’s financial and operational framework remains sound, transparent, and built for long-term investor confidence.",
    beyondBusiness:
      "Outside of his professional role, David is a devoted husband and father of two. Family values and integrity play a central role in his decision-making and leadership. Known for his love of sports and continuous learning, David brings the same focus and discipline to his personal life as he does to his work.",
    linkedInLink: "",
  },
  {
    identify: "alex",
    id: 3,
    image: alexFamily,
    name: "Alex Failaev",
    role: "Managing Partner & COO",
    about:
      "Avraham “Alex” Failaev is the Co-Founder and Capital Strategist at Nevo Capital, where he leads investment strategy, borrower vetting, and deal structuring for the fund. Known for his analytical approach, relationship-driven leadership, and hands-on adaptability, Alex combines precision with speed, ensuring every opportunity is evaluated thoroughly and executed efficiently. His global perspective, diverse professional background, and strong local network make him a trusted partner for both investors and borrowers.",
    backgroundEducation:
      "Born in Israel and raised across multiple countries, Alex brings a multilingual, international perspective to his work, speaking English, Hebrew, and Russian. He holds a Doctor of Pharmacy (PharmD) and a Bachelor’s degree in Economics, reflecting both analytical rigor and the ability to manage complex systems. His experience in healthcare and hospital settings honed discipline, reliability, and problem- solving skills that carry through to his investment and lending work.",
    careerPath:
      "Since entering the real estate space in 2020, Alex has completed over 50 transactions, managing more than $3 million in property value across acquisitions, renovations, and portfolio management. His experience spans fix-and-flips, long-term rentals, and short-term housing, all managed through multiple real estate ventures, including Sheltie Investments. Known for building strong relationships and networks, Alex also founded the Delmarva REI and Annapolis Area Real Estate Meetup groups, creating spaces for investors, lenders, agents, and contractors to connect, share knowledge, and grow.",
    currentRole:
      "At Nevo Capital, Alex oversees underwriting standards, lending strategy, and investor alignment. He ensures capital preservation, borrower accountability, and efficient, risk-aware execution. His hands-on approach, combined with deep market knowledge and strong connections in the Delmarva region, ensures consistent access to high-quality lending opportunities and trusted borrowers.",
    beyondBusiness:
      "Alex is a devoted husband and father of three, and family plays a central role in his perspective and leadership. Known for his hospitality-oriented, community-driven mindset, he enjoys helping others succeed and strengthening investor networks. His combination of discipline, analytical rigor, and people-first approach shapes both his professional and personal life.",
    linkedInLink: "",
  },
];

function CompanyMembersPage() {
  const { companyId } = Route.useParams();

  const selectedMember = teamsInfo.find((team) => team.identify === companyId);

  return (
    <div>
      {selectedMember && (
        <div className="max-w-3xl mx-auto mt-24">
          <h1 className="text-2xl">{selectedMember.name}</h1>
          <p className="text-sm text-zinc-500">{selectedMember.role}</p>
          <Reveal>
            <div className="grid grid-cols-2 gap-y-5 mt-5">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="h-full object-cover w-[320px]"
              />
              <div>
                <h3 className="text-2xl">About {selectedMember.name}</h3>
                <hr className="border-primary my-4" />
                <p className="text-sm text-zinc-500">{selectedMember.about}</p>

                <div className="mt-5 flex space-x-3 group tex-sm items-center">
                  <Linkedin size={20} />
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Background and Education */}
          <Reveal>
            <div className="mt-14">
              <h1 className="text-2xl">Background & Education</h1>
              <p className="mt-3 text-sm text-zinc-600">
                {selectedMember.backgroundEducation}
              </p>
            </div>
          </Reveal>

          {/* Current Role */}
          <Reveal>
            <div className="mt-14">
              <h1 className="text-2xl">Career Path</h1>
              <p className="mt-3 text-sm text-zinc-600">
                {selectedMember.careerPath}
              </p>
            </div>
          </Reveal>

          {/* Current Role at Nevo Capital */}
          <Reveal>
            <div className="mt-14">
              <h1 className="text-2xl">Current Role at Nevo Capital</h1>
              <p className="mt-3 text-sm text-zinc-600">
                {selectedMember.currentRole}
              </p>
            </div>
          </Reveal>

          {/* Beyond Business */}
          <Reveal>
            <div className="mt-14">
              <h1 className="text-2xl">Beyond Business</h1>
              <p className="mt-3 text-sm text-zinc-600">
                {selectedMember.beyondBusiness}
              </p>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}
