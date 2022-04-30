import Link from 'next/link'
import React from 'react'
import Container from '../../components/Layout/Container'

const Footer = () => {
  return (
    <div className='bg-zinc-900'>
      <div className=' py-20'>
        <Container className='flex justify-between flex-col md:flex-row items-center gap-1'>
          <h1 className='text-3xl md:text-4xl font-black uppercase flex gap-1 text-zinc-300 justify-center'>
            <span>Shahriyar</span>
            <span className='font-thin'>Alam</span>
          </h1>

          <p className='text-zinc-500 text-sm md:text-lg tracking-tighter text-center'>Copythight &copy; All Rights Reserved.</p>
        </Container>
      </div>
      <div className='flex justify-end px-2 py-1'>
        <Link href='/dashboard'>
          <a className='text-xs text-zinc-400 hover:text-accent'>Manage Site</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer