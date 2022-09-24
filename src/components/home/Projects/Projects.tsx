import React, { useState } from "react"
import Project from "./Project"
import projects from "data/projects"
import { BiChevronDown } from "react-icons/bi"

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const renderRrojects = showAll ? projects : projects.slice(0, 6)
  return (
    <div className="bg-secondary">
      <div className="max-w-6xl mx-auto py-10 md:py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Projects</span>
          <h1 className="text-4xl font-bold text-zinc-300">Recent Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {renderRrojects.map((project) => (
            <Project key={project.slug} project={project} />
          ))}
        </div>
        {projects.length > 6 && (
          <div
            className="mt-5 flex justify-center"
            onClick={() => setShowAll(!showAll)}
          >
            <button className="px-5 py-3">
              {showAll ? (
                <p className="flex items-center gap-2">
                  <span>Show Less</span>
                  <BiChevronDown className="rotate-180" />
                </p>
              ) : (
                <p className="flex items-center gap-2">
                  <span>Show All</span>
                  <BiChevronDown />
                </p>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
