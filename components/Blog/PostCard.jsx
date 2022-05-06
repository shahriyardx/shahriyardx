import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import { BiUser, BiTime } from 'react-icons/bi'
import Link from 'next/link'

const PostCard = ({ blog }) => {
  const { slug, title, image, meta, createdAt } = blog

  return (
    <div className='bg-zinc-700 rounded-lg p-5'>
      <div className='flex flex-col h-full'>
        <div>
          <div className='w-full aspect-video'>
            <Image 
              src={image}
              width={320} 
              height={180} 
              objectFit='cover' 
              alt={slug} 
              layout='responsive' 
              className='rounded-lg' 
            />
          </div>
          <Link href={`/blog/${slug}`}>
            <a className='title text-lg sm:text-xl md:text-2xl font-bold text-zinc-200 hover:text-accent mt-3 block'>{title}</a>
          </Link>
          <p className='meta-description text-zinc-400 tracking-tighter text-sm sm:text-base mb-5'>{meta}</p>
        </div>

        <div className='flex gap-5 mt-auto'>
          <div className='flex gap-2 text-xs sm:text-sm text-zinc-300 items-center'>
            <BiUser className='text-base text-accent' /> <span className='author'>Shahriyar</span>
          </div>

          <div className='flex gap-2 text-xs sm:text-sm text-zinc-300 items-center'>
            <BiTime className='text-base text-accent' /> <span className='createdAt tracking-tighter'>{moment(createdAt).format('MMMM d, YYYY')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard