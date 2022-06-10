import React from "react";
import { motion } from "framer-motion";

const Service = ({ title, content, icon, position }) => {
  const Icon = icon;
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: position * 0.2 }}
      className="bg-zinc-700 p-10 rounded-sm sm:last:col-span-2 md:last:col-span-1"
    >
      <Icon className="text-accent text-5xl" />
      <h1 className="text-2xl font-bold text-zinc-200 mt-2">{title}</h1>

      <p className="text-zinc-400 mt-2">{content}</p>
    </motion.div>
  );
};

export default Service;
