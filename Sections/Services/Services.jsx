import React from "react";
import Container from "../../components/Layout/Container";

import { BiCustomize, BiCodeAlt, BiCubeAlt } from "react-icons/bi";
import Service from "@/components/Service/Service";

const Services = () => {
  return (
    <div className="bg-zinc-800">
      <Container className="py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Services</span>
          <h1 className="text-4xl font-bold text-zinc-300">What I Do?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          <Service
            icon={BiCubeAlt}
            title="Frontend Development"
            position={1}
            content="Develop modern looking UI using HTML, CSS, JavaScript and ReactJs"
          />
          <Service
            icon={BiCodeAlt}
            title="Backend Development"
            position={2}
            content="Backend REST API development using ExpressJs (JavaScript), Flask (Python), FastAPI (python)"
          />
          <Service
            icon={BiCustomize}
            title="Responsive Design"
            position={3}
            content="Wesbites I make will look good in Mobile, Tablet and Desktop devices."
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;
