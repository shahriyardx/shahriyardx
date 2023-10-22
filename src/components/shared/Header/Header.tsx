"use client"

import React, { useState } from "react"
import Link from "next/link"

import Container from "../Container"
import IconLink from "../Link/IconLink"
import TextLink from "../Link/TextLink"

import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai"

import { BiMenu } from "react-icons/bi"
import MobileMenu from "./MobileMenu"
import { AnimatePresence } from "framer-motion"

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="z-50 flex items-center h-16 bg-primary text-slate-200">
      <Container className="flex items-center px-3">
        <div>
          <Link href="/">
            <div className="flex gap-1 text-lg uppercase">
              <span className="font-bold text-white">Shahriyar</span>
              <span className="font-thin text-slate-200">Alam</span>
            </div>
          </Link>
        </div>

        <div className="items-center hidden gap-5 ml-20 lg:flex">
          <TextLink href="/">Home</TextLink>
          <TextLink href="/contact">Contact</TextLink>
          <TextLink href="/blog">Blog</TextLink>
          <TextLink href="/github">Git</TextLink>
        </div>

        <div className="hidden gap-10 ml-auto lg:flex">
          <div className="flex items-center gap-5">
            <IconLink
              href="https://twitter.com/shahriyardx"
              icon={AiFillTwitterCircle}
            >
              Twitter
            </IconLink>
            <IconLink
              href="https://github.com/shahriyardx/"
              icon={AiFillGithub}
            >
              GitHub
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/devshahriyar/"
              icon={AiFillLinkedin}
            >
              LinkedIn
            </IconLink>
          </div>

          <div className="p-3 rounded-full bg-zinc-700">
            <a href="mailto:mdshahriyaralam9@gmail.com">
              <AiFillMail />
            </a>
          </div>
        </div>

        <div className="ml-auto lg:hidden">
          <BiMenu className="text-2xl" onClick={() => setShow(!show)} />
        </div>
      </Container>

      <AnimatePresence>{show && <MobileMenu />}</AnimatePresence>
    </div>
  )
}

export default Header
