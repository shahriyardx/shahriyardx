import React from 'react'
import Container from '../Layout/Container'
import TextLink from '../Link/TextLink'
import { 
  AiFillTwitterCircle, 
  AiFillGithub, 
  AiFillMail, 
  AiFillFacebook 
} from 'react-icons/ai'

const MobileMenu = () => {
  return (
    <div className={`absolute top-16 left-0 w-full bg-secondary lg:hidden z-10 py-5`}>
      <Container className='px-4'>
        <TextLink href="/" className='py-2'>Home</TextLink>
        <TextLink href="/blog" className='py-2'>Blog</TextLink>
        <TextLink href="/contact" className='py-2'>Contact</TextLink>

        <div className='py-2 pb-5 flex gap-3 text-3xl'>
          <a href="#">
            <AiFillTwitterCircle />
          </a>

          <a href="#">
            <AiFillGithub />
          </a>

          <a href="#">
            <AiFillFacebook className='rounded-full' />
          </a>

          <a href="#">
            <AiFillMail className='rounded-full' />
          </a>
        </div>
      </Container>
    </div>
  )
}

export default MobileMenu