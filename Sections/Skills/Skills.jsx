import React from "react";
import Container from "../../components/Layout/Container";
import skills from "../../data/skills";
import Skill from "@/components/Skill/Skill";

const Skills = () => {
  return (
    <div className="bg-primary">
      <Container className="py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Skills</span>
          <h1 className="text-4xl font-bold text-zinc-300">My Skills</h1>
        </div>
        <div className="flex items-center justify-center flex-wrap max-w-3xl mx-auto gap-5 text-zinc-500 text-6xl mt-10">
          {skills.map((skill, index) => {
            return (
              <Skill
                key={index}
                position={index + 1}
                icon={skill.icon}
                text={skill.name}
                className={skill.className}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
