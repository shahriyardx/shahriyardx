import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";

const Service = ({ title, content, icon }) => {
  const Icon = icon;
  return (
    <div className="bg-zinc-700 p-10 rounded-sm">
      <Icon className="text-accent text-5xl" />
      <h1 className="text-2xl font-bold text-zinc-200 mt-2">{title}</h1>

      <p className="text-zinc-400 mt-2">{content}</p>
    </div>
  );
};

export default Service;
