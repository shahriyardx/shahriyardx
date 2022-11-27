import React from "react";
import { ITag } from "types";

const Tag = ({ tag }: { tag: ITag }) => {
  return (
    <div
      style={{
        background: tag.attributes.bg_color,
        color: tag.attributes.text_color,
      }}
      className="cursor-pointer rounded-lg px-2 py-1 text-xs"
    >
      # {tag.attributes.name}
    </div>
  );
};

export default Tag;
