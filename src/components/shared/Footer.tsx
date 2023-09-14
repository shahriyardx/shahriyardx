import React from "react"
import Container from "./Container"

const Footer = () => {
  return (
    <div className="bg-zinc-900">
      <div className="py-5">
        <Container className="flex justify-between flex-col md:flex-row items-center gap-1">
          <h1 className="text-3xl md:text-4xl font-black uppercase flex gap-1 text-zinc-300 justify-center">
            <span>Shahriyar</span>
            <span className="font-thin">Alam</span>
          </h1>

          <p className="text-zinc-500 text-sm md:text-lg tracking-tighter text-center">
            Copythight &copy; All Rights Reserved.
          </p>
        </Container>
      </div>
    </div>
  )
}

export default Footer
