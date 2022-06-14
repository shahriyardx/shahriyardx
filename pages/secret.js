import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SEO from "@/components/SEO";

const Hell = () => {
  const [position, setPosition] = useState();
  const [found, setFound] = useState(false);

  const mouseMove = (e) => {
    const { pageX, pageY } = e;
    setPosition({ pageX, pageY });
  };

  const toggleFound = () => {
    setFound(!found);
  };

  return (
    <div
      className="w-full h-screen bg-black grid place-items-center relative overflow-hidden"
      onMouseMove={mouseMove}
      onMouseLeave={() => setPosition(null)}
    >
      <SEO
        title="No wai!!"
        description="Well, I'm not gonna say something about this page."
      />
      <div
        className="flex flex-col items-center gap-3 select-none font-montserrat z-10 p-20"
        onMouseEnter={toggleFound}
        onMouseLeave={toggleFound}
      >
        <h1 className="text-6xl font-bold">No Way!!</h1>
        <p className="text-lg">You found it? Congrats...</p>

        <div className="mt-10">
          <Link href="/" passHref>
            <a className="px-5 py-3 hover:bg-black hover:text-white transition-all border-2 border-black">
              Back To Home
            </a>
          </Link>
        </div>
      </div>
      {position && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: found ? 1.5 : 0.8, opacity: 1 }}
          className="absolute w-60 h-60 bg-light rounded-full flex items-center justify-center"
          style={{ left: position.pageX - 96, top: position.pageY - 96 }}
        />
      )}
    </div>
  );
};

export default Hell;
