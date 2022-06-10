import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../components/Layout/Container";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-primary">
      <Container className="md:grid md:grid-cols-3 gap-10 relative xl:max-w-7xl overflow-x-hidden">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="md:col-span-2 flex flex-col justify-center py-20 lg:py-32"
        >
          <div>
            <div>
              <p className="bg-accent text-black p-1 px-2 text-xs w-max rounded-md">
                Full-Stack Web Developer
              </p>
              <h1 className="text-slate-100 text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-5 mb-2 font-black">
                Md Shahriyar Alam
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400">
                Full-Stack Web Developer with knowledge of ReactJs NextJs,
                Redux, Typescript, ExpressJs, Node, MongoDB. Also has experience
                with developing backend APIs using Python web frameworks.
              </p>

              <div className="flex items-center gap-5 mt-10">
                <Link href="/cv" passHref>
                  <motion.a
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-accent underline underline-offset-2 uppercase mt-5 text-sm sm:text-base flex items-center gap-2 hover:text-green-600"
                  >
                    <AiOutlineCloudDownload className="text-xl animate-bounce -mb-2" />
                    <span>Download Resume</span>
                  </motion.a>
                </Link>
                <Link href="/contact" passHref>
                  <motion.a
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-zinc-200 underline underline-offset-2 uppercase mt-5 text-sm sm:text-base"
                  >
                    <span>Let&apos;s Chat</span>
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:block cursor-pointer absolute bottom-0 right-0 w-[400px] lg:w-[500px]"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Image
            src="/images/profile.png"
            width={200}
            height={200}
            alt="Me"
            objectFit="contain"
            layout="responsive"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default Banner;
