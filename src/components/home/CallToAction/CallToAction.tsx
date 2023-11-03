"use client"

import Container from "@/components/shared/Container"
import React from "react"
import { motion } from "framer-motion"
import FramerMagnetic from "@/components/shared/FramerMagnetic"

const container = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 100 },
  show: { y: 0 },
}

const CallToAction = () => {
  return (
    <div className="bg-primary bg-[url(/images/cta.jpg)] bg-no-repeat bg-center bg-cover">
      <Container className="z-10 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-10 text-center rounded-2xl"
        >
          <motion.h1
            variants={item}
            className="text-2xl font-bold sm:text-3xl md:text-4xl text-zinc-300 font-montserrat"
          >
            I know your mind wants to hire me 👀
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-2 text-sm text-zinc-400 sm:text-base"
          >
            The button bellow will make it easy
          </motion.p>

          <motion.div
            variants={item}
            viewport={{ once: true }}
            className="mt-10"
          >
            <FramerMagnetic>
              <a
                href="https://www.linkedin.com/in/devshahriyar/"
                className="inline-block px-5 py-3 font-bold text-black transition-all bg-accent group hover:bg-rose-500 hover:animate-shake"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mr-2">Hire Me</span>
                <span className="group-hover:hidden">💔</span>
                <span className="hidden group-hover:inline-block">💖</span>
              </a>
            </FramerMagnetic>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
export default CallToAction
