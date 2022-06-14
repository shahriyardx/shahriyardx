import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const top = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const left = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const right = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const bottom = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Void = () => {
  return (
    <div className="w-full h-screen overflow-hidden grid place-items-center">
      <SEO title="#PageNotFound" description="This page just doesn't exists" />
      <div className="flex flex-col items-center">
        <motion.div className="flex">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-24 h-36 relative"
          >
            <motion.div
              variants={top}
              className="absolute bg-zinc-300 h-20 w-5 top-4 left-4"
            />
            <motion.div
              variants={left}
              transition={{ delay: 0.2 }}
              className="absolute bg-zinc-300 w-20 h-5 top-16 left-2"
            />
            <motion.div
              variants={bottom}
              transition={{ delay: 0.4 }}
              className="absolute bg-zinc-300 h-28 w-5 top-4 right-4"
            />
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-28 h-36 relative"
          >
            <motion.div
              variants={left}
              transition={{ delay: 0.6 }}
              className="absolute bg-zinc-300 w-20 h-5 top-7 left-4"
            />
            <motion.div
              variants={top}
              transition={{ delay: 0.8 }}
              className="absolute  bg-zinc-300 h-28 w-5 top-4 right-6"
            />
            <motion.div
              variants={right}
              transition={{ delay: 1 }}
              className="absolute bg-zinc-300 w-20 h-5 bottom-7 left-4"
            />
            <motion.div
              variants={bottom}
              transition={{ delay: 1.2 }}
              className="absolute bg-zinc-300 h-28 w-5 top-4 left-6"
            />
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-24 h-36 relative"
          >
            <motion.div
              variants={top}
              transition={{ delay: 1.4 }}
              className="absolute bg-zinc-300 h-20 w-5 top-4 left-4"
            />
            <motion.div
              variants={left}
              transition={{ delay: 1.6 }}
              className="absolute bg-zinc-300 w-20 h-5 top-16 left-2"
            />
            <motion.div
              variants={bottom}
              transition={{ delay: 1.7 }}
              className="absolute bg-zinc-300 h-28 w-5 top-4 right-4"
            />
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-4xl text-zinc-400 font-black mt-10 font-montserrat"
        >
          <span>#</span>
          <span className="hover:text-white cursor-pointer">Page</span>
          <span className="hover:text-white cursor-pointer">Not</span>
          <span className="hover:text-white cursor-pointer">Found</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-5"
        >
          <Link href="/" passHref>
            <a className="px-5 py-2 bg-zinc-900 hover:bg-black text-zinc-300 text-lg font-semibold rounded-md inline-block">
              Go home
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Void;
