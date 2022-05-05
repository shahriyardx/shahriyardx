import Image from 'next/image'
import React from 'react'
import LinkButton from '@/components/Button/LinkButton'
import Container from '@/components/Layout/Container'
import Main from '@/components/Layout/Main'
import SEO from '@/components/SEO'
import { BiLeftArrowAlt } from 'react-icons/bi'

const NotFound = () => {
  return (
    <Main>
      <SEO title='404 Not Found - Md Shahriyar Alam' />

      <Container className='min-h-[75vh] flex flex-col justify-center items-center py-20'>
        <Image src="/images/404.svg" width={500} height={500}  alt="404" objectFit='contain' />

        <LinkButton href='/' className='bg-zinc-700 text-white mt-5 flex items-center gap-2 hover:bg-zinc-600'>
          <BiLeftArrowAlt className='text-2xl' /> Go To Home
        </LinkButton>
      </Container>
    </Main>
  )
}

export default NotFound