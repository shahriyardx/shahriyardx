import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <div className="px-5 bg-secondary">
      <div className="max-w-6xl py-10 mx-auto md:py-20">
        <div className="text-center">
          <span className="text-lg uppercase text-zinc-600">Projects</span>
          <h1 className="text-4xl font-bold text-zinc-300">Recent Projects</h1>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <Project
            title="Slash Commands"
            description="A discord bot dashboard for making custom slash commands"
            url="https://ccbot.app"
            github="https://github.com/weirdsoftltd"
          />

          <Project
            title="Crisis Entertainment"
            description="Official website of crisis entertainment. A game development company based on Bangladesh and Australia"
            url="https://crisisentertainment.com"
          />

          <Project
            title="Roktoo"
            description="A blood donating and searching platform."
            url="https://roktoo.shahriyar.dev"
            github="https://github.com/shahriyardx/roktoo.com"
          />

          <Project
            title="The Best Blog"
            description="A blogging platform for developers. Where developers can register and write posts"
            url="https://the-best.shahriyar.dev/"
            github="https://github.com/shahriyardx/the-best-blog"
          />

          <div>
            There are more, if you are interested feel free to connect on
            linkedin...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

type ProjectProps = {
  title: string;
  description: string;
  url: string;
  github?: string;
}

const Project = ({ title, description, url, github }: ProjectProps) => {
  return (
    <div className="p-5 rounded-xl bg-zinc-700">
      <h2 className="text-4xl font-bold text-indigo-300">{title}</h2>
      <p className="text-zinc-400">{description}</p>

      <div className="flex items-center gap-5 mt-2 text-lg">
        <Link href={url} className="flex items-center gap-2">
          <>
            <BiLink />
            Visit
          </>
        </Link>

        {github ? (
          <Link href={github} className="flex items-center gap-2">
            <>
              <SiGithub />
              Github
            </>
          </Link>
        ) : (
          <>Closed Source</>
        )}
      </div>
    </div>
  );
};
