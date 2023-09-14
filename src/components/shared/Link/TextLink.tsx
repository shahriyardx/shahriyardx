"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const TextLink = ({ href, children, className }: Props) => {
  const pathname = usePathname()

  return (
    <Link href={href}>
      <div
        className={`flex gap-1 text-base ${className || ""} ${
          pathname == href && "text-accent"
        } hover:text-accent`}
      >
        <span>{pathname == href && "<"}</span>

        <span>{children}</span>

        <span>{pathname == href && ">"}</span>
      </div>
    </Link>
  );
};

export default TextLink;
