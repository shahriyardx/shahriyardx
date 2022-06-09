import Container from "@/components/Layout/Container";
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-primary bg-[url(/images/cta.jpg)] bg-no-repeat bg-center bg-cover">
      <Container className="py-20 z-10">
        <div className="p-10 rounded-2xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 font-montserrat">
            I know your mind wants to hire me 👀
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            The button bellow will make it easy
          </p>

          <div className="mt-10">
            <a
              href="https://www.linkedin.com/in/shahriyardx/"
              className="px-5 py-3 bg-accent text-black font-bold group"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-2">Hire Me</span>
              <span className="group-hover:hidden">💔</span>
              <span className="hidden group-hover:inline-block">💖</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CallToAction;
