import React from "react";

const colors: any = {
  React: 'bg-sky-500 text-white',
  Tailwindcss: 'bg-sky-700 text-white',
  Next: 'bg-black text-white',
  Node: 'bg-green-600 text-white',
}

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div
      className={`px-2 py-1 text-xs rounded-lg cursor-pointer ${colors[tag]} `}
    >
      # {tag}
    </div>
  );
};

export default Tag;
