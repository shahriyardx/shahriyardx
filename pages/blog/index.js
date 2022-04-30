import React from 'react'
import LinkButton from '../../components/Button/LinkButton'
import Main from '../../components/Layout/Main'
import { BiLeftArrowAlt } from 'react-icons/bi'
import SEO from '../../components/Seo'

const Blog = () => {
  return (
    <Main>
      <SEO title='Blog - Md Shahriyar Alam' url='https://shahriyar.dev/blog' description="Shahriyar's blogs. Read Now..." />

      <div className='min-h-[75vh] bg-zinc-900 flex items-center flex-col justify-center'>
        <h1 className='text-accent text-2xl sm:text-3xl md:text-4xl uppercase font-bold block'>Coming Soon</h1>
        <LinkButton href='/' className='bg-zinc-700 text-white mt-5 flex items-center gap-2 hover:bg-zinc-600'>
          <BiLeftArrowAlt className='text-2xl' /> Go To Home
        </LinkButton>
      </div>
    </Main>
  )
}

export default Blog