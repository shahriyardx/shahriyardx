import Container from "@/components/Layout/Container";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-primary bg-[url(/images/cta.png)] bg-no-repeat bg-center bg-cover">
      <Container className="py-20 z-10">
        <div className="p-10 rounded-2xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 font-montserrat">
            I know your mind wants to hire me 😁
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            The button bellow will make it easy
          </p>

          <div className="mt-10">
            <Link href="/contact" passHref>
              <a className="px-5 py-3 bg-accent text-black font-bold">
                Hire Me
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CallToAction;
