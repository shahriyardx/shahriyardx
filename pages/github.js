import React, { useState } from "react";
import GitHeader from "@/components/Header/GitHeader";
import Container from "@/components/Layout/Container";
import Repo from "@/components/Repo/Repo";
import GitProfile from "@/components/GitProfile/GitProfile";
import { BiSearchAlt, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { debounce } from "lodash";
import SEO from "@/components/SEO";

const Github = ({ repos, user }) => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState(null);
  const languages = new Set(repos.map((repo) => repo.language));

  const sorted = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  const filtered = language
    ? sorted.filter((repo) => repo.language === language)
    : sorted;

  const searched = query.trim()
    ? filtered.filter((repo) => repo.name.includes(query))
    : filtered;

  const setFilter = (lang) => {
    setLanguage(lang);
  };

  const updateQuery = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  return (
    <div>
      <SEO
        title="GitHub - Md Shahriyar Alam"
        description={user.description}
        image="/images/git.png"
      />
      <GitHeader />
      <GitProfile user={user} />
      <Container className="pt-10 pb-20">
        <div className="flex gap-5 mb-5 items-center">
          <div className="flex flex-wrap gap-3">
            <span
              onClick={() => setFilter(null)}
              className={`cursor-pointer hover:text-zinc-300
                ${language == null ? "font-bold text-white" : "text-zinc-400"}
              `}
            >
              All
            </span>
            {Array.from(languages).map((lang) => (
              <p
                onClick={() => setFilter(lang)}
                key={lang}
                className={`cursor-pointer hover:text-zinc-300 flex items-center gap-1 select-none
                ${language === lang ? "font-bold text-white" : "text-zinc-400"}
              `}
              >
                <span>{lang}</span>
                {lang === language && (
                  <span className="bg-zinc-600 text-white">
                    <BiX
                      onClick={(e) => {
                        e.stopPropagation();
                        setFilter(null);
                      }}
                    />
                  </span>
                )}
              </p>
            ))}
          </div>

          <div className="items-center bg-zinc-800 px-4 rounded-full hidden md:flex">
            <BiSearchAlt className="text-zinc-400" />
            <input
              type="text"
              className="bg-transparent border-none focus:ring-0 text-white"
              placeholder="Search"
              onChange={updateQuery}
            />
          </div>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {searched.map((repo) => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </AnimatePresence>
        </motion.div>

        {!searched.length && (
          <h1 className="text-2xl font-bold text-zinc-300">
            No repositories found
          </h1>
        )}
      </Container>
    </div>
  );
};

export default Github;

export const getStaticProps = async ({ req, res }) => {
  const repos = await fetch(
    "https://api.github.com/users/shahriyardx/repos"
  ).then((response) => response.json());

  const user = await fetch("https://api.github.com/users/shahriyardx").then(
    (response) => response.json()
  );

  return {
    props: {
      repos,
      user,
    },
    revalidate: 600,
  };
};
