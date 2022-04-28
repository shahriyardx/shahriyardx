import React from 'react'
import Container from '../../components/Layout/Container'
import Project from './Project'

const Projects = () => {
  return (
    <div className='bg-primary'>
      <Container className='py-10 md:py-20'>
        <h1 className='text-4xl font-black tracking-tighter text-zinc-300 text-center mb-10'>Projects</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
          <Project 
            title="Makeown"
            url='https://makeown.cc/'
            description='A discord bot dashboard to manage the bot from a web interface'
            image='/images/projects/makeown.PNG' 
            tags={['HTML', 'CSS', 'JavaScript', 'Python']} 
          />

          <Project 
            title="Crisis Entertainment" 
            url='https://crisisentertainment.com/'
            description='Crisis Entertainment is a video game startup currently operating in Bangladesh, India and Australia.'
            image='/images/projects/crisis.PNG' 
            tags={['NextJs', 'ReactJs', 'NodeJs', 'TailwindCss']} 
          />

          <Project 
            title="Discord Subscription" 
            url='#'
            description='A subscription management website where users can pay monthly'
            image='/images/projects/subscription.png' 
            tags={['HTML', 'CSS', 'JavaScript', 'Python']} 
          />

          <Project 
            title="Mac Studio" 
            url='https://mac-studiox.netlify.app/'
            description='Showcasing Mac Studio frontend design'
            image='/images/projects/max.PNG' 
            tags={['ReactJs', 'NodeJs', 'TailwindCss']} 
          />

          <Project 
            title="Custom Commands" 
            url='https://top.gg/bot/724847752449753140'
            description='A discord bot that allows you to create custom commands without writing codes.'
            image='/images/projects/cc.png' 
            tags={['Python']} 
          />

          <Project 
            title="Wildie" 
            url='https://wildie-shahriyardx.web.app/'
            description='Wild life photographer portfolio and service website'
            image='/images/projects/wildie.PNG' 
            tags={['ReactJs', 'TailwindCss', 'NodeJs']} 
          />
        </div>
      </Container>
    </div>
  )
}

export default Projects