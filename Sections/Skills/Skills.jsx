import React from "react";
import Container from "../../components/Layout/Container";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiNginx,
  SiLinux,
  SiDocker,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiStripe,
  SiCloudflare,
} from "react-icons/si";
import Skill from "@/components/Skill/Skill";

const Skills = () => {
  return (
    <div className="bg-primary">
      <Container className="py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Skills</span>
          <h1 className="text-4xl font-bold text-zinc-300">My Skills</h1>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-5 text-zinc-500 text-6xl mt-10">
          <Skill icon={SiHtml5} text="HTML" className="hover:text-orange-600" />
          <Skill icon={SiCss3} text="CSS3" className="hover:text-blue-500" />
          <Skill
            icon={SiJavascript}
            text="JavaScript"
            className="hover:text-yellow-400"
          />
          <Skill
            icon={SiTypescript}
            text="TypeScript"
            className="hover:text-sky-600"
          />
          <Skill
            icon={SiPython}
            text="Python"
            className="hover:text-blue-800"
          />
          <Skill icon={SiReact} text="ReactJs" className="hover:text-sky-500" />
          <Skill
            icon={SiExpress}
            text="ExpressJs"
            className="hover:text-green-500"
          />
          <Skill
            icon={SiNodedotjs}
            text="NodeJs"
            className="hover:text-green-600"
          />
          <Skill icon={SiGit} text="Git" className="hover:text-zinc-400" />
          <Skill icon={SiNginx} text="NGINX" className="hover:text-green-500" />
          <Skill
            icon={SiLinux}
            text="Linux"
            className="hover:text-yellow-500"
          />
          <Skill icon={SiDocker} text="Docker" className="hover:text-sky-500" />
          <Skill
            icon={SiFirebase}
            text="Firebase"
            className="hover:text-red-500"
          />
          <Skill
            icon={SiPostgresql}
            text="Postgresql"
            className="hover:text-blue-500"
          />
          <Skill
            icon={SiMongodb}
            text="MongoDB"
            className="hover:text-green-500"
          />
          <Skill
            icon={SiStripe}
            text="Stripe"
            className="hover:text-indigo-500"
          />
          <Skill
            icon={SiCloudflare}
            text="Cloudflare"
            className="hover:text-orange-500"
          />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
