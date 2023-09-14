import Project from "./Project";

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
            image="/images/projects/ccbot.png"
            description="A discord bot dashboard for making custom slash commands. Where people can invite the bot and create their own custom commands"
            url="https://ccbot.app"
            repo={{ front: "https://github.com/weirdsoftltd" }}
            features={[
              "Easy to use user interface",
              "Highly customizable commands",
              "High level programming support",
              "Event handlers for better control",
            ]}
          />

          <Project
            title="Roktoo"
            image="/images/projects/roktoo.png"
            description="A blood donation website using Next.js where users can become donator and other people can find donators very easily"
            url="https://roktoo.shahriyar.dev"
            repo={{ front: "https://github.com/weirdsoftltd" }}
            features={[
              "Anyone can find blood",
              "Anyone can become a donator",
              "Control panel for donators to pause donation or update info",
            ]}
          />

          <Project
            title="Custom Commands"
            image="/images/projects/makeown.png"
            description="A discord bot for making prefix based custom commands easily without any knowledge of programming."
            url="https://ccbot.app"
            repo={{ front: "https://github.com/weirdsoftltd" }}
            features={[
              "Easy to use user interface",
              "Highly customizable commands",
              "Custom functions for dynamic commands",
              "5 types of command to make server unique",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
