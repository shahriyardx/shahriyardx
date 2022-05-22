import React from 'react'
import Container from '../../components/Layout/Container'
import Project from '../../components/Project/Project'

const Projects = ({ projects }) => {
  return (
    <div className='bg-primary'>
      <Container className='py-10 md:py-20'>
        <h1 className='text-4xl font-black tracking-tighter text-zinc-300 text-center mb-10'>Projects</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
          {projects.slice(0, 6).map(project => {
            return (
              <Project
                key={project._id}
                title={project.title}
                url={project.url}
                description={project.description}
                image={project.image}
                tags={project.tags.map(tag => tag.value)}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default Projects