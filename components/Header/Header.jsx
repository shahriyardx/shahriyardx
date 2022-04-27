import React, { useState } from 'react'
import Link from 'next/link'

import Container from '../Layout/Container'
import IconLink from '../Link/IconLink'
import TextLink from '../Link/TextLink'

import { AiFillTwitterCircle, AiFillGithub, AiFillMail, AiFillFacebook } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='h-16 bg-primary text-slate-200 flex items-center'>
      <Container className='px-3 flex items-center'>
        <div>
          <Link href="/">
            <a className='flex gap-1 uppercase text-lg'>
              <span className='font-bold text-white'>Shahriyar</span>
              <span className='text-slate-200 font-thin'>Alam</span>
            </a>
          </Link>
        </div>

        <div className='items-center gap-5 ml-20 hidden lg:flex'>
          <TextLink href='/'>Home</TextLink>
          <TextLink href='/about'>About</TextLink>
        </div>

        <div className='ml-auto gap-10 hidden lg:flex'>
          <div className='flex items-center gap-5'>
            <IconLink href='/' icon={AiFillTwitterCircle}>Twitter</IconLink>
            <IconLink href='/' icon={AiFillGithub}>GitHub</IconLink>
            <IconLink href='/' icon={AiFillFacebook}>Facebook</IconLink>
          </div>

          <div className='p-3 bg-zinc-700 rounded-full'>
            <a href="mailto:contact@shahriyar.dev">
              <AiFillMail />
            </a>
          </div>
        </div>

        <div className='ml-auto lg:hidden'>
          <BiMenu className='text-2xl' onClick={() => setShow(!show)}/>
        </div>
      </Container>

      {show && (
        <div className={`absolute top-16 left-0 w-full bg-secondary lg:hidden`}>
          <div className='flex flex-col w-full'>
            <TextLink href="/" className='p-2'>Home</TextLink>
            <TextLink href="/about" className='p-2'>About</TextLink>
            <TextLink href="/contact" className='p-2'>Contact</TextLink>
          </div>

          <div className='p-2 pb-5 flex gap-3 text-3xl'>
            <a href="#">
              <AiFillGithub />
            </a>

            <a href="#">
              <AiFillFacebook className='rounded-full' />
            </a>

            <a href="#">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header