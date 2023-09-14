"use client"

import React from "react"
import Container from "@/components/shared/Container"

import { BiCustomize, BiLogoDiscord, BiCubeAlt } from "react-icons/bi"
import Service from "./Service"

const Services = () => {
  return (
    <div className="bg-zinc-800">
      <Container className="py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Services</span>
          <h1 className="text-4xl font-bold text-zinc-300">What I Do?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          <Service
            icon={BiCubeAlt}
            title="Web Development"
            position={1}
            content="Develop modern looking UI using HTML, CSS, JavaScript and ReactJs"
          />
          <Service
            icon={BiLogoDiscord}
            title="Discord Development"
            position={2}
            content="Develop discord bots using the discord.py, nextcord, and hikari discord API wrapper"
          />
          <Service
            icon={BiCustomize}
            title="Python Development"
            position={3}
            content="With a 3 year personal experience in Python, I can quickly build python projects with most libraries"
          />
        </div>
      </Container>
    </div>
  )
}

export default Services
