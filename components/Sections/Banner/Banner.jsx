import Image from 'next/image'
import React from 'react'
import Container from '../../Layout/Container'

const Banner = () => {
  return (
    <div className='bg-primary'>
      <Container className='md:grid md:grid-cols-3 py-10 md:py-20 xl:max-w-6xl'>
        <div className='md:col-span-2 flex flex-col justify-center'>
          <div>
            
            <div>
              <p className='bg-accent text-black p-1 px-2 text-xs w-max rounded-md'>Full-Stack Developer</p>
              <h1 className='text-slate-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl my-7'>
                <span>First solve the problem,</span><br />
                <span>Then, write the code.</span>
              </h1>
              <p className='text-xs sm:text-sm text-zinc-500'>I love making complex things in a simple way :)</p>
              <a href="mailto:contact@shahriyar.dev" className='text-accent underline underline-offset-2 uppercase mt-5 block text-sm sm:text-base'>Let&apos;s Chat</a>
            </div>

            <div className='mt-7 flex gap-3 sm:gap-5 md:gap-10 flex-wrap'>
              <div className='text-slate-100 flex gap-2 uppercase'>
                <h1 className='text-4xl md:text-6xl font-semibold font-montserrat'>3</h1>
                <p className='h-full flex flex-col justify-center'>
                  <span className='text-xs sm:text-sm md:text-base text-zinc-500'>Years</span>
                  <span className='text-xs sm:text-sm md:text-base text-zinc-500'>Experience</span>
                </p>
              </div>

              <div className='text-slate-100 flex gap-2'>
                <h1 className='text-4xl md:text-6xl font-semibold font-montserrat'>6</h1>
                <p className='h-full flex flex-col justify-center uppercase'>
                  <span className='text-xs sm:text-sm md:text-base text-zinc-500'>Projects Completed</span>
                  <span className='text-xs sm:text-sm md:text-base text-zinc-500'>On 3 countries</span>
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className='hidden md:block'>
          <Image 
            src='/images/me.png' 
            width={100} 
            height={100}
            alt='Me' 
            objectFit='contain' 
            layout='responsive'
            className='rounded-full' 
          />
        </div>
      </Container>
    </div>
  )
}

export default Banner