import React from 'react'

const Experience = ({ icon, title, description, projectCount }) => {
  const Icon = icon

  return (
    <div className='p-4 bg-zinc-700 rounded-md'>
      <p className='flex justify-between items-center text-accent'>
        <h3 className='text-lg md:text-xl'>{title}</h3>
        <Icon className='text-xl' />
      </p>
      <p className='text-sm md:text-base text-zinc-500 font-bold'>{description}</p>

      <span className='text-xs sm:text-sm md:text-base mt-4 block tracking-tighter font-black text-white underline underline-offset-2'>{projectCount} Projects</span>
    </div>
  )
}

export default Experience