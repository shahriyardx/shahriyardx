import React from "react";
import { BiSearchAlt, BiX } from "react-icons/bi";

const GitFilter = ({ language, languages, setFilter, updateQuery }) => {
  return (
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
  );
};

export default GitFilter;
