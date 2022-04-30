import React from 'react'
import Image from 'next/image'
import Tag from '../Tag/Tag'

import { HiOutlineExternalLink } from 'react-icons/hi'

const Project = ({ title, url, tags, image, description}) => {
  return (
    <div className='bg-zinc-800 rounded-xl p-5 flex flex-col gap-2 cursor-pointer'>
      <div className='w-full aspect-video'>
        <Image 
          src={image}
          width={320} 
          height={180} 
          objectFit='cover' 
          alt='Makeown' 
          layout='responsive' 
          className='rounded-lg' 
        />
      </div>
    
      <a 
        className='text-white text-2xl flex items-center hover:text-accent' 
        href={url} 
        rel='noreferrer' 
        target={`${url !== '#' ? '_blank' : '' }`}
      >
          {title}
          <HiOutlineExternalLink className='text-base ml-2 text-accent' />
      </a>
      <p className='text-zinc-500 tracking-tighter'>{description}</p>

      <div className='flex flex-wrap gap-2 mt-auto pt-2'>
        {tags.map((tag, index) => <Tag key={index} text={tag} />)}
      </div>
    </div>
  )
}

export default Project