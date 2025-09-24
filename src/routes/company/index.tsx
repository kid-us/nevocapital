import {
  alex,
  aligned,
  alignedHover,
  comapnyGraph,
  david,
  institutionalHover,
  institutionalPng,
  jochai,
  specialized,
  specializedHover,
} from "@/assets";
import Reveal from "@/components/Revel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/company/")({
  component: companyPage,
  head: () => ({
    meta: [{ title: "Company" }],
  }),
});

interface TheTeam {
  id: number;
  name: string;
  position: string;
  path: string;
  img: string;
}

interface Content {
  id: number;
  title: string;
  desc: string;
  img: string;
  hoverImg: string;
}

// Teams
const teams: TheTeam[] = [
  {
    id: 1,
    name: "Jochai Mor",
    position: "Managing Partner & CEO",
    path: "/jochai",
    img: jochai,
  },
  {
    id: 2,
    name: "David Sher",
    position: "Managing Partner & CFO",
    path: "/david",
    img: david,
  },
  {
    id: 3,
    name: "Alex Failaev",
    position: "Managing Partner & COO",
    path: "/alex",
    img: alex,
  },
];

// Contents
const contents: Content[] = [
  {
    id: 1,
    desc: "Built on principles of governance, compliance, and transparency.",
    hoverImg: institutionalHover,
    img: institutionalPng,
    title: "Institutional Quality",
  },
  {
    id: 2,
    desc: "A leadership team with deep knowledge in real Estate and private markets.",
    hoverImg: specializedHover,
    img: specialized,
    title: "Specialized Expertise",
  },
  {
    id: 3,
    desc: "We commit our own capital alongside yours—true partnership in every strategy.",
    hoverImg: alignedHover,
    img: aligned,
    title: "Aligned Interests",
  },
];

function companyPage() {
  // useEffect(())
  return (
    <div className="max-w-3xl mx-auto lg:mt-24 mt-16 lg:px-0 px-6">
      <Reveal>
        <div>
          <h1 className="lg:text-3xl text-xl">
            Building a Platform for Alternative Investment Excellence
          </h1>
          <p className="mt-4 text-sm text-zinc-600">
            Nevo Capital is a fund management firm focused on delivering
            institutional-quality opportunities in private markets—starting with
            our flagship Private Credit Fund.
          </p>

          <img src={comapnyGraph} className="my-10" alt="Company" />

          {/* Who We are */}
          <div className="lg:mt-28 mt-16">
            <h1 className="lg:text-3xl text-xl">Who We Are</h1>
            <p className="text-sm mt-4 text-zinc-600">
              Nevo Capital is a boutique investment management firm dedicated to
              offering curated alternative strategies for accredited,
              non-accredited investors and family offices. We bring together
              deep expertise, disciplined risk management, and a
              forward-thinking approach to build a diverse portfolio of
              opportunities.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Meet the Team */}
      <Reveal>
        <div className="lg:mt-28 mt-16">
          <h1 className="lg:text-3xl text-xl">Meet the Team</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
            {teams.map((team) => (
              <div key={team.id}>
                <div className="bg-[#ebebeb]">
                  <img src={team.img} alt={team.name} className="pt-5" />
                </div>
                <p className="font-bold mt-4 text-lg">{team.name}</p>
                <p className="text-sm text-zinc-600">{team.position}</p>
                <Link
                  to="/company/$companyId"
                  params={{
                    companyId: String(team.name.split(" ")[0]).toLowerCase(),
                  }}
                  className="group flex space-x-3 mt-2 items-center text-sm font-semibold"
                >
                  <p>Learn More</p>
                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-all duration-300"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Our Vision */}
      <Reveal>
        <div className="lg:mt-28 mt-16">
          <h1 className="lg:text-3xl text-xl">Our Vision</h1>
          <p className="text-sm text-zinc-600 mt-3">
            Strategic Growth, Built on Principles
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Nevo Capital was founded to deliver institutional-quality access to
            private markets. Our focus is on providing carefully structured
            opportunities that prioritize capital protection and consistent
            performance. While we continue to innovate within private credit,
            our broader mission is to offer diversified strategies that align
            with the long-term goals of sophisticated investors.
          </p>
          <div className="relative mt-8">
            <div className="grid lg:grid-cols-3">
              <div className="lg:block flex items-center">
                <div className="lg:hidden block w-6 border-t"></div>
                <div className="lg:mt-0 mt-10 ms-2">
                  <p className="text-sm">Present</p>
                  <div className="lg:block hidden h-6 border-l"></div>
                  <p className="lg:mt-3 mt-1 text-sm font-semibold">
                    Private Credit Fund
                  </p>
                </div>
              </div>
              <div className="lg:block flex items-center">
                <div className="lg:hidden block w-6 border-t"></div>
                <div className="lg:mt-0 mt-5 ms-2">
                  <p className="text-sm">Near Future</p>
                  <div className="lg:block hidden h-6 border-l"></div>
                  <p className="lg:mt-3 mt-1 text-sm font-semibold">
                    Additional Real State Strategies
                  </p>
                </div>
              </div>
              <div className="lg:block flex items-center">
                <div className="lg:hidden block w-6 border-t"></div>
                <div className="lg:mt-0 mt-5 ms-2">
                  <p className="text-sm">Long Run</p>
                  <div className="lg:block hidden h-6 border-l"></div>
                  <p className="lg:mt-3 mt-1 text-sm font-semibold">
                    Broader Alternative Investments
                  </p>
                </div>
              </div>
              <div className="absolute left-0 top-5 my-3 lg:w-full lg:h-[2px] w-[2px] h-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Why Partner with us */}
      <Reveal>
        <div className="lg:mt-28 mt-16 mb-10">
          <h1 className="lg:text-3xl text-xl mb-4">Why Partner With Us</h1>
          {contents.map((content) => (
            <div
              key={content.id}
              className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 items-center gap-5 mt-2"
            >
              <div className="relative w-full h-full group">
                <img
                  src={content.img}
                  alt={content.title}
                  className="w-full h- object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={content.hoverImg}
                  alt={`${content.title} hover`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col lg:col-span-3">
                <p className="font-semibold">{content.title}</p>
                <p className="text-zinc-600 text-sm">{content.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
