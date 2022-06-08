import React from "react";

const Skill = ({ text, icon, className }) => {
  const Icon = icon;
  return (
    <div className="relative group">
      <Icon className={`transition-all ${className}`} />
      <span className="absolute text-sm -top-5 left-1/2 -translate-x-1/2 px-3 rounded-full bg-zinc-600 text-white opacity-0 group-hover:opacity-100 group-hover:-top-7 transition-all">
        {text}
      </span>
    </div>
  );
};

export default Skill;
