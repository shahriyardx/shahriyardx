import Link from "next/link";
import React from "react";
import { BiGridAlt, BiListOl, BiCodeAlt, BiX } from "react-icons/bi";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ open, toggleMenu }) => {
  return (
    <div
      className={`h-screen w-full max-w-[300px] bg-zinc-800 fixed md:static z-50 ${
        open ? "left-0" : "-left-full"
      }`}
    >
      <div className="h-16 flex justify-between md:justify-center px-4 items-center">
        <Link href="/dashboard">
          <a className="uppercase text-lg">
            <span className="font-bold text-white">Dashboard</span>
          </a>
        </Link>

        <BiX className="text-2xl text-red-400 md:hidden" onClick={toggleMenu} />
      </div>

      <div>
        <SidebarLink Icon={BiGridAlt} text="Dashboard" href="/dashboard" />
        <SidebarLink
          Icon={BiListOl}
          text="Posts"
          href="/dashboard/posts"
          active="posts"
        />
      </div>
    </div>
  );
};

export default Sidebar;
