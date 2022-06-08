import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../components/Layout/Container";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="bg-primary">
      <Container className="md:grid md:grid-cols-3 gap-10 py-10 md:py-40 xl:max-w-6xl">
        <div className="md:col-span-2 flex flex-col justify-center">
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
                <Link href="/cv">
                  <a className="text-accent underline underline-offset-2 uppercase mt-5 text-sm sm:text-base flex items-center gap-2 hover:text-green-600">
                    <AiOutlineCloudDownload className="text-xl animate-bounce -mb-2" />
                    <span>Download Resume</span>
                  </a>
                </Link>
                <a
                  href="mailto:mdshahriyaralam9@gmail.com"
                  className="text-zinc-200 underline underline-offset-2 uppercase mt-5 text-sm sm:text-base"
                >
                  Let&apos;s Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/images/me.jpg"
            width={100}
            height={100}
            alt="Me"
            objectFit="contain"
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
