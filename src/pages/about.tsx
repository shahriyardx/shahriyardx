import Main from "components/layouts/Main"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import SEO from "components/shared/SEO"

const container = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

const About = () => {
  const [more, setMore] = useState(false)
  return (
    <Main>
      <SEO title="About - Md Shahriyar Alam" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="prose prose-invert prose-green py-10 mx-auto px-4"
      >
        <motion.h2 variants={item}>Welcome 💘</motion.h2>
        <motion.p variants={item} className="text-zinc-400">
          I am glad that you want to know about me 🥰. I&apos;m `Shahriyar`.
          Full-stack web developer, Student of Computer Software Engineering,
          Tech enthusiast and much more.
        </motion.p>

        <motion.h2 variants={item}>Story</motion.h2>
        <div className="text-zinc-400">
          <motion.p variants={item}>
            In my childhood, I wanted to be a pilot. Because I used to see a lot
            of science fiction movies and seeing those I thought I can also fly
            if I become a pilot
          </motion.p>

          <motion.p variants={item}>
            Later, when I was 11 years old. I suddenly started loving Math and
            Science. I was soo good at match and science that all my friends
            started calling me scientist
          </motion.p>

          <motion.p variants={item}>
            And they kept calling me that till my High school ended. It was a
            very long time. At that time as a Bangladeshi citizen getting access
            to technology was too hard. Like I had my first smartphone when I
            was in class 10 (17 years old). Before that my Aunt bought a Chinese
            phone. I used that to play games and stuff.
          </motion.p>

          <motion.p variants={item}>
            After playing a lot of games I was bored and thought why not make my
            own games. But I didn&apos;t know how to make my own game. I
            searched on the internet and I found nothing. Then I thought, ok
            let&apos;s make mobile apps. I searched for how to make mobile
            games. And I found AppGeyser where you can a template give it a name
            and your app is done. Was too easy but not what I wanted.
          </motion.p>

          <motion.p variants={item}>
            Then I started learning HTML, CSS, and a little bit of Jquery. And I
            made my first web page. That was the beginning and now I&apos; a
            Full-stack web developer and a Python developer.
          </motion.p>
        </div>

        <AnimatePresence>
          {!more && (
            <motion.button
              layout
              className="px-5 py-2 bg-accent text-black"
              onClick={() => setMore(true)}
            >
              More
            </motion.button>
          )}

          {more && (
            <motion.div className="mt-10">
              <motion.h2 initial={{ y: 100 }} animate={{ y: 0 }}>
                Really? 😍
              </motion.h2>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                You want to know more? 😲
              </motion.p>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Then please send me a message{" "}
                <Link href="/contact" passHref>
                  Click Here
                </Link>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Main>
  )
}

export default About
