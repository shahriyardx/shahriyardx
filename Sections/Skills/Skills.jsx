import React from "react";
import Container from "../../components/Layout/Container";
import skills from "../../data/skills";
import Skill from "@/components/Skill/Skill";
import { motion } from "framer-motion";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.05,
    },
  },
};

const Skills = () => {
  return (
    <div className="bg-primary">
      <Container className="py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Skills</span>
          <h1 className="text-4xl font-bold text-zinc-300">My Skills</h1>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-center flex-wrap max-w-3xl mx-auto gap-5 text-zinc-500 text-6xl mt-10"
        >
          {skills.map((skill, index) => {
            return (
              <Skill
                key={index}
                icon={skill.icon}
                text={skill.name}
                className={skill.className}
              />
            );
          })}
        </motion.div>
      </Container>
    </div>
  );
};

export default Skills;
