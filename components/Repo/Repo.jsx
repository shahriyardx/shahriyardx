import React from "react";
import { BiBookBookmark, BiGitRepoForked, BiStar } from "react-icons/bi";
import { motion } from "framer-motion";

const Repo = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    language,
    stargazers_count: stars,
    forks_count: forks,
  } = repo;

  const colorMap = {
    CSS: "#186CAB",
    HTML: "#E44D26",
    Python: "#35699B",
    TypeScript: "#35699B",
    JavaScript: "#F2C01C",
    SCSS: "#C45F92",
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 border-[2px] border-zinc-600 rounded-md text-base flex flex-col"
    >
      <p className="flex items-center gap-2 text-zinc-100">
        <BiBookBookmark className="text-xl" />
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="text-sky-500 font-bold hover:text-blue-400 hover:underline underline-offset-2"
        >
          {name}
        </a>
      </p>
      <p className="text-zinc-400 text-sm mt-2 font-montserrat">
        {description}
      </p>

      <div layout className="flex flex-wrap items-center gap-5 pt-5 mt-auto">
        <div layout className="flex gap-2 items-center">
          <div
            layout
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: colorMap[language] || "white" }}
          ></div>
          <span className="text-zinc-300">{language}</span>
        </div>

        <div layout className="flex items-center gap-2">
          <BiStar className="text-white" />
          <span className="text-zinc-300">{stars}</span>
        </div>

        <div layout className="flex items-center gap-2">
          <BiGitRepoForked className="text-white" />
          <span className="text-zinc-300">{forks}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Repo;
