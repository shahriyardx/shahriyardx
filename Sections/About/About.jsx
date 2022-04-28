import React from 'react'
import Container from '../../Components/Layout/Container'
import Experience from './Experience'

import { BiPen, BiCodeAlt, BiCube } from 'react-icons/bi'

const About = () => {
  return (
    <div className='bg-zinc-800'>
      <Container className='py-20 grid gap-10 lg:grid-cols-2 px-3'>
        <div className='order-2 lg:order-1'>
          <div className='grid gap-3'>
            <Experience projectCount={6} icon={BiPen} title='Frontend' description='HTML, CSS, ReactJs, NextJs' />
            <Experience projectCount={3} icon={BiCube} title='Backend' description='FastAPI, Nodejs, ExpressJs' />
            <Experience projectCount={6} icon={BiCodeAlt} title='Programming' description='Python, Javascript' />
          </div>
        </div>

        <div className=' lg:px-20 order-1 lg:order-2'>
          <span className='text-xs text-zinc-500'>Introduce</span>
          <h1 className='text-slate-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2'>Hello! I&apos;m Shahriyar </h1>

          <p className='italic text-xs sm:text-sm md:text-lg text-zinc-500 mt-7 mb-5'>Programmers are not made, they are born.</p>

          <p className='text-sm sm:text-base xl:text-lg text-zinc-300'>
            In the very begining of my life I wanted to be a Pilot. 
            Because I wanted to fly on the sky but suddenly I fell in love 
            with Computer Programming and the journey begins there. Now I can&apos;t 
            think of myself without a computer. I know this kind of feels like addiction,
            but I don&apos;t mind getting addicted on computer and programming. I have been coding since 2018. And has completed a lot of projects
          </p>
        </div>
      </Container>
    </div>
  )
}

export default About