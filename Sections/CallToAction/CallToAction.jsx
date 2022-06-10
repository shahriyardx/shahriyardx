import Container from "@/components/Layout/Container";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 100 },
  show: { y: 0 },
};

const CallToAction = () => {
  return (
    <div className="bg-primary bg-[url(/images/cta.jpg)] bg-no-repeat bg-center bg-cover">
      <Container className="py-20 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-10 rounded-2xl text-center"
        >
          <motion.h1
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 font-montserrat"
          >
            I know your mind wants to hire me 👀
          </motion.h1>
          <motion.p
            variants={item}
            className="text-zinc-400 text-sm sm:text-base mt-2"
          >
            The button bellow will make it easy
          </motion.p>

          <motion.div
            variants={item}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a
              href="https://www.linkedin.com/in/shahriyardx/"
              className="px-5 py-3 bg-accent text-black font-bold group hover:bg-rose-500 hover:animate-shake transition-all inline-block"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-2">Hire Me</span>
              <span className="group-hover:hidden">💔</span>
              <span className="hidden group-hover:inline-block">💖</span>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};
export default CallToAction;
