import React from "react";
import Container from "../../components/Layout/Container";
import Experience from "../../components/Experience/Experience";

import { BiCustomize, BiCodeAlt, BiCubeAlt } from "react-icons/bi";
import Service from "@/components/Service/Service";

const Services = () => {
  return (
    <div className="bg-zinc-800">
      <Container className="py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-700">Services</span>
          <h1 className="text-4xl font-bold text-zinc-300">What I Do?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          <Service
            icon={BiCubeAlt}
            title="Frontend Development"
            content="I can develop modern looking UI using HTML, CSS, JavaScript and ReactJs"
          />
          <Service
            icon={BiCodeAlt}
            title="Backend Development"
            content="I can develop backend REST APIs using ExpressJs (JavaScript), Flask (Python), FastAPI (python)"
          />
          <Service
            icon={BiCustomize}
            title="Responsive Design"
            content="Wesbites I make will look good in Mobile, Tablet and Desktop devices."
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;
