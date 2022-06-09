import Image from "next/image";
import React from "react";
import LinkButton from "../Button/LinkButton";
import Main from "./Main";
import { BiLeftArrowAlt } from "react-icons/bi";

const Construction = () => {
  return (
    <Main>
      <div className="w-full max-w-[300px] min-h-[300px] mx-auto pt-20 px-4">
        <Image
          src="/images/construction.png"
          width={350}
          height={180}
          alt="Construction"
          layout="responsive"
          objectFit="contain"
        />

        <div className="w-max mx-auto mt-10">
          <LinkButton
            href="/"
            className="bg-zinc-700 text-white mt-5 flex items-center gap-2 hover:bg-zinc-600"
          >
            <BiLeftArrowAlt className="text-2xl" /> Go To Home
          </LinkButton>
        </div>
      </div>
    </Main>
  );
};

export default Construction;
