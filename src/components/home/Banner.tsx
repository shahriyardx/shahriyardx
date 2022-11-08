import Image from "next/image"
import Link from "next/link"
import React from "react"
import Container from "components/shared/Container"
import { AiOutlineCloudDownload } from "react-icons/ai"
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className="bg-primary py-20 lg:py-32">
      <Container className="md:grid md:grid-cols-3 gap-10 xl:max-w-7xl overflow-x-hidden">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
          className="md:col-span-2 flex flex-col justify-center"
        >
          <div>
            <p className="bg-accent text-black p-1 px-2 text-xs w-max rounded-md">
              Full-Stack Web Developer
            </p>
            <h1 className="text-slate-100 text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-5 mb-2 font-bold font-montserrat">
              Md Shahriyar Alam
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Full-Stack Web Developer with knowledge of ReactJs NextJs, Redux,
              Typescript, ExpressJs, Node, MongoDB. Also has experience with
              developing backend APIs using Python web frameworks.
            </p>

            <div className="flex items-center gap-5 mt-5 sm:mt-10">
              <Link href="/cv" passHref>
                <motion.p
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-accent underline underline-offset-2 uppercase mt-5 text-sm sm:text-base flex items-center gap-2 hover:text-green-600"
                >
                  <AiOutlineCloudDownload className="text-xl animate-bounce -mb-2" />
                  <span>Download Resume</span>
                </motion.p>
              </Link>
              <Link href="/contact" passHref>
                <motion.p
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-zinc-200 underline underline-offset-2 uppercase mt-5 text-sm sm:text-base"
                >
                  <span>Let&apos;s Chat</span>
                </motion.p>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
        >
          <Image
            src="/images/me.jpg"
            width={500}
            height={500}
            alt="Me"
            className="rounded-full w-full aspect-square"
            objectFit="contain"
          />
        </motion.div>
      </Container>
    </div>
  )
}

export default Banner
