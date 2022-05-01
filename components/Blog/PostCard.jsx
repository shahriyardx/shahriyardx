import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import { BiUser, BiTime } from 'react-icons/bi'
import Link from 'next/link'

const PostCard = ({ blog }) => {
  const { _id, title, image, meta, createdAt } = blog

  return (
    <div className='bg-zinc-700 rounded-lg p-5'>
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
      <Link href={`/blog/${_id}`}>
        <a className='title text-3xl font-bold text-zinc-200 hover:text-accent mt-3 block'>{title}</a>
      </Link>
      <p className='meta-description text-zinc-400 tracking-tighter text-lg mb-5'>{meta}</p>

      <div className='flex gap-5 mt-auto'>
        <div className='flex gap-2 text-sm text-zinc-300 items-center'>
          <BiUser className='text-base text-accent' /> <span className='author'>Shahriyar</span>
        </div>

        <div className='flex gap-2 text-sm text-zinc-300 items-center'>
          <BiTime className='text-base text-accent' /> <span className='createdAt tracking-tighter'>{moment(createdAt).format('MMMM d, YYYY')}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard