import React from "react";
import Container from "../Layout/Container";
import TextLink from "../Link/TextLink";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

const MobileMenu = () => {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "tween" }}
      className={`absolute top-16 left-0 w-full bg-secondary lg:hidden z-10 py-5`}
    >
      <Container className="px-4">
        <TextLink href="/" className="py-2">
          Home
        </TextLink>
        <TextLink href="/contact" className="py-2">
          Contact
        </TextLink>
        <TextLink href="/about" className="py-2">
          About
        </TextLink>
        <TextLink href="/blog" className="py-2">
          Blog
        </TextLink>
        <TextLink href="/github" className="py-2">
          Git
        </TextLink>
        {session?.user && (
          <button
            type="button"
            onClick={signOut}
            className="text-red-400 hover:text-red-500 py-2"
          >
            Logout
          </button>
        )}

        <div className="py-2 pb-5 flex gap-3 text-3xl">
          <a
            href="https://twitter.com/shahriyardx/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>

          <a
            href="https://github.com/shahriyardx/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shahriyardx/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="rounded-full" />
          </a>

          <a href="mailto:mdshahriyaralam9@gmail.com">
            <AiFillMail className="rounded-full" />
          </a>
        </div>
      </Container>
    </motion.div>
  );
};

export default MobileMenu;
