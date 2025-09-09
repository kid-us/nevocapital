import { Image, Linkedin } from "lucide-react";
import { useEffect } from "react";
import Reveal from "../Revel";

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

interface Props {
  data: TeamsType;
}
const Detail = ({ data }: Props) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-10 mt-10">
      <Reveal>
        <div className="flex justify-center">
          <Image className="size-40" />
        </div>
      </Reveal>
      <div className="col-span-2 space-y-4">
        <Reveal>
          <div>
            <p className="text-2xl text-zinc-500">{data.role}</p>
            <p className="font-bold text-5xl first-letter:text-cta">
              {data.name}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="underline mt-3 text-lg">About {data.name}</p>
            <p className="text-xl mt-1 mb-5">{data.about}</p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="underline mt-3 text-lg">Background & Education</p>
            <p className="text-xl mt-1 mb-5">{data.background}</p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="underline mt-3 text-lg">Career Path</p>
            <p className="text-xl mt-1 mb-5">{data.careerPath}</p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="underline mt-3 text-lg">
              Current Role at NEvo Capital
            </p>
            <p className="text-xl mt-1 mb-5">{data.currentRole}</p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="underline mt-3 text-lg">Beyond Business</p>
            <p className="text-xl mt-1 mb-5">{data.beyond}</p>
          </div>
        </Reveal>

        <Reveal>
          {/* Social Media */}
          <div className="hover:bg-cta flex justify-center items-center border-2 border-cta rounded-full h-14 w-14">
            <Linkedin size={30} />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Detail;
