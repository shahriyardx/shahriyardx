import React from "react";
import { motion } from "framer-motion";

const Skill = ({ text, icon, className, position }) => {
  const Icon = icon;
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: position * 0.1 }}
      className="relative group  cursor-pointer"
    >
      <Icon className={`transition-all ${className}`} />
      <span className="absolute text-sm -top-5 left-1/2 -translate-x-1/2 px-3 rounded-full bg-zinc-600 text-white opacity-0 group-hover:opacity-100 group-hover:-top-7 transition-all">
        {text}
      </span>
    </motion.div>
  );
};

export default Skill;
