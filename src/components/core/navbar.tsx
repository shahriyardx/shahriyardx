"use client"

import Link from "next/link"
import Container from "../layout/container"
import TextLink from "./text-link"
import IconLink from "./icon-link"
import { Github, Linkedin, MenuIcon, Twitter } from "lucide-react"

const Navbar = () => {
  return (
    <div className="h-16 bg-secondary text-secondary-foreground flex items-center">
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

        <div className="gap-5 md:gap-10 ml-auto flex">
          <div className="flex items-center gap-3 sm:gap-5">
            <IconLink
              href="https://twitter.com/shahriyardx"
              icon={Twitter}
              data-umami-event="Twitter Link Clicked"
              data-umami-event-location="Desktop Navbar"
            >
              Twitter
            </IconLink>
            <IconLink
              href="https://github.com/shahriyardx/"
              icon={Github}
              data-umami-event="GitHub Link Clicked"
              data-umami-event-location="Desktop Navbar"
            >
              GitHub
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/devshahriyar/"
              icon={Linkedin}
              data-umami-event="Linkedin Link Clicked"
              data-umami-event-location="Desktop Navbar"
            >
              LinkedIn
            </IconLink>
          </div>
        </div>

        <MenuIcon
          size={25}
          className="ml-5 lg:hidden bg-primary text-primary-foreground p-1"
        />
      </Container>
    </div>
  )
}

export default Navbar
